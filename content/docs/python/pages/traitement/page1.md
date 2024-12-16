---
Title: graphique
---

# Tracé de graphiques
La documentation complète de `matplotlib.pyplot`: [Lien](https://matplotlib.org/stable/api/pyplot_summary.html)

**module**: D'abord importer le module:

```python
import matplotlib.pyplot as plt
```

**Curseur:** Ajouter *Cursor* si vous avez besoin de faire un relevé sur le graphique:

```python
from matplotlib.widgets import Cursor
```

**Script minimal**: voici un exemple de tracé de 2 courbes superposées:

* l'une de type nuage de points `scatter` (points non reliés)
* l'autre de type `plot` (points reliés entre eux)

```python
plt.clf()
axes = plt.gca()
plt.scatter(x,y,color='silver',marker='.',label='titre courbe 1')
#plt.grid(True,which='both')
#plt.legend(loc='best')
#plt.title('moyenne glissante')


plt.plot(x_gli,signal_lissage,color='red',label='titre courbe 2')
#plt.grid(True,which='both')
#plt.legend(loc='best')
cursor = Cursor(axes, useblit=True, color='red', linewidth=2)
# cursor non implémenté sous jupyter notebook
plt.show()
```

**lignes optionnelles:**

* La fonction `gca` permet de gérer les axes et curseur.
* La fonction `clf` permet d'effacer la figure courante et de remettre les réglages graphiques à zero.
* `grid` pour afficher une grille


