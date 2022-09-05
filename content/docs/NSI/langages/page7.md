---
Title: langages mathematiques
---

# Pourquoi 1 + 1 = 2 ?
Pour comprendre cette opération, il faut déjà comprendre la signification de chacun des symboles utilisés, les chiffres 1 et 2, et les opérateurs + et =

* 1
* +
* =
* 2

## Les chiffres
Les symboles des chiffres nous sont ainsi intuitifs, mais, dans l'idée d'une construction du langage mathématique, il doit exister une règle qui nous dit:

* que le successeur immédiat de 1, dans l'ensemble des entiers naturels, est le 2 et non le 3. (et qu'il existe aussi la notion de predecesseur)
* que le plus petit des entiers naturels est le 0

Cet [article du site automaths](https://automathssite.wordpress.com/2017/08/18/savez-vous-compter-les-choux-a-la-mode-de-peano/) détaille ainsi la construction de l'ensemble des entiers naturels par des axiomes.

<figure>
    <img src="../images/page7/naturels.png">
    <figcaption>Comment sont placés les successeurs pour <br>les entiers naturels?</figcaption>
</figure>

[Giuseppe Peano](https://fr.wikipedia.org/wiki/Giuseppe_Peano) (1858-1932) est un mathématicien et linguiste italien. Il a repertorié les caractéristiques structurelles des nombres naturels dans une liste d'**axiomes** énoncés dans la symbolique logique. Aujourd'hui, ces axiomes constituant le langage mathématique traitent tous les signes mathématiques et logiques, et jouent un rôle analogue à celui de la grammatisation dans les langues naturelles.

<figure>
  <a href="https://fr.wikipedia.org/wiki/Giuseppe_Peano">
    <img src="../images/page7/peano.jpeg">
    <figcaption>Giuseppe Peano (1858-1932) <br>mathématicien et linguiste italien</figcaption>
  </a>
</figure>

Une fois établie la construction de l’ensemble des entiers naturels selon Peano, nous allons nous intéresser aux axiomes définissant les symboles + et =.

## l'égalité, ou l'identité =
L'identité est définie par 2 propriétés:

* a = b, b = c → a = c
* a<sub>1</sub> = a<sub>2</sub> → f(a<sub>1</sub>) = f(a<sub>2</sub>)

## l'addition +
Voir l'article [Qu’est-ce que ça veut dire additionner ?](https://automathssite.wordpress.com/2017/10/13/quest-ce-que-ca-veut-dire-additionner/)  du site automaths.

On y lira que **0 + 1 = 1** est l'un des axiomes définissant l'addition, et s'écrit en langage axiomatique:

$$0 + S_0 = SS_0$$ 

<figure>
    <img src="../images/page7/addition.png">
    <a href="https://automathssite.wordpress.com/2017/10/13/quest-ce-que-ca-veut-dire-additionner/">
    <figcaption>L'addition: la réunion de 2 ensembles</figcaption>
  </a>
</figure>



## **Questions**

* **Q1**: Qui était Giuseppe Peano et qu'a-t-il cherché à montrer à propos des entiers naturels?
* **Q2**: Qui était le mathématicien Kurt Gödel, et qu'a-t-il apporté à la théorie sur le langage mathématique initiée par Giuseppe Peano? En particulier, ce que l'on appelle la [complétude d’un système d’axiomes](https://www.pourlascience.fr/sd/histoire-sciences/vrai-ou-demontrable-5560.php) ?
* **Q3**: A quoi peut-on comparer un axiome mathématique? Y-a-t-il quelque chose d'équivalent dans les langues naturelles?
* **Q4**: Qu'est ce que l'addition +?
* **Q5**: Qu'est ce que l'égalité =? Commenter les 2 propriétés qui la définissent.

# Compléments sur les Mathématiques
- notes issues d'un cours d'Université math.[UNICE](https://math.unice.fr/~frapetti/analyse/Logique.pdf)

Les mathématiques actuelles sont bâties de la façon suivante :

* on part d’un petit nombre d’affirmations, appelées axiomes, supposées vraies à priori (et que l’on ne cherche donc pas à démontrer) ;
* on définit ensuite la notion de démonstration (en décidant par exemple de ce qu’est une implication, une équivalence...) ;
* on décide enfin de qualifier de vraie toute affirmation obtenue en fin de démonstration et on appelle « théorème » une telle affirmation (vraie).
A partir des axiomes, on obtient donc des théorèmes qui viennent petit à petit enrichir la théorie mathématique. En raison des bases (les axiomes) non démontrées, la notion de « vérité » des mathématiques est sujette à débat.

**Axiome**. Un axiome est un énoncé supposé vrai à priori et que l’on ne cherche pas à démontrer.
Ainsi, par exemple, Euclide a énoncé cinq axiomes (« les cinq postulats d’Euclide »), qu’il a renoncé à démontrer et qui devaient être la base de la géométrie (euclidienne). Le cinquième de ces axiomes a pour énoncé : « par un point extérieur à une droite, il passe une et une seule droite parallèle à cette droite ».

Aujourd'hui, ces axiomes constituant le langage mathématique traitent tous les signes mathématiques et logiques, et jouent un rôle analogue à celui de la grammatisation dans les langues naturelles.

**Proposition** (ou assertion ou affirmation). Une proposition est un énoncé énoncé auquel on peut attribuer une valeur de vérité *vrai* ou *faux*. Par exemple, « tout nombre premier est impair » et « tout carré de réel est un réel positif » sont deux propositions. Il est facile de démontrer que la première est fausse et la deuxième est vraie. Le mot proposition est clair : on propose quelque chose, mais cela reste à démontrer. Une proposition est construite à partir des axiomes du langage.

**Théorème**. Un théorème est une proposition vraie (et en tout cas démontrée comme telle). On utilise aussi en informatique le terme d'**assertion** pour une proposition vraie.

**Définition**: souvent équivalent à axiome

**Conjecture**:  proposition que l’on suppose vraie sans parvenir à la démontrer. (et qu'il est peut être impossible de démontrer).

Voici la liste des <a href="https://fr.wikipedia.org/wiki/Probl%C3%A8mes_non_r%C3%A9solus_en_math%C3%A9matiques">plus célèbres conjectures</a> qu'il reste encore à démontrer. 

Pour exemple, la <a href="https://fr.wikipedia.org/wiki/Conjecture_de_Goldbach">conjecture de Goldbach</a> s'énonce ainsi:

> Tout nombre entier pair supérieur à 3 peut s’écrire comme la somme de deux nombres premiers.

<figure>
  <img src="../images/page7/goldbach.png">
  <a href="https://fr.wikipedia.org/wiki/Conjecture_de_Goldbach"><figcaption>Illustration de la<br>conjecture de Goldbach</figcaption></a>
</figure>

# Calcul propositionnel
On va avoir besoin d'ajouter aux ensembles de nombres un nouvel ensemble particulier: un ensemble contenant 2 éléments contenant les valeurs de verité *vrai / faux*. Cela nous permettra de produire des démonstrations, et ainsi de prouver des propositions.

Dans ce paragraphe, on étudie les propositions en tant que telles, et les liens qui peuvent exister entre elles, sans se préoccuper du contenu de ces propositions.

On rappelle qu’une proposition est un énoncé pouvant être vrai ou faux. On dit alors que les deux valeurs de vérité d’une proposition sont « vrai » et « faux ».

## Equivalence logique
Définition 1. Deux propositions équivalentes P et Q sont deux propositions ayant les mêmes valeurs de vérité. Cette phrase peut se visualiser dans un tableau appelé table de vérité dans lequel on fait apparaître les différentes valeurs de vérité possibles pour le couple (P, Q) (Vrai et Vrai, Vrai et Faux, ...) et, en correspondance, les valeurs de vérité de la proposition P ⇔ Q. Ainsi, la table de vérité de l’équivalence logique P ⇔ Q est :

| P | Q | P <=> Q |
| --- | --- | --- |
| F | F | V |
| F | V | F |
| V | F | F |
| V | V | V |

On peut ainsi lire, deuxième ligne, que si P est vraie et Q est fausse, P ⇔ Q est fausse.
L’équivalence logique joue pour les propositions, le rôle que joue l’égalité pour les nombres. Les expressions 3 + 2 et 5 ne sont pas identiques et pourtant on écrit 3+2 = 5. De même, les propositions (x^2 = 1) et (x = 1 ou x = −1) ne sont pas identiques et pourtant on écrit (x^2 = 1) ⇔ (x = 1 ou x = −1).

## Implication
Si P et Q sont deux propositions, on définit l’implication logique : P ⇒ Q par sa table de vérité.

| P | Q | P => Q |
| --- | --- | --- |
| F | F | V |
| F | V | V |
| V | F | F |
| V | V | V |

P et Q deux propositions. (P ⇒ Q) ⇔ (nonP ∨ Q).
P ⇒ Q est fausse dans l’unique cas où P est vraie et Q est fausse: si P (est vraie) alors forcément Q (est vraie aussi). Mais pas réciproquement.

## Négation d’une proposition
Soit P une proposition. On définit sa négation, notée nonP (ou ⌉P), à partir de sa table de vérité.

| P | nonP |
| --- | --- |
| V | F |
| F | V |

## Les connecteurs logiques « et » et « ou »
Soient P et Q deux propositions. On peut définir les propositions « P ou Q », notée P ∨ Q, et « P et Q », notée P ∧ Q par les tables de vérité ci-dessous.

| P | Q | P ∧ Q | P ∨ Q |
| --- | --- | --- | --- |
| F | F | F | F |
| F | V | F | V |
| V | F | F | V |
| V | V | V | V |

*Remarque:* Le connecteur logique OU n'a pas le sens du OU exclusif. En effet, on peut voir que lorsque P est vraie et Q est vrai, alors P∨Q est vraie

## Combinaisons de propositions
Tout énoncé peut s’écrire en utilisant uniquement la conjonction ∧ et la négation (par exemple, P ⇔ Q est la proposition non(P ∧ nonQ) ∧ non(Q ∧ nonP)). Ce résultat a une importance en électronique et en informatique.

# Un problème mathématique
En classe de mathématiques, **un problème mathématique** comprend un énoncé (la description d'un situation) suivi d'une ou plusieurs questions. Il est généralement demandé pour répondre aux questions posées d'effectuer des calculs avec les données contenues dans l'énoncé.

Toute question ne peut pas forcément s'énoncer dans un langage mathématique.

En informatique, pour un problème donné, on cherche à trouver une procédure pour le résoudre. On doit pouvoir traiter cette procédure à l'aide d'une machine. Si cette procedure existe, et si le nombre d'actions réalisées par la machine n'est pas infini, alors le problème peut être résolu. (fonction calculable selon les données de l'énoncé). 

## Exercices sur les procédures de calcul
### Ex 1: Trouver une procédure pour calculer 2 + 3
On utilisera uniquemement les propositions suivantes:

* les entiers naturels s'expriment selon la théorie axiomatique vue en classe: SS<sub>0</sub> succede à S<sub>0</sub> qui succede à 0...
* définitions axiomatique de l'addition

On considère qu'il existe une fonction d'affichage

### Ex 2: Trouver une procédure pour calculer 3 - 2
Mêmes outils que pour l'exercice 1. La relation de prédecesseur est également connue.

### Ex 3: Trouver une procédure pour calculer 30 * 20
On peut utiliser toute proposition issue du calcul propositionnel, dont les opérateurs d'implication, ET, OU, NON. On pourra également utiliser les variables simples.

## Exercices sur le langage mathématique
Pour chacun de ces exercices, vous devrez écrire une proposition mathématique qui résoud le problème posé.

### Ex 1: Le du problème peut il être mis sous forme de langage mathématique?

* Bois<sup>2</sup> = Argent
* Or - Perle = Porcelaine
* (Bois * Cuir) + Bois = Cristal
* Vermeil - Perle = ?

*Aide: Créer un langage mathématique utilisant les mots et symboles de cet énoncé. Si cela est possible, résoudre ce problème*

### Ex 2: Le du problème peut il être mis sous forme de langage mathématique?

* Réunion hostile entre deux armées
* Diamant monté seul, le plus souvent en bague
* Prothèse dentaire
* Qui est couvert de vermine
* Capitale des philippines
* Petit pieu

*Aide: On cherche à trouver le point commun entre les solutions aux définitions de ce problème.*

### Ex 3: Le problème peut il être mis sous forme de langage mathématique?

a, b, c, d, e, f = "R", "E", "S", "U", "M", "A"

On veut que l'ordre des lettres soit inversé dans les variables a, b, c, d, e, f.

*Aide: On pourra utiliser une ou plusieurs autres variables si besoin.*

### Ex 4: Le problème peut il être mis sous forme de langage mathématique?

On dispose d'une liste de mots. Ces mots ont une taille variable.

"MUSER", "MÛRES", "SUPER", "PEURS", "ECARTS", "CARTES", "ESPAR", "REPAS", "AMUSER", "MAURES", "PATERES", "EPATER"

On souhaite inverser l'ordre des lettres dans chacun de ces mots et obtenir une nouvelle liste:

"RESUM", "SERUM", "REPUS", ...

*Aide: On peut utiliser une liste pour chacun des mots: La liste $mot1 = "MUSER"$ contient 5 caractères. Le premier caractère est $mot1[1]$ et contient "M", le deuxième est $mot1[2]$ et contient "U", etc...*

### Ex 5: L'énoncé du problème peut il être mis sous forme de langage mathématique?

On dispose d'une liste de mots.

"MUSER", "MÛRES", "SUPER", "PEURS", "ECARTS", "CARTES", "ESPAR", "REPAS", "AMUSER", "MAURES", "PATERES", "EPATER"

Est-ce que leur reflet a un sens?

# Liens
* Article [sur la construction des ensembles, site automaths](https://automathssite.wordpress.com/2017/08/18/savez-vous-compter-les-choux-a-la-mode-de-peano/)
* Cours math [UNICE](https://math.unice.fr/~frapetti/analyse/Logique.pdf)
* Raisonnement et logique propositionnelle [cours et article de Zanotti](http://zanotti.univ-tln.fr/MD/MD-Logique.html)