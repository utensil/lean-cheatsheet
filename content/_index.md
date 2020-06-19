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

<footer>

Utensil Song, {{ year() }} – [lean-cheatsheet](https://utensil.github.io/lean-cheatsheet/) <br/><br/> [Legal & Privacy](legal)

</footer>
