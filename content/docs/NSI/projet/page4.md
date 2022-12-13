---
Title: projet Dominos
bookShowToc: false
---

# Jeu de Dominos avec interface graphique
*Vous allez réaliser un jeu de Dominos avec l'interface Tkinter. A partir d'un fichier existant, vous allez ajouter des fonctionnalités utiles. Vous devrez collaborer efficacement et vous partager le travail équitablement.*

{{< img src="../images/dominos.png" caption="exemple de jeu" >}}

### [telecharger le fichier dominos_projet.py](/scripts/Tkinter/dominos_projet.py)


## Consignes
Il est demandé:

* de rendre un programme fonctionnel, sur la base de celui fourni au départ. Le code du programme peut être divisé en 2 fichiers, si besoin.
* le code du programme devra être correctement commenté et lisible.
* Sur votre cahier de laboratoire: vous expliquerez quel a été votre rôle personnel dans la séance: Les choix que vous avez fait, les explications que vous voulez ajouter.

# Travail à réaliser
## Dans la classe `Partie`
### étape 1
```python 
class Partie:
	(...)

    def ajouter_fin(self,D):
        """
        ajoute l'objet domino D à la fin de la chaine:
        ajoute d'abord D à self.end.suiv
        puis D à self.end
        :param D: instance de Domino
        """

    def RAZ(self):
        """
        Détache le premier élement du reste de la chaine:
        met d'abord self.first.suiv à None
        puis self.end prend la valeur de self.first
        """

    def pose_correcte(self,val):
        """
        teste si le nouveau domino à poser est compatible avec le dernier de la chaine
        comparer alors val (équivaut à val1 0..6) du domino à poser avec val2 du dernier
        domino de la partie
        :param val: int
        :return: bool, True si les valeurs sont identiques
        """
        
``` 

Compléter les fonctions `ajouter_fin`, et `RAZ`à partir des informations contenues dans le script.

### étape 2
Ajouter une méthode de classe dans `Partie` que l'on appelera `pose_correcte`: celle-ci devra renvoyer True si le domino posé respecte la règle du jeu, à savoir que les nombres adjacents des 2 dominos sont identiques. Sinon, la fonction retourne False.

## Dans la classe `Game` 
### étape 1
* Comprendre comment on joue

```python
class Game(Tk):
	(...)

    def readtext(self):
        """
        fonction appelée lorsque l'on valide avec le bouton VALIDER
        - lecture du contenu de la textBox avec le format de données
        2,4,[E O S N]
        soit valeur1,valeur2,direction
        alors valeur1 -> self.val1 et valeur2 -> self.val2
        direction -> self.dir
        - ou bien
        2,4
        soit valeur1,valeur2
        alors seuls les attributs self.val1 et self.val2 sont modifés
        self.dir n'est pas modifiée (E au debut)
        exemples:
        ---------
        - la textBox est validée avec: 4,2,S
        alors s vaut [4,2,S\n] et on ajoute le domino 4,2 à la partie 
        dans la direction S (Sud)
		- la textBox est validée avec: 4,2
		alors s vaut [4,2] et on ajoute le domino 4,2 à la partie sans
		changer de direction
        """
        # lecture de la textBox
        result = self.textBox.get("1.0", "end")
        # decoupage de la chaine de caracteres selon les virgules
        s = str(result).split(',')

        # AJOUTER condition avec self.partie.pose_correcte(s[1])
        # tout le reste est declenché par condition == True
        # sinon: message d'erreur sur text_affichage qui demande de corriger
        self.text_affichage.set('DOMINO joué\n {},{}'.format(s[0],s[1]))

        
        self.partie.ajouter_fin(# a completer (1)

        print(self.partie)


        if len(s) > 2:
            self.dir = # à completer (2)
        
        self.dessine()
```


* Au repère à completer (1):
Completer la fonction `ajouter_fin` avec pour paramètre le nouveau Domino à poser.

Il faut créer un nouvelle instance de Domino avec pour attributs `int(s[0])` et `int(s[1])`. 


* Au repère à completer (2):
self.dir prend la valeur de `str(s[2][0]`, c'est à dire le premier caractère de `s[2]`.


### étape 2
Modifier la méthode de classe `readtext`de la classe `Game` pour tenir compte de la méthode `pose_correcte` de `Partie`: si la pose est correcte, et que la méthode `self.partie.pose_correcte()` retourne `True`, alors poser le domino sur la table de jeu. Sinon, demander de jouer un autre domino.

