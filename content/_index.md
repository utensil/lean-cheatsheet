+++
weight = 1
sort_by = "weight"
template = "index.html"
#insert_anchor_links = "right"
+++

<div class="title">Lean Prover Cheat Sheet</div>
<div class="subtitle"><span id="subtitle"">{{ date() }}</span></div>

<blockquote>

<div class="toc">

<div class="column">

Contains clickable links to these guides:

- **Natural Number Game** {{ nng(level="") }}
- **Theorem Proving in Lean** {{ tpil(page="") }}
- **Mathematics in Lean** {{ mil(page="") }}
- **Tutorials** {{ tutorials(page="") }}
- **Logic and Proof** {{ logic(page="") }}
- **The Hitchhiker's Guide** {{ hiker(page="") }}

</div>

<div class="column">

... and these docs:

- **The Lean Reference Manual** {{ ref(page="") }}
- **Mathlib Docs** {{ docs(name="nat") }}
- **Tactic** {{ tactic(name="assume") }}
- **Source** {{ src(name="nat") }}

<!-- Uses these symbols:

- largely **deprecated** {{ deprecated() }}
- is **work in progress** {{ experimental() }}
- **bad** {{ bad() }} -->

</div>

</div>

</blockquote>

<div class="controls">
    <a href="javascript:toggle_night_mode()">Night Mode &#x1f4a1;</a>
</div>

<div class="noprint">

<div class="toc">

<div class="column">

<!-- **TODO**

- TODO -->

</div>

<div class="column">

<!-- **TODO**

- TODO -->

</div>

</div>
</div>

## Hello, Lean!

If you are new to Lean, maybe you want to try these:

### A First Proof

```
example (m n : ℕ) : m + n = n + m :=
by simp [nat.add_comm]
```
### A Longer Proof

```
import tactic
import tactic.lint

open int

theorem le.antisymm : ∀ {a b : ℤ}, a ≤ b → b ≤ a → a = b :=
begin
assume a b : ℤ, assume (H₁ : a ≤ b) (H₂ : b ≤ a),
obtain ⟨n, Hn⟩ := int.le.dest H₁,
obtain ⟨m, Hm⟩ := int.le.dest H₂,
have H₃ : a + of_nat (n + m) = a + 0, from
  calc
    a + of_nat (n + m) = a + (of_nat n + m) : rfl
      ... = a + (n + m)                     : by rw of_nat_eq_coe
      ... = a + n + m                       : by rw add_assoc
      ... = b + m                           : by rw Hn
      ... = a                               : Hm
      ... = a + 0                           : by rw add_zero,
have H₄ : of_nat (n + m) = of_nat 0, from add_left_cancel H₃,
have H₅ : n + m = 0,                 from of_nat.inj H₄,
have h₆ : n = 0,                     from nat.eq_zero_of_add_eq_zero_right H₅,
show a = b, from
  calc
    a = a + 0    : by simp_rw [add_zero]
  ... = a + n    : by simp_rw [h₆, int.coe_nat_zero]
  ... = b        : Hn
end
```

This example proof is rewritten from [Lean 2 paper example](https://github.com/leanprover/lean2/blob/master/library/data/int/order.lean#L112), it demonstrats the first 4 of 6 combinable proof paradigms Lean supports:

<div class="tabs">

<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-1" name="tab-hello" checked>
<label class="tab-label" for="tab-hello-1"><b>Tactic</b></label>
<div class="tab-panel">
<div class="tab-content">

#### What is it 

> {{ tpil(page="tactics.html#entering-tactic-mode") }}

Reasoning backwards:

goal → transformed (sub-)goals → hypotheses

#### Looks like

`begin ... end`

`by { ... }`

`intro`/`apply`/`exact`/...

</div></div></div>

<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-3" name="tab-hello">
<label class="tab-label" for="tab-hello-3"><b>Term</b></label>
<div class="tab-panel">
<div class="tab-content">

#### What is it 

> {{ tpil(page="tactics.html#entering-tactic-mode") }}

Reasoning concisely like lambda functions with the help of the type system.

#### Looks like

`λ x y, f $ g x y`

</div></div></div>

<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-3" name="tab-hello">
<label class="tab-label" for="tab-hello-3"><b>Calculational</b></label>
<div class="tab-panel">
<div class="tab-content">

> [calc](https://leanprover-community.github.io/extras/calc.html) {{ tpil(page="quantifiers_and_equality.html#calculational-proofs") }}

#### What is it

Reasoning like doing calculation with intermediate steps justified by a short proof

#### Looks like

```
calc a + b
     = a + 0 + b : by tactic_proof
  ...= a + (0 + b) : term_proof
  ...≥ a : proof
```
</div></div></div>

<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-3" name="tab-hello">
<label class="tab-label" for="tab-hello-3"><b>Conversation</b></label>
<div class="tab-panel">
<div class="tab-content">

> [conv](https://leanprover-community.github.io/extras/conv.html)

#### What is it

Freely traverse in the lhs and rhs of hypotheses and goals, to manipulate them.

#### Looks like

`conv_lhs { ... }`

`conv_rhs { ... }`

#### Example

```
example : 0 + 0 = 0 :=
begin
  conv_lhs {simp}
end
```

</div></div></div>

<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-3" name="tab-hello">
<label class="tab-label" for="tab-hello-3"><b>Pattern matching</b></label>
<div class="tab-panel">
<div class="tab-content">

#### What is it

(a.k.a equation compiler )

Prove for each matched pattern, optionally recursively, good for inductive type and recursive functions.

#### Looks like

`| pattern := proof`

#### Example

```
lemma zero_le : ∀ (n : ℕ), 0 ≤ n
| 0     := nat.le_refl 0
| (n+1) := less_than_or_equal.step (zero_le n)
```

</div></div></div>

</div>

<footer>

Utensil Song, {{ year() }} – [lean-cheatsheet](https://utensil.github.io/lean-cheatsheet/) <br/><br/> [Legal & Privacy](legal)

</footer>
