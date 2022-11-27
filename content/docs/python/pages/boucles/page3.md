---
Title: TP1 listes
bookShowToc: false
---

  
  <!--<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
 -->
  <style>
    .editor-box{
      width: 60%;
      display: block;
    }
    #output > div {
    font-family: 'monospace';
    background-color: #e5e5e5;
    border: 1px solid lightgray;
    /*border-top: 0;*/
    font-size: 0.875rem;
    padding: 0.5rem;
  
  }

  #output > div:first-child {
    border-top: 1px solid lightgray;
    display: block;
  }

  #output > div:nth-child(even) {
    border: 0;
  } 
</style>

<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
<py-env>
    - matplotlib
</py-env>

# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div >
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>


# TP1 Listes
## Ex 1: Elements d'une liste
Dans une cellule, saisir la ligne suivante:

```python
s = ['lundi', 'mardi',  'mercredi']
```

Puis tester chacune des propositions suivantes:

| proposition | résultat/commentaire |
|--- |--- |
| `s[0]` |  |
| `s[1]` |   |
| `s[2] = "jeudi"`<br>`s` |   |
| `s[4] = 'samedi' ` |  erreur de type: ... ... |
| `s[1:]` |    |

* **Question a:** Comment obtient-on la liste `['lundi', 'mardi',  'jeudi']` à partir de `['lundi', 'mardi',  'mercredi']`?
* **Question b:** Que retourne la proposition `s[1:]`? Découpe t-elle la liste à partir du premier élément, du 2e élément, ou bien retourne t-elle la liste entière?

## Ex 2: Opérations sur les éléments de listes
Saisir le script suivant:

```python
t = [2, 8,  9,  2]
t[2]  = t[2]  + 5
```

* **Question c:** Que vaut t à la fin du script?


Saisir le script suivant:

```python
t = [10,6,1,12,15]
r = t[3]  - t[1]
```

* **Question d:** Que vaut r à la fin du script?

## Ex 3: Méthodes de listes
Dans une cellule, saisir la ligne suivante:

```python
s = ['lundi', 'mardi',  'mercredi']
```

Puis tester chacune des propositions suivantes:

| proposition | résultat/commentaire |
|--- |--- |
| `len(s)` |  |
| `s.append('jeudi') `<br>`s` |  |
| `len(s)` |  |
| `s.append('vendredi') ` <br>`s` |   |
| `len(s)` |  |
| `s.pop()  `<br>`s` |   |
| `len(s)` |  |

* **Question e:** Pourquoi la valeur renvoyée par `len(s)` évolue t-elle au cours de l'exercice?

## Ex 4: chaine de caractere comme une liste
* script 1

```python
debut = "Bon"
fin = "jour"
debut + fin
```

* script 2

```python
debut = "20"
fin = "22"
debut + fin
``` 

* script 3

```python
debut = [2,0]
fin = [2,2]
debut + fin
```

* **Question f:** pour chacun des scripts précédents, que réalise l'oparation `+`? Y-a-t-il une différence entre 
  *  l'opérateur `+`appliqué à une chaine de caractères
  *  l'opérateur `+` appliqué à une liste?

## Ex 5:
> Ecrivez un programme qui, selon le numéro `n` du jour de la semaine (1-7) affiche le nom du jour de la semaine.

Ce programme utilise une liste `semaine` que vous devrez renseigner.

```python
n = 3
semaine = [...]
...
```


## Ex 6: Liste de listes
On définit une liste appelée `matrice`

Dans une cellule Python, saisir la ligne suivante:

```python
matrice  = [[1,2,3], [4,5,6],  [7,8,9],  [10,11,12]]
```

Utiliser un autre cellule de l'editeur pour explorer les propositions du tableau. 

* **Question g:** Recopier et compléter le tableau:

| proposition | valeur |
|--- |--- |
| `matrice[1][2]` |   |
| `matrice[2][1]` |   | 
| `matrice[3][0]` |   | 

* **Question h:** on souhaite maintenant remplir la 1ere colonne du tableau, celle des *propositions*. En faisant des recherches à l'aide de l'editeur Python, retrouver celle qui affichera la bonne valeur, puis recopier et completer le tableau.

| proposition | valeur |
|--- |--- |
| `matrice[..][..]` | 2  |
| `matrice[..][..]` | 4 | 
| `matrice[..][..]` | 12  | 

* **Question i:** On considère la liste de listes suivante :

```python
tictactoe = [['X', 'O',  'O'],
             ['O', 'O',  'O'],
             ['O', 'O',  'X']]
```
*(la liste peut être écrite sur une même ligne ou avec un retour à la ligne pour chaque élément comme vu ici)*

Quelle instruction permet d'obtenir une diagonale de 'X' ?


## Ex 7: tracer un graphique
On donne les listes de relevés du temps et de la vitesse pour un mobile. 

La vitesse `v[0]`est relevée au temps `t[0]`, `v[1]`est relevée au temps `t[1]`, etc...

```python
t = [0,0.04,0.08,0.12,0.16,0.2,0.24]
v = [5.2,4.8,4.41,4.02,3.63,3.23,2.84]
```

* Completer le script python suivant pour afficher un graphique en nuage de points, avec le temps en abscisses et la vitesse en ordonnées.

```python
import matplotlib.pyplot as plt

plt.clf()
plt.grid()
plt.scatter(...
plt.xlabel('temps(min)')
plt.ylabel('...')
plt
```

# Suite du TP: Les boucles et les parcours de liste


