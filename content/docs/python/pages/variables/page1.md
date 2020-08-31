---
Title : variables
---

# Variables et valeurs
## Valeur et référence
Pour pouvoir accéder aux données, le programme d’ordinateur (quel que soit le langage dans lequel il est écrit) fait abondamment usage d’un grand nombre de variables de différents types.
Une variable est un nom associé à une donnée. Ce nom est à peu près quelconque (voir ci-après), mais pour l’ordinateur il s’agit d’une **référence** désignant une **adresse mémoire**, c’est-à-dire un emplacement précis dans la mémoire vive.
À cet emplacement est stockée une **valeur** bien déterminée. 

Cela peut être en fait à peu près n’importe quel « objet » susceptible d’être placé dans la mémoire d’un ordinateur, par exemple : un nombre entier, un nombre réel, un nombre complexe, un vecteur, une chaîne de caractères, un tableau, une fonction, etc.

## Les types élementaires 
Les types élementaires que peuvent prendre les variables et expressions sont : 

* LES ENTIERS (int)
valeurs possibles: 1, 2492042932330932, -23, etc expressions possibles : 13 + 3928, 34 * 2 + 10 // 3 % 5, etc
* LES REELS (float)
4.3
La virgule se représente par un point. Les float en Python ont une précision limité. Ils sont généralement codés sur 15 chiffres significatifs et encodés sur 53 bits.
* LES BOOLÉENS (bolean)
valeurs possibles : True et False
expressions possibles : 0 == 0, 8+1 == 2 * 3, 13 >= a, etc.
* LES CHAINES DE CARACTÈRES (str)
valeurs possibles : ‘Hello, world’, ‘la valeur de a est’, ‘234’ , etc.
* LE TYPE DES INSTRUCTIONS (= LE TYPE DE « RIEN »)
valeurs possibles : None
expressions possibles : print(‘hello’), x = a + b, etc 11

## Typage dynamique 
(à compléter)

## nommer une variable
Un nom de variable est une séquence de lettres (a→z,A→Z) et de chiffres (0→9), qui doit toujours commencer par une lettre.

## Affectation simple et multiple
Les termes « affecter une valeur » ou « assigner une valeur » à une variable sont équivalents. Ils désignent l’opération par laquelle on établit un lien entre le nom de la variable et sa valeur (son contenu).

*Exemple :* `a = 2` 

Lorsque l'ordinateur execute cette instruction, il va : 

• créer et mémoriser un nom de variable ;
• lui attribuer un type bien déterminé (ce point sera explicité à la page suivante);
• créer et mémoriser une valeur particulière;
• établir un lien (par un système interne de pointeurs) entre le nom de la variable et l’emplacement mémoire de la valeur correspondante.

Les trois noms de variables sont des références, mémorisées dans une zone particulière de la mémoire que l’on appelle espace de noms, alors que les valeurs correspondantes sont situées ailleurs.

## Opérations arithmétiques et priorité
avec les nombres



