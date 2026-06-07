---
Title: tuto requests
---

# Module request
Le module `requests` de python permet de recuperer les données d'une requete HTTP dans un format exploitable (dict,list).

La communication avec le serveur demande d'utiliser une clé, que vous devrez générer en [créant un compte](https://home.openweathermap.org/users/sign_up). (API key). 

## Données météo open source
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

## En-tête HTTP
La requete est envoyée par l'interpreteur python. L'en-tête HTTP va comporter une signature de la source.

On peut vouloir modifier l'en-tête HTTP pour imiter le comportement d'un navigateur. 

| Paramètre |	Valeur par défaut  (requests)| Valeur "Navigateur" (à imiter) |
|--- |--- |--- |
| User-Agent |	python-requests/x.x	| Mozilla/5.0 ... Chrome/... |
| Accept|	`*/*` 	|text/html, ... |
| Accept-Language	| (Absent)	| fr-FR, fr;q=0.9 |
| Signature TLS	| Bibliothèque Python |	Moteur Blink/WebKit (Chrome/Firefox) |


```python
import requests,json,sys

# 1. Définir les en-têtes pour imiter Chrome (Windows 10/11)
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
}

# 2. Ajouter les proxies si nécessaire (voir discussion précédente)
"""
proxies = {
    "http": "http://adresse_proxy:port",
    "https": "http://adresse_proxy:port",
}
"""

try:
    # 3. Envoyer la requête avec les en-têtes "masqués"
    #response = requests.get("https://httpbin.org/headers", headers=headers, proxies=proxies, timeout=10)
    
    # Pour vérifier ce que le serveur a reçu
    #print(response.json())
    APPID ='02cbe3cb547ddf63a866b3b9679daffe'
    #location = 'London,GB'
    location = 'Nice,FR'

    #Download the JSON data from OpenWeatherMap.org's API.

    url = f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={APPID}'
    response = requests.get(url,headers=headers,timeout=10)
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

        
except Exception as e:
    print(f"Erreur : {e}")

```

