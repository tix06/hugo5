---
Title : informatique des objets
---

# informatique des objets

# TP : La carte micro:bit
## présentation


## Utiliser l'editeur en ligne python.microbit.org
Aller sur l'editeur à l'adresse suivante : [https://python.microbit.org/v/2.0](https://python.microbit.org/v/2.0)

<figure>
  <img src="../images/editoronline.png">
</figure>

1. Saisir le script dans la fenêtre d'edition.
2. Lui donner un nom (champ en haut à droite : *script name*).
3. Charger le programme sur le disque dur de l'ordinateur : *Download* (l'extension est .hex)
4. Deplacer le programme sur la carte microbit à l'aide de l'explorateur de fichiers.

## Utiliser l'editeur Mu
<figure>
  <img src="../images/helloworld.png">
</figure>

* Bouton **Mode** : choisir l'editeur BBC microbit
* Saisir le script dans la fenêtre de script.
* Une fois le microcontrôleur relié à l'ordinateur par le cable USB : bouton **Flasher** pour transferer le script.

L'editeur aide à la saisie grâce à l'autocompletion. Selectionner le mot en python et valider avec la touche *Enter* du clavier.

<figure>
  <img src="../images/autocompletion1.png">
</figure>

<figure>
  <img src="../images/autocompletion2.png">
</figure>

Lorsque l'on tape le nom d'une fonction qui est documentée, l'aide apparait à l'écran. C'est très utile pour savoir si la fonction prend des paramètres : 

<figure>
  <img src="../images/documentation.png">
</figure>

## gestion des erreurs de syntaxe
Une fois le programme chargé, il peut y avoir une erreur de syntaxe qui empêche son fonctionnement. Le message s'affiche sur l'écran de la carte microbit. Mais il peut être plus facile de lire ce message sur l'écran de l'ordinateur. Le bouton **REPL** fournit une console python avec affichage des messages à l'execution.

<figure>
  <img src="../images/repl.png">
</figure>

# Liens
* Documentation micro:bit [microbit-micropython.readthedocs](https://microbit-micropython.readthedocs.io/en/v1.0.1/)
* Une premiere approche de la communication entre microbits : [l'exemple de la luciole](https://microbit-micropython.readthedocs.io/en/v1.0.1/tutorials/radio.html)
* TP Reseaux : comment faire communiquer [deux cartes microbit par ondes radio](https://www.lossendiere.com/2017/12/10/faire-communiquer-2-microbit-par-onde-radio/)