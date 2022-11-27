---
Title : serveur Flask
---

# Flask
Flask est une *bibliothèque* python fournissant les outils pour faire fonctionner un serveur web.

{{< img src="../images/flask.png" caption="Fonctionnement de Flask" >}}
L’architecture Modèle-Vue-Contrôleur est composée de trois entités distinctes, chacune ayant son propre rôle:

* Le **contrôleur**: gère le fonctionnement du site Web. Le programme est écrit en python.
* Les **vues**: cette partie se concentre sur l'affichage, et a pour rôle d'assembler le code HTML issu du *template*. Dans une *vue*, on peut mettre en oeuvre des algorithmes écrits en python. La *vue* va partager des variables avec les *templates*.
* Les **templates**: c'est le modèle de la page HTML qui sera utilisée par la *vue* pour générer la page HTML envoyée au client. Cette page peut être personnalisée selon les variables partagées avec la vue. C'est grâce à certaines parties écrites en langage *JINJA2*, dans le corps du script du *template* que la substitution des éléments HTML sera réalisée. Un peu comme un *texte à trous*.

[lien vers explications](https://lesmathsduyeti.fr/fr/lycee/nsi-premiere/interactions-client-serveur-flask/)


# Structure du projet
TP inspiré de [https://qkzk.xyz/docs/nsi/cours_premiere/ihm_web/flask/](https://qkzk.xyz/docs/nsi/cours_premiere/ihm_web/flask/)

Créez dans vos *Documents* un dossier *serveur_form*.

Créez les sous-dossiers *templates, static, et images,* comme sur l'arborescence suivante:

```
Documents/serveur_form
/
|- main.py
|- templates/ 
    |- form.html
    |- result.html
|- static/
    |- style.css

```

# fichier serveur
* Ouvrir un editeur Python (Spyder par exemple)
* **créez un fichier Python “main.py”** (ce fichier devra être sauvegardé dans le répertoire “serveur_form” précédemment créé). 
Saisissez le code suivant dans le fichier “main.py”

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def form():
  return "<p>Tout fonctionne parfaitement</p>"

app.run(debug=True)
```

Ce fichier `main.py` contient les *vues*, et lance le *contrôleur* lorsqu'il est executé.

* **Executer le programme ci-dessus**
  
* **ouvrez votre navigateur web** et tapez dans la **barre d’adresse “localhost:5000”**

Vous devriez voir la phrase “Tout fonctionne parfaitement” s’afficher dans votre navigateur.

notre serveur et notre client se trouvent sur la même machine, avec le “localhost”, on indique au navigateur que le serveur web se trouve sur le même ordinateur que lui (on parle de machine locale). 
La barre d’adresse doit être renseignée avec l’adresse du serveur web: `http://127.0.0.1:5000` ou bien `http://localhost:5000`

En exécutant le programme Python ci-dessus, le framework Flask a lancé un serveur web. Ce serveur web attend des requêtes HTTP sur le port 5000. En ouvrant un navigateur web et en tapant “localhost:5000”, nous faisons une requête HTTP.

Cette requête demande au serveur de lui retourner la ressource située à la racine du site Web.
Le serveur web fourni avec Flask répond à cette requête HTTP en envoyant une page web contenant uniquement `<p>Tout fonctionne parfaitement</p>`. C'est ce qui est retourné par la fonction `index` et le groupe de lignes:

```python
@app.route('/')
def form():
  return "<p>Tout fonctionne parfaitement</p>"
```

# La page du formulaire
Dans le dossier *templates*, vous allez créer la page de formulaire *form.html*

```html
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Le formulaire</title>
    </head>
    <body>
        <form action="http://localhost:5000/result" method="post">
                <label>Nom</label> : <input type="text" name="nom" />
                <label>Prénom</label> : <input type="text" name="prenom" />
                <input type="submit" value="Envoyer" />
        </form>
    </body>
</html>
```

Celui-ci contiendra les éléments *input* de type *text* et nommés *nom* et *prenom*, ainsi qu'un bouton pour envoyer les données du formulaire.

Le formulaire utilisera la méthode *POST* pour envoyer les données. Celles-ci vont parvenir à la page *resul*.

# La page result.html
Saisir le script HTML suivant dans le fichier `result.html` du dossier *templates*:

```html
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Résultat</title>
    </head>
    <body>
        <p>Bonjour {{prenom}} {{nom}}, j'espère que vous allez bien.</p>
    </body>
</html>
```

Cette requête POST sera envoyée à l’URL “http://localhost:5000/result” (voir l’attribut “action”). Les données saisies dans le formulaire seront envoyées au serveur par l’intermédiaire de cette requête.

En réponse à la requête POST, le serveur renvoie une page HTML créée à partir du template resultat.html et des paramètres nom et prenom.

Vous remarquerez que cette page contient des éléments d'un autre langage: `{{prenom}} {{nom}}`. Il s'agit d'instructions en Jinja2, un langage serveur comme PHP.
Ce langage est executé côté serveur et il génère des bouts de script HTML AVANT que la page ne soit retournée au client.

Ici, ce seront les contenus de variables qui remplacent `{{prenom}} {{nom}}` dans le script HTML.

# Fichier main.py
Modifiez le fichier main.py comme suit :

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def form():
  return render_template('form.html')

@app.route('/result',methods = ['POST'])
def result():
  result = request.form
  n = result['nom']
  p = result['prenom']
  return render_template("result.html", nom=n, prenom=p)

app.run(debug=True)
```

Observez comment la fonction result va ouvrir la page *result.html* tout en passant les variables *nom* et *prenom*, par la méthode **POST**.

Observez également la ligne précédent la definition de la fonction `result`: 
celle-ci contient un *décorateur* sur l'objet `app` de la librairie `flask` qui précise le chemin vers le fichier à ouvrir: *`/result.html`* 

# moniteur reseau
## méthode POST
Ouvrir le moniteur reseau. Utiliser la page de formulaire, envoyer les donées. Dans le moniteur, cliquer sur l'onglet *header*.

* Observer l'URL de la requête client. Celle-ci comporte-t-elle des paramètres query?
* Observer le champ formulaire: contient-il l'information des données transmises?



{{< img src="../images/moniteur.png" alt="moniteur reseau (Chrome)" caption="Exemple de moniteur reseau (Chrome)" >}}
## méthode GET
modifier ensuite le projet de la manière suivante:

* Dans “form.html”, la méthode POST sera remplacée par la méthode GET. 
* Dans le fichier “main.py” remplacer POST par GET, et utiliser `request.args` à la place de `request.form`.

Ouvrir le moniteur reseau et recommencer l'opération (transmettre les données par le formulaire):

* Observer l'URL de la requête client. Celle-ci comporte-t-elle des paramètres query?
* Observer le champ *Query String parameters*: contient-il l'information des données transmises?

# Ajouter une feuille de style
* Dans le dossier *static* à la racine du projet: ajouter votre feuille de style avec le nom *style.css*.
* Dans le debut du fichier *main.py*, ajouter l'import de `url_for` avec:

```python
from flask import url_for
```

* Dans le fichier *form.html*, entre les balises `<head> et </head>`, ajouter: 

```html
<link rel="stylesheet" type="text/css" href="{{url_for('static', filename='style.css')}}">
```

# Prolongement
Publiez votre projet en ligne, sur Pythonanywhere.com

* modifier la dernière ligne, `app.run(debug=True)` du fichier *main.py* par:

```python
if __name__ == '__main__':
    app.run()
```

* Aidez vous de la page [suivante (arduino103.blogspot)](https://arduino103.blogspot.com/2015/06/python-flask-pythonanywhere-partie-6.html): adaptez le tuto pour concevoir votre site en ligne, pour l'instant sans base de données.

{{< img src="../images/congratulation.png" >}}

# Liens
* TP inspiré de: [https://qkzk.xyz/docs/nsi/cours_premiere/ihm_web/flask/](https://qkzk.xyz/docs/nsi/cours_premiere/ihm_web/flask/)
* Autre TP de NSI utilisant Flask, avec explications sur le modèle MVC: [site du Yeti](https://lesmathsduyeti.fr/fr/lycee/nsi-premiere/interactions-client-serveur-flask/)
* Flask pas à pas: [liris.cnrs dpt bio informatique](https://perso.liris.cnrs.fr/pierre-antoine.champin/2017/progweb-python/cours/cm2.html)
