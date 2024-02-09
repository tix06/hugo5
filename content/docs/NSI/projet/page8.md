---
Title: Reseau de cartes MB
---

# Reseau social
## Explorer le sujet
Le TP sur la [communication entre cartes microbit](/docs/techno/pages/MB_radio3/) permet de construire un réseau de cartes. Les règles d'echanges entre cartes sont inspirées du modèle TCP/IP ou UDP vu en classe de 1ere: 

* L'emetteur d'un message utilise un en-tête pour s'identifier sur le reseau.
* Si le message reçu ne nous intéresse pas (s'il n'est pas issu d'un compte suivi), on l'ignore.

{{< img src="../images/social.png" caption="compteur automatique de LIKES" >}}

L'implementation du reseau social peut se faire avec une structure de données de type *dictionnaire*, avec:

* pour clé: un sommet du graphe, un compte du reseau social
* pour valeur: une liste des comptes suivis

Le message envoyé lors d'une publication pourrait être un simple message constitué du no d'identification du compte, suivi d'un bref texte, comme *HELLO*. En retour, les comptes abonnés retourneront le même numero suivi de *LIKE*. C'est à ce moment que le compte emetteur incrémente son compteur.

## Suggestions de projets
### Compteur de likes
Se rendre à la page du [TP de term NSI](/docs/techno/pages/MB_radio3/) et approfondir la partie *Compteur de Likes*.

On peut envisager de complexifier le scenario:

* avec un reseau plus vaste
* decider d'une modification du reseau au cours de l'experience, induite par le taux de publication ou par la noriété de certains comptes
* ...

### Expérience de Milgram
Selon la complexité du reseau et des mesures envisagées, on pourra remplacer le reseau de cartes microbits par un reseau simulé entièrement par un programme en python. Une représentation graphique du reseau peut être réalisée avec la librairie Networkx: voir [séance de TP de term](/docs/NSI/structure/page6/).

L'[expérience de Milgram](https://fr.wikipedia.org/wiki/Exp%C3%A9rience_de_Milgram) est un exemple qui peut être mis en oeuvre avec un traitement sur un **graphe**. Il s'agit d'un exemple de *sociologie structurale*.

# Liens
* La sociologie structurale, appelée maintenant analyse de réseaux a développé une grande panoplie de métriques pour caractériser les réseaux sociaux... [Mémoire de maitrise par FRANCK GOUDJO](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZoKiDmZyEAxUfQ6QEHZ5kBawQFnoECBcQAQ&url=https%3A%2F%2Farchipel.uqam.ca%2F3672%2F1%2FM11510.pdf&usg=AOvVaw0GqGUBx-QWUzPAEfpdhgfv&opi=89978449) sur la Réalisation d'un outil de simulation de réseaux sociaux 