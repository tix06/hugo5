---
Title : calculer sur un algorithme
---

# Calculabilité
Dans le chapitre précédent, sur la complexité, l’objet d’étude principal etait l’algorithme. On en a fait une mesure de son efficacité: un algorithme est plus efficace s'il est plus rapide (donc de classe de complexité plus faible).

En calculabilité, le problème devient l’objet central.

On a souvent l'impression que pour chaque problème on peut trouver un algorithme de solution. Ce n'est pas le cas : pour des nombreux probèmes naturels et intéressants il n’existe pas d’algorithme. Ces problèmes sont non calculables. Cette notion a évolué dans l'histoire de l'informatique au cours des étapes suivantes:

**Charles Babbage** (1791 – 1871), professeur à Cambridge, construit la machine différentielle et la machine analytique. La dernière peut être considérée comme précurseur des ordinateurs modernes, consistant d’une unité de contrôle, une unité de calcul, une mémoire, ainsi que l’entrée-sortie.

<figure>
    <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/440px-Charles_Babbage_-_1860.jpg">
    </div>
    <figcaption>Charles Babbage (1791 – 1871)</figcaption>
</figure>

**Ada Lovelace** (1815 – 1852) travaille avec Babbage et préconise l’utilisation de la machine analytique pour la résolution de problèmes mathématiques. Elle est considérée comme premier programmeur du monde.

**David Hilbert** (1862 – 1943), professeur à Göttingen, présente en 1920 un programme de recherche visant à clarifier les fondaments des mathématiques : “tout enoncé mathématique peut être soit prouvé ou refuté”. Plus tard il enonce le “Entscheidungsproblem” : montrer de façon “mécanique” si un enoncé mathématique est vrai ou faux.

**Kurt Gödel** (1906 – 1978), un des logiciens les plus fameux de l’histoire, répond en 1931 négativement quand au programme proposé par Hilbert, en montrant que tout système formel suffisamment puissant est soit incomplet ou incohérent. Il montre ceci en construisant une formule qui exprime le fait qu’elle n’est pas démontrable ("codage de Gödel”, “diagonalisation”).

**Alan Turing** (1912 – 1954) et **Alonzo Church** (1903 – 1995) montrent indépendamment, en 1936, l’indécidabilité de l’Entscheidungsproblem. Turing propose la machine de Turing comme modèle formel de calcul, et Church le lambda-calcul. Ils enoncent le principe selon lequel tout ce qui est calculable peut être calculé sur un de ces deux modèles (“thèse de Church-Turing”).


# Définitions
## Qu'est ce qu'un problème?
Informatiquement, l’appellation problème sera synonyme de fonction. Un problème est caractérisé par:

* Le nom du problème
* des données d'entrée, que l'on appelle instance du problème.
* une question mathématique posée sur ces données d'entrée.

Rq : Ne pas confondre problème et algorithme le résolvant. Il peut y avoir plusieurs algorithmes qui resolvent le même problème (calculent la même fonction).

Problème 1 <br> 
Donnée : Un ensemble d'entiers naturels<br> 
Question : Déterminer les nombres pairs de cet ensemble.

Problème 2  <br> 
Donnée : Un ensemble d'entiers naturels<br> 
Question : Déterminer les nombres premiers de cet ensemble.

Problème 3 <br> 
Donnée : Un programme C.<br> 
Question : Le programme est-il syntaxiquement correct ?

Ce dernier exemple de problème suggère qu'un **algorithme** est une
**donnée** comme une autre. En effet, le **script** qui traduit l'algorithme est écrit dans un **langage**. Et la machine va le lire et l'interpréter à l'aide d'un autre programme. Pour ce programme, le script est une donnée (**interpréteurs, compilateurs**). 

## Calculabilité 
> Qu’est-ce que c’est “calculable”? 


> * En mathématique : Une fonction f : &#8469;
 → &#8469; est calculable s’il existe un programme/algorithme qui calcule f: si la fonction f est définie sur une entrée x, alors l’algorithme doit renvoyer la valeur f(x), et si f n’est pas définie, l’algorithme doit boucler sur l’entrée x.

 > * En algorithmique: on dira qu’une fonction est calculable si elle peut être programmée dans l’un ou l’autre des langages de programmation usuels.

La première fonction explicite non calculable a été décrite par Turing en 1936. Il s’agit du problème de l’arrêt : étant donné un algorithme A et une entrée x, il s’agit de déterminer si A s’arrête ou non sur l’entrée x (i.e A ne boucle pas sur l’entrée x).

**Théorème :** Le problème de l’arrêt est incalculable.

> Qu'est ce que la "terminaison"? On dit qu’un programme termine s’il ne boucle pas, c’est-à-dire qu’il renvoie bien un résultat.

## Problèmes de décision décidables
### Problèmes de décision
Il existe une catégorie de problèmes que l'on appelle : *problèmes de décision*. Dire que le problème est **décidable**, c’est simplement dire qu’il existe un programme Python permettant de calculer f(n) pour tout entier n, en un temps fini. 

Tous les problèmes mathématiques (voir plus haut) peuvent être énoncés comme des problèmes de décision: Pour les problèmes 1 et 2 vus auparavent, on peut les énoncer sous la forme:

Problème 1 <br> 
Donnée : Un nombre entier positif n en base 2. <br> 
Question : n est-il pair?

Problème 2  <br> 
Donnée : Un nombre entier positif n en base 10. <br> 
Question : n est-il premier?

Le problème 3 est déjà énoncé comme un problème de décision.

En conséquence, le problème de la décision, c’est-à-dire la recherche d’une procédure qui indique dans chaque contexte, et au bout d’un temps fini, si une propriété est vraie ou fausse, est équivalent à la construction d’un algorithme qui calcule pour chaque fonction f et pour chaque argument x de f, la valeur y telle que y = f(x). Autrement dit, le problème de la décision est équivalent au problème du calcul.

### décidables ou indécidables?
Les fonctions, ou propriétés bien énoncées en langages mathématique sont-elles toutes décidables? La reponse est : Non, il n'existe pas de telle méthode, comme cela a été démontré en 1931 par **Kurt Gödel** (voir plus haut).

**L'indécidabilité** c'est l'impossibilité absolue et définitivement démontrée de résoudre par un procédé général de calcul un problème donné.

Il existe des programmes qui prennent une fonction A comme paramètre, et une donnée x d'entrée de cette fonction. 

Si A s’arrête sur l’entrée x, le programme peut renvoyer `True`. Mais si ce n’est pas le cas, le programme ne répondra jamais. À quel moment décide-t-on qu'il n’a pas encore répondu, c’est qu’il ne répondra jamais ? On n’a aucun moyen de le faire, et c’est ce que prouve le théorème de Turing.

<figure>
<a href="https://www.youtube.com/watch?v=PsTcL7KlGBg" target="blank">
<img src="../images/video_decidable.png" alt="decidabilité youtube">
<figcaption>Décidabilité et indécidabilité : Problème de l'arrêt | Rachid Guerraoui</figcaption>
</a>
</figure>



> Exemples de problèmes non décidables : 

Problème<br> 
Donnée : Un programme C.<br> 
Question : Le programme s’arrête-t-il toujours ?

# Preuve d'un algorithme
## terminaison et correction
Prouver le bon fonctionnement d'un algorithme nécessite de vérifier deux propriétés : 

1. premièrement : la **terminaison** : prouver que l'algorithme se termine.
2. deuxièmement : la **correction** : si l'algorithme se termine, il fait bien ce qu'on attend de lui (correction partielle). 

D'après ce qui a été vu auparavent, il n'EXISTE PAS d'algorithme capable de calculer la terminaison ou la correction d'un programme. Ce sera à vous de PROUVER un algorithme, à partir de méthodes exposées ici.


## méthodes pour les algorithmes itératifs
> Pour la terminaison : étude du VARIANT de boucle


> Pour la correction : INVARIANT de boucle
**Invariant de boucle :**
on appelle *invariant* d'une itération toute propriété, vraie à l'initialisation, et qui demeure conservée quand on passe d'un état quelconque à son successeur.

## Exemple : recherche linéaire
### Script
La fonction suivante réalise une *recherche linéaire* de la valeur X sur une liste L de valeurs numériques. 

```python
def recherche(X,L):
    """
    recherche une valeur dans une liste et renvoie l'indice si la valeur est trouvée, -1 sinon
    Params :
    -------------------
    X : int, valeur à trouver
    L : list, une liste de valeurs entieres, dans un ordre quelconque.
    Sortie : 
    ------
    j : int, indice de la position de la valeur dans la liste
    Principe :
    --------
    on parcourt la liste avec une boucle non bornée, tant que X n'est pas trouvé dans la liste
    on augmente la valeur de j à chaque nouvelle itération
    """
    j = 0
    n = len(L)
    while j<n and X!=L[j]:
        j += 1
    if j==n : return -1
    return j
```

### Invariant de boucle et condition d'arrêt

L'analyse se fait en établissant des **invariants de boucle**, c'est à dire des propositions qui sont vraies à chaque itération, et des **conditions d'arrêt**.

* invariant de boucle : au debut de la première itération, j=0. Et au début de la kieme itération, j=k et L[i]≠X

* condition d'arrêt : si au debut de la kieme itération de la boucle on a : k< n et L[k]=X, alors on s'arrête avec j=k; si on a k=n, alors on va s'arrêter et on affecte j=-1.

## Preuve d'un algorithme recursif
Dans le cas des algorithmes récursifs, ces méthodes sont spécifiques.
### terminaison
Le (ou l'un des) paramètre(s) appelé(s) par la fonction recursive doit avoir une relation d'ordre descendante. C'est à dire que ce paramètre doit être de plus en plus petit à chaque appel de la fonction dans le corps de la fonction récurente.

### correction partielle
Il faut montrer que si les appels internes à l'algorithme font ce qu'on attend d'eux, alors l'algorithme entier fait ce qu'on attend de lui. La preuve de correction se fait à partir d'une demonstration par recurrence : 

* On commence à établir la preuve pour le rang n = 0, puis n = 1.
* il faut montrer que si on peut prouver la correction pour une suite de rang n-1, on aboutira à la preuve de correction pour une suite de rang n.

# Résumé
— L’ensemble des algorithmes, donc des fonctions calculables, est dénombrable.
— L’ensemble des fonctions est indénombrable, donc il existe des fonctions incalculables.
— Le problème de l’arrêt est un exemple de fonction incalculable.

# Liens : généralités
* Interstice : [décidabilité calculabilité](https://interstices.info/alan-turing-du-calculable-a-lindecidable/)

# Liens pour approfondir
* cours en pdf université de Grenoble : [calculabilité](https://www.irif.fr/~asarin//calc2k3/calcul_cours.pdf)
* [cours sur l'algorithmique Bruno Grenet](http://www.lirmm.fr/%7Egrenet/DIUBloc5/AlgoAvancee.pdf)
* cas des algorithmes recursifs : [https://fr.wikipedia.org/wiki/Algorithme_récursif](https://fr.wikipedia.org/wiki/Algorithme_récursif)