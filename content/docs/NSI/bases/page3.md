---
Title : SGBD
---

# système de gestion de base de données relationnelles
## Introduction
Une base de donnée est necessaire pour stocker de manière permanente des données, mais aussi pour partager ces données.

Il faudra organiser ces données et utiliser un langage spécifique pour acceder à ces données.


Une base de données est constituée:

* de données
* d'un système de gestion de base de données: 

...et c'est bien plus qu'un simple tableur.

## Définitions
**Exemple:**

Voici plusieurs informations: *M Dupont, un policier, uniforme noir et chapeau rond, Tintin.*

<figure>
  <div>
  <img src="../images/dupont.png">
</div>
</figure>


Il peut exister une **relation** entre ces informations: Dupont a pour métier *policier* et c'est l'ami de *Tintin*.

Des relations de ce genre définissent des **structures**.

**Définition:** une base de données est un gros ensemble d’informations *structurées*, mémorisées sur un support permanent.

> **Question:** Mais alors, qu'est ce qui différencie la base de donnée d'un simple fichier stocké sur serveur?

> *Réponse:* l'utilisation d'un simple fichier (par exemple de type tableur) va entrainer une certaine lourdeur lors de l'accès aux données, un manque de sécurité, une absence de contrôle de concurence d'accès. Ces problèmes amènent à utiliser un SGBD...

**Définition:** Le **Système de Gestion de Bases de Données (SGBD)** est un logiciel qui a pour rôle de gérer les informations stockées dans une base de données. 



<figure>

<img src="../images/SGBD.jpg">
  <figcaption>rôle d'un SGBD</figcaption>
</figure>

Il existe des SGBD gratuites, et payantes. Ces logiciels ont pour rôle: 

* de gérer la lecture et l'ecriture ou les modifications des informations contenues dans la base de données.
* de gérer les autorisations d'accès à la base de données. (certains utilisateurs peuvent lire, d'autres peuvent lire/ecrire)
* d'assurer la maintenance des différentes copies des bases de données (par mesure de securité, la base de données est reproduite à plusieurs endroits)
* de gérer les accès concurents: plusieurs personnes peuvent avoir besoin d'accéder aux informations et modifier des informations en même temps.

L'utilisation de SGBD est généralisé dès qu'il faut pouvoir gérer des données de grande quantité, et permettre un accès plus simple et sûr à ces données.

## suite du cours
* [modèle relationnel](/docs/NSI/bases/page1/)
