---
Title: variables
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


# Variables
**1. Definition:** Une variable sert à stocker une valeur, qui peut être un nombre, une chaine de caractère, ou autres. Une variable est identifiée par un nom, et pointe vers un espace mémoire.

<figure>
<div>
<img src="../images/var5.png" alt="affectation variable">
<figcaption>VARIABLE = espace de STOCKAGE</figcaption>
</div>
</figure>

**2. Quel nom peut-on choisir pour une variable?:** On peut choisir une lettre simple, minuscule ou majuscule, ou une chaine de caractères SANS espaces, et commençant obligatoirement par une LETTRE. Le nom peut contenir certains caractères spéciaux comme par exemple `-` ou `_`.

Exemples de noms de variables:

* x
* y
* a
* B
* longueur_L1
* nom
* age
* personne3
* Score
* Points_de_vie
* ...

**3. Affectation** On **affecte** une valeur à une variable en utilisant l'opérateur `=`.

Par exemple, pour *affecter* la valeur 5 à la variable x, on fait:

```python
x = 5
```

Pour vérifier la valeur d'une variable, il suffit d'écrire celle-ci:

* soit toute seule dans une cellule du notebook

```python
x
# retourne 
5
``` 

* soit à la dernière ligne de la cellule du notebook:

```python
x = 5
# retourne 
5
```



On peut modifier la valeur d'une variable existante. On peut méme lui affecter le résultat d'une opération:

```python
x = 12/2
x
# retourne
6
```

On peut même utiliser la valeur de cette même variable pour l'opération:

```python
x = x + 1
x
# retourne
7
```
**4. Opérations sur les variables**
Une variable a un **TYPE** qui est défini lors de l'affectation. Python s'adapte lorsque vous faites une affectation et choisit le type correspondant.

Pour démarrer, nous verrons les TYPES **str** (chaine de caractère), **int** (nombre entier) et **float** (nombre décimal, en virgule flottante).

Les opérations possibles sur une variable dépendent de son type. 

* Pour les variables de type nombre **int** et **float**, on peut utiliser les opérateurs `+,-,*,/,**,//,%`
* Pour les variables de type **str** on peut aussi utiliser les opérateurs `+,*` mais le résultat est différent (opérateurs de concaténation).


# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div>
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>

## Travaux pratiques: opérations sur les nombres

> Tester les scripts suivants dans l'editeur Python. Pour cela, recopier dans l'ordre, et dans la même cellule, chacune des instructions du script, et executer celle-ci. Repondre ensuite aux questions.

### Script 1

```python
age = 0
age = age + 1
age
```

* **Question a:** quelle est la valeur de `age` à la fin du script?

### Script 2
Le programme suivant permet de connaitre en quelle année un enfant, né en 2022, aura 17 ans
```python
age = 0
annee = 2022
age = age + 17
annee = annee + age
annee
```

* **Question b:** en quelle année aura-t-il 17 ans?

### Script 3
On veut réaliser les opérations suivantes:

```python
nombre=2*nombre
nombre=nombre-10
nombre=nombre**2
nombre=nombre-5
```

* **Question c:** Quel est le résultat (c'est à dire la valeur finale de `nombre`) pour une valeur de depart `nombre = 5`?

### Script 4
Écrire un programme dans l’éditeur qui :

- affecte 3 à la variable nombre
- Ajoute 7 au triple du nombre donné
- Multiplie le résultat par le nombre donné
- Soustrait au résultat le nombre donné ;
- Affiche le résultat obtenu.

* **Question d:** Quel est le résultat?

## Opérations sur les chaines de caractères

### Script 5
Associer des chaines de caractères.

```python
debut = "bonne annee"
milieu = " "
fin = "grand mere"
message = debut + milieu + fin
message
```

* **Question e:** L'exemple précedent vous a rappelé que l'opérateur `+` est l'opérateur de concaténation avec les chaines de caractères. Ecrire un nouveau script qui construit le message suivant: `HoHoHoHoHoHoHoHoHoHo` avec le minimum d'instructions. *Astuce: utiliser l'opérateur* `*`

### Script 6
Associer des valeurs numériques et des chaines de caractères

```python
age = 21
nom = "Kevin"
message = "mon nom est " + nom + ", et j'ai " + age + " ans"
message
```

* **Question f:** Le script s'execute t-il, ou bien renvoie-t-il une erreur? Quelle erreur le cas écheant?
* **Question g:** Modifier l'avant derniere ligne par: `message = "mon nom est " + nom + ", et j'ai " + str(age) + " ans"`. Le script fonctionne t-il? Que renvoie t-il?

*Remarque:* La fonction `str` va tranformer la valeur numerique `age` en une chaine de caractères (les caractères "2" et "1").

### Script 7
Afficher avec la fonction `print`

```python
a = 45
b = 26
print('le reste de la division de ' + str(a) + ' par ')
```

* **Question h:** Completer la derniere ligne du script pour afficher la phrase suivante: `Le reste de la division de 45 par 26 est egal a 19` Vous ne devrez pas écrire les chiffres 26 et 19 dans le message. Seulement utiliser les variables, ou une opération sur ces variables.




