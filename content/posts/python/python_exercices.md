---
author: "Eric Tixidor"
date: 10-10-2020
linktitle: fiche exercices python
menu:
  main:
    parent: 
next: donnees_analyse
prev: pandas.md
title: fiche exercices python
weight: 15
---

## Definition
Nombre premier: un nombre premier est un nombre qui accepte DEUX diviseurs : uniquement lui-même et 1.

## Algorithme naïf
Un test de primalité est un algorithme permettant de savoir si un nombre entier est premier.

Le test le plus simple est le suivant : pour tester N , on vérifie s’il est divisible par l’un des entiers compris au sens large entre 2 et N − 1. Si la réponse est **positive (True)**, alors **N est premier**, sinon il est composé (multiple).

Les nombres 0 et 1 ne sont **pas** considérés comme premiers.

<iframe width='100%' height='500' allowfullscreen frameborder='0' style='border:1px #d6d6d6 solid;' src="https://fr.vittascience.com/python/?link=5f7c9bd8b1028&mode=code"></iframe>

> Travail

1. Ecrire un script qui utilise la fonction `prem1` pour afficher les entiers premiers compris entre 0 et 100.
2. Modifier la fonction (que vous renommerez `prem2`) pour que celle-ci execute le moins d'opérations possibles. (soit le plus efficace). Une idée peut être par exemple de diminuer l'étendue du variant de boucle.

