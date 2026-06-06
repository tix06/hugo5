---
Title: tuto requests
---

# Module request et site météo
Le module `requests` de python permet de recuperer les données d'une requete HTTP dans un format exploitable (dict,list).

La communication avec le serveur demande d'utiliser une clé, que vous devrez générer en [créant un compte](https://home.openweathermap.org/users/sign_up). (API key). 

L'exemple suivant traite de l'exploitation d'une requete sur le site [OpenWeatherMap](https://home.openweathermap.org/users/sign_up). Le compte gratuit permet de realiser quelques requetes, en nombre raisonnable, et sera suffisant pour developper un petit projet NSI. 

*Voici le script minimal*

```python
import requests,json,sys

APPID ='-- a remplacer par votre cle API et placer entre les guillemets--'
#location = 'London,GB'
location = 'Nice,FR'

#Download the JSON data from OpenWeatherMap.org's API.

url = f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={APPID}'
response = requests.get(url)
response.raise_for_status()

#Uncomment to see the raw JSON text:
#print(response.text)

#Load JSON data into a Python variable.
weatherData = json.loads(response.text)

#Print weather descriptions

w = weatherData
print(f'Current weather in {location}')
print(w['weather'][0]['main'],'-',w['weather'][0]['description'])
print()
```

Un exemple de clé, que vous pouvez utiliser *provisoirement*, avant de créer la votre: `02cbe3cb547ddf63a866b3b9679daffe`

*Prolongement:* Pour obtenir les prévisions sur plusieurs jours, utiliser la requete:

```python
url=f'https://api.openweathermap.org/data/2.5/forecast?q={location}&cnt=3&appid={APPID}'
```

Le traitement va alors différer, car la météo des différents jours sera placée dans la clé `list` du dictionnaire `weatherData`.

