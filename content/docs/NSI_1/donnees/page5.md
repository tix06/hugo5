---
Title: fonctions en python
---

# Les fonctions en python
## Généralités
### fonctions natives du langage
Tous les langages de programmation fournissent un large ensemble de fonctions prêtes à être utilisées. Nous avons déjà rencontré diverses fonctions prédéfinies, de la librairie standart : `print`, `input`, `range`, `len`.

### fonctions programmées
Les fonctions permettent de rendre le script plus efficace, plus facile à lire et à vérifier. Un bonne pratique est de faire régulierement du *remaniement* de son code : C'est à dire ré-écrire les parties du programme qui *fonctionnent* et les mettre dans une fonction ou un module. Cela evite aussi les répétitions. On remplace alors le code par un appel à une fonction.


> On peut revoir la fin du TP sur les fonctions à la page [TPn°1 Calculs en python](/docs/NSI_1/donnees/page2/#fonctions-programm%C3%A9es)

<br>

> *Définition :* Une fonction est un bloc de code auquel on donne un nom en vue de le reutiliser. L'appel de son nom exécute tout le bloc de code que cette fonction contient.

Pour créer une fonction, il faut la definir avec le mot clé `def`, suivi du nom de la fonction, d'une paire de parenthèses suivies de `:`.

### Return
La fonction peut retourner une valeur. Celle-ci est alors mise après le mot clé `return`.

```python
def salut():
  """Acueillir tout le monde"""
  return 'bonjour tout le monde'
```

On appelle cette fonction à l'aide de son nom, suivi des parenthèses : 

```python
salut()
# retourne (et affiche) 'bonjour tout le monde'
```

# Travaux pratiques


