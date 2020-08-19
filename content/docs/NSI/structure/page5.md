---
Title : graphes
---

# graphes
On appelle **graphe** la donnée d'un ensemble fini V de points (ou sommets du graphe, *vertices* en anglais) et d'un ensemble E de liens entre ces points.

$$G = (V,E)$$

L'ensemble E de liens peut être vu comme une relation **R** sur V &#xD7; V. 

* Lorsque cette relation est symétrique (c'est à dire que l'existence d'un lien entre un sommet s<sub>1</sub> et un sommet s<sub>2</sub> est réciproque) le graphe est dit *non orienté*. Un lien est appelé une *arête*.
* Lorsque cette relation n'est pas symétrique, le graphe est dit *orienté*. On parle alors *d'arc* entre deux sommets.


Un **chemin** P = (S,A) est défini par : S = {s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub>}, A = {s<sub>0</sub>s<sub>1</sub>, s<sub>1</sub>s<sub>2</sub>, ..., s<sub>k-1</sub>s<sub>k</sub>} avec S &sub; V et A &sub; E.

Autrement dit, un chemin est une suite consécutive d'arêtes ou d'arcs.
