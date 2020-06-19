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
- **Tactic** {{ tactic(name="std") }}
- **Source** {{ src(name="nat") }}

Uses these symbols:

- largely **deprecated** {{ deprecated() }}
- is **work in progress** {{ experimental() }}
- **bad** {{ bad() }}

</div>

</div>

</blockquote>

<div class="controls">
    <a href="javascript:toggle_night_mode()">Night Mode &#x1f4a1;</a>
</div>

<div class="noprint">

<div class="toc">

<div class="column">

**TODO**

- TODO

</div>

<div class="column">

**TODO**

- TODO

</div>

</div>
</div>

## Hello, Lean!

If you are new to Lean, maybe you want to try these:


<div class="tabs">

<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-1" name="tab-hello" checked>
<label class="tab-label" for="tab-hello-1"><b>First Proof</b></label>
<div class="tab-panel">
<div class="tab-content">

```
example (m n : ℕ) : m + n = n + m :=
by simp [nat.add_comm]
```

</div></div></div>


<!-- NEW TAB -->
<div class="tab">
<input class="tab-radio" type="radio" id="tab-hello-3" name="tab-hello">
<label class="tab-label" for="tab-hello-3"><b>A Longer Proof</b></label>
<div class="tab-panel">
<div class="tab-content">

```
class has_dist (α : Type*) := (dist : α → α → ℝ)

instance has_dist_metric_quot {α : Type u} [premetric_space α] : has_dist (metric_quot α) :=
{
  dist := quotient.lift₂ (λp q : α, dist p q)
  begin
    assume x y x' y' hxx' hyy',
    have Hxx' : dist x  x' = 0 := hxx',
    have Hyy' : dist y  y' = 0 := hyy',
    have A    : dist x  y  ≤ dist x' y' := calc
                dist x  y  ≤ dist x  x' + dist x' y   : premetric_space.dist_triangle _ _ _
                       ... = dist x' y                : by simp [Hxx']
                       ... ≤ dist x' y' + dist y' y   : premetric_space.dist_triangle _ _ _
                       ... = dist x' y'               : by simp [premetric_space.dist_comm, Hyy'],
    have B    : dist x' y' ≤ dist x  y   := calc
                dist x' y' ≤ dist x' x  + dist x y'   : premetric_space.dist_triangle _ _ _
                       ... = dist x  y'               : by simp [premetric_space.dist_comm, Hxx']
                       ... ≤ dist x  y  + dist y y'   : premetric_space.dist_triangle _ _ _
                       ... = dist x  y                : by simp [Hyy'],
    exact le_antisymm A B
  end
}
```

</div></div></div>

</div>

<footer>

Utensil Song, {{ year() }} – [lean-cheatsheet](https://utensil.github.io/lean-cheatsheet/) <br/><br/> [Legal & Privacy](legal)

</footer>
