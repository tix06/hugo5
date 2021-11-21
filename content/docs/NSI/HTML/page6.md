---
Title : serveur Flask
---


# Structure du projet
TP inspiré de [https://qkzk.xyz/docs/nsi/cours_premiere/ihm_web/flask/](https://qkzk.xyz/docs/nsi/cours_premiere/ihm_web/flask/)

Créez dans vos *Documents* un dossier *serveur_form*.

```
Documents/serveur_form
/
|- main.py
|- templates 
    |- form.html
    |- result.html
    |- images

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

* **Executer le programme ci-dessus**
  
* **ouvrez votre navigateur web** et tapez dans la **barre d’adresse “localhost:5000”**

Vous devriez voir la phrase “Tout fonctionne parfaitement” s’afficher dans votre navigateur.

notre serveur et notre client se trouvent sur la même machine, avec le “localhost”, on indique au navigateur que le serveur web se trouve sur le même ordinateur que lui (on parle de machine locale). 
La barre d’adresse doit être renseignée avec l’adresse du serveur web: `http://127.0.0.1:5000` ou bien `http://localhost:5000`

En exécutant le programme Python ci-dessus, le framework Flask a lancé un serveur web. Ce serveur web attend des requêtes HTTP sur le port 5000. En ouvrant un navigateur web et en tapant “localhost:5000”, nous faisons une requête HTTP.

Cette requête demande au serveur de lui retourner la ressource située à la racine du site Web.
Le serveur web fourni avec Flask répond à cette requête HTTP en envoyant une page web contenant uniquement `<p>Tout fonctionne parfaitement</p>`. C'est ce qui est retourné par la fonction `index` et la groupe de lignes:

```python
@app.route('/')
def form():
  return "<p>Tout fonctionne parfaitement</p>"
```

# La page du formulaire
Dans le dossier *templates*, vous allez créer la page de formulaire:

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
  return render_template('index.html')

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
celle-ci contient un *décorateur* sur l'objet `app` de la librairie `flask` qui précise le chemin vers le fichier à ouvrir: *`/result.html*`

# moniteur reseau
## méthode POST
Ouvrir le moniteur reseau. Utiliser la page de formulaire, envoyer les donées. Dans le moniteur, cliquer sur l'onglet *header*.

* Observer l'URL de la requête client. Celle-ci comporte-t-elle des paramètres query?
* Observer le champ formulaire: contient-il l'information des données transmises?



<figure>
  <img src="../images/moniteur.png" alt="moniteur reseau (Chrome)">
  <figcaption>Exemple de moniteur reseau (Chrome)</figcaption>
</figure>

## méthode GET
modifier ensuite le projet de la manière suivante:

Dans “form.html”, la méthode POST sera remplacée par la méthode GET. Dans le fichier “main.py” remplacer POST par GET, et utiliser request.args à la place de request.form.

Ouvrir le moniteur reseau et recommencer l'opération (transmettre les données par le formulaire):

* Observer l'URL de la requête client. Celle-ci comporte-t-elle des paramètres query?
* Observer le champ *Query String parameters*: contient-il l'information des données transmises?

# Ajouter une feuille de style
* Dans le dossier *static* à la racine du projet: ajouter votre feuille de style avec le nom *style.css*.
* Dans le debut du fichier *main.py*, ajouter l'import de `url_for` avec: `from flask import url_for`
* Dans le fichier *form.html*, entre les balises `<head> et </head>`, ajouter: 

```html
<link rel="stylesheet" type="text/css" href="{{url_for('static', filename='style.css')}}">
```

