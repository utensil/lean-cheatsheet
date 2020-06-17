+++
weight = 1
sort_by = "weight"
template = "index.html"
#insert_anchor_links = "right"
+++

<img id="logo" src="logo.png" alt="Ferris holding a cheat sheet."></img>
<div class="title">Lean Prover Cheat Sheet</div>
<div class="subtitle"><span id="subtitle"">{{ date() }}</span></div>

> Contains clickable links to
> 
> - **Natural Number Game** {{ nng(level="") }},
> - **Theorem Proving in Lean** {{ tpil(page="") }},
> - **Mathematics in Lean** {{ mil(page="") }},
> - **Tutorials** {{ tutorials(page="") }},
> - **The Hitchhiker's Guide to Logical Verification** {{ hiker(page="") }},
> - **Logic and Proof** {{ logic(page="") }},
> - **Docs** {{ docs(name="std") }},
> - **Tactic** {{ tactic(name="std") }},
> - **The Lean Reference Manual** {{ ref(page="") }},
> - **Source** {{ src(name="") }}.
> 
> Other symbols used:
> 
> - largely **deprecated** {{ deprecated() }},
> - is **work in progress** {{ experimental() }},
> - **bad** {{ bad() }}.

<div class="controls">
    <a id="toggle_ligatures" href="javascript:toggle_ligatures()">Fira Code Ligatures (<code>..=, =></code>)</a>
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

Utensil Song, {{ year() }} – [lean-cheatsheet](http://utensil.github.io/lean-cheatsheet/) <br/><br/> [Legal & Privacy](legal)

</footer>
