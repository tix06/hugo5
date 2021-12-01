---
Title: Projet
BookShowToc: False
---

Les projets suivants utilisent le module Flask.
Vous travaillerez en groupe de 2, ou de 3 élèves. Vous choisirez l'un de ces 3 projets.

Pour **rendre votre projet**, vous pourrez, au choix:

* créer un **fichier** *zip* avec tous les dossiers et fichiers du projet et le mettre dans les *Documents* de votre session.
* le **publier** en ligne (Pythonanywhere.com)

Vous rendrez également un **fichier readme.txt** qui servira de compte-rendu de projet. Vous y préciserez les étapes de votre projet, ainsi que le rôle pour chacun des participants. Vous pourrez eventuellement utiliser la syntaxe markdown pour mettre le texte en forme.


# Projet 1: Boîte à secret
On veut créer une application web qui permette d'enregistrer des secrets protégés par des mots de passe.

Utilisez le script suivant pour le fichier *main.py*:

```python
from flask import Flask, render_template, request, url_for

app = Flask(__name__)

class Boite:
    def __init__(self):
        self.nom = "admin"
        self.mdp = "1234"
        self.msg = "premier message"

@app.route('/')
def secret():
    return render_template('secret.html')

if __name__ == '__main__':

    a = Boite()
    app.run(debug=True)
```


1. Créer un *template* (un patron) appelé *secret.html* contenant un formulaire permettant de spécifier un mot de passe et un message secret à enregistrer.
2. Créer un *template* *succes.html* qui affiche un message de reussite (voir plus loin), ainsi que la contenu d'une variable *message*.
2. Créer une *vue* dans le fichier *main.py* qui servira cette page *succes.html* lorsqu'on la demande. (route '/succes.html').
  * Cette vue servira la page *succes.html* qui affichera un message de succès, ainsi que le *message* si le mot de passe est correct. 
  * Sinon, la *vue* servira la page *echec.html*, qui affichera un message d'echec, ainsi qu'un bouton pour recommencer. 
  * Si le message est laissé vide par l'utilisateur, mais que le mot de passe est correct, la page *succes.html* affichera l'ancien message secret, qui est alors resté stocké dans *a.msg*.

*Aide:*
Le programme utilise 2 variables globales. Ces variables utilisent une notation pointée:

* **a.mdp** qui contient le mot de passe (celui-ci est 1234)
* **a.msg** qui contient le message dans la boite à secrets.

Pour comparer le mot de passe (dans la variable *motdepasse*) saisi par l'utilisateur avec celui de la boite à secret, on fait:

```python
if motdepasse == a.mdp:
  # instructions
```

Pour modifier le message *a.msg* de la boite à secret par un nouveau message (de la variable *message*), on fait:

```python
a.msg = message
```

<!--
4. *Pour aller plus loin (difficile):* on peut ajouter un nom de *login* en plus du mot de passe. Le serveur devra alors répondre:

  * **enregister le nom** si le nom n'existe pas, le mot de passe et le secret, et retourner la page *succes.py*
  * **message d'erreur** si le nom existe et que le mot de passe est incorrect.
  * **afficher le message** dans les autres cas.
-->

# Projet 2: Interroge un dictionnaire

# Projet 3: Panier d'achat sans session