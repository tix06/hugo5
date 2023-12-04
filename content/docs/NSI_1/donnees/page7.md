---
Title: coder les caracteres et couleurs
---

# Codage des caractères
## Code ASCII
Un **texte** est une chaine de caractères et de symboles (dont l'espace, virgule...). La représentation du texte dans l'ordinateur suit ce même schéma : c'est le rangement à des emplacements consécutifs de la mémoire des représentations des caractères un à un.

Il existe plusieurs normes d'encodage des caractères. Une des première a été l'ASCII (American Standard Code for Information Interchange), qui est apparue aux états unis, à l'époque où les ordinateurs n'étaient pas connectés en reseau. Une autre norme, encore utilisée est l'**ASCII étendu**, dont les caractères sont encodés sur **8 bits**.

{{< img src="../images/ascii.png" caption="table ascii pour les nombres 0-127" >}}

{{< img src="../images/ascii_e.png" caption="table ascii pour les nombres 128-255" >}}

En ASCII étendu, on peut évaluer la taille d'un fichier: C'est le nombre N caractères, exprimé en octets.

{{< img src="../images/word.png" caption="informations sur un fichier textuel" >}}

Le problème de l'encodage ASCII est qu'il ne permet pas de représenter assez de caractères pour les besoins des différentes langues. Le e accent aigû **é** sera ainsi représenté par 16 chiffres binaires, et son affichage en format ASCII donnera **Ã©**. 

{{< img src="../images/martine.png" caption="ascii ou utf8" >}}

Dans un document HTML, on pourra tout de même afficher correctement ces caractères, mais il faudra utiliser une *entité* HTML, c'est à dire une combinaison de symboles connus par le navigateur comme par exemple: `&eacute;` pour la lettre `é`.

## Unicode
Le répertoire Unicode peut contenir plus d'un million de caractères. 
Le code UNICODE permet donc de représenter tous les caractères spécifiques aux différentes langues. Il s'agit d'un encodage avec une nombre fixe de chiffres binaires, comme ASCII, mais plus étendu. Il est d'ailleurs compatible avec les codes ASCII, les caractères latins étant représentés par les mêmes nombres. Mais avec plus de chiffres.

L'inconvenient de l'Unicode est qu'il va générer des fichiers de poids important (poids compté en kilo octets). Bien plus lourd que l'encodage ASCII. Alors que bien souvent, la plupart des caractères utilisés pour un document texte sont ceux de l'alphabet ASCII, avec quelques caractères spéciaux.

## Code utf-8
Cet encodage utilise l'ASCII, sauf pour les caractères spéciaux. La longueur du nombre binaire est alors variable. Un caractère peut nécessiter 8, 16 bits, ou plus. Une information dans le code numérique va préciser cette longueur (correspond à un caractère spécial comme le Ã). Cela va permettre d'afficher tous les caractères, comme pour l'Unicode, mais en plus, cela génère un fichier dont le poids sera inférieur.

Chaque caractère dont le point de code est supérieur à 127 (0x7F) (caractère non ASCII) se code sur 2 à 4 octets:

* Codage des caractères utf-8 sur un à plusieurs octets. 

{{< img src="../images/utf8.png" caption="image issue de wikipedia utf8" >}}

Lien [wikipedia](https://fr.wikipedia.org/wiki/UTF-8)

La séquence binaire contient alors un premier code qui indique la longueur de bits à venir. C'est comparable au système utilisé pour les *masques de sous-reseau*.

0bbbbbbb                                  1 octet codant 1 à 7 bits

110bbbbb 10bbbbbb                         2 octets codant 8 à 11 bits

Ainsi, le caractère **é** est représenté en utf-8 par la séquence binaire 110**00011** 10**101001**. Parmi les chiffres binaires, seuls ceux en gras sont codants pour la valeur numérique associée à ce caractère. Il s'agit donc de **000 1110 1001**. C'est la valeur **E9** en hexadécimal. (233 en décimal). 

Avec un encodage ASCII, le navigateur essaiera d'afficher 2 symboles. Celui de code binaire **1100 0011**, qui correspond au Ã, le A majuscule tilde. Et celui de code binaire **1010 1001** affichera le ©, symbole copyright.


# Codage des couleurs