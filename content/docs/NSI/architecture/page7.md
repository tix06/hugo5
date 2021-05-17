---
Title: chiffrement asymetrique
---

# Chiffrements asymétriques
Pour le chiffrement symétrique, le seul secret, c'est la clé de chiffrement. Cette clé doit avoir, pour des raisons pratiques, une longueur raisonnable (64, 128, 256 bits). Ce chiffrement permet de communiquer de manière *confidentielle*, ou de préserver la *confidentialité* de nos données sur un disque dur. Le problème avec le seul chiffrement symétrique, c'est qu'il ne permet pas de repondre aux besoins d'*authentification* (reconnaitre l'identité) et d'*authenticité* (le message n'a pas été modifié).

Pour comprendre ces termes, on utilise le scenario suivant. Alice et Bob sont 2 personnes qui veulent echanger des messages de manière sécurisée. Une 3e personne, appelée *Trudy* joue le rôle d'un attaquant.

<figure>
  <img src="../images/trudy.png">
<figcaption>Le trio Alice - Bob - Trudy</figcaption>
</figure>

Le chiffrement asymétrique utilise plusieurs clés, une pour le chiffrement, et une autre pour le dechiffrement. Il repose sur des propriétés mathématiques de l'arithmetique modulaire. (voir principe du chiffrement RSA)


## Principe du chiffrement RSA
### Confidentialité
Il doit y avoir 2 clés. L'une de ces clés doit rester secrête, et conservée par l'expediteur du message: c'est la clé **privée**. L'autre clé utile pour le chiffrement et le dechiffrement est partagée: elle est dite **publique**. On peut indifféremment chiffrer avec la clé publique et déchiffrer avec celle privée, ou l'inverse.

<a href="https://youtu.be/8BM9LPDjOw0?t=268">
<figure>
  <img src="../images/scienceetonnante.png">
<figcaption>VIDEO chiffrement asymetrique (demarrer à 4min28) - chaine ScienceEtonnante</figcaption>
</figure>
</a>

Ainsi, comme la clé de Bob est publique, Alice peut utiliser cette clé pour chiffrer le message qu'elle veut lui envoyer, un peu comme si elle mettait le message dans un coffre (*celui de Bob*). Et Bob, qui possède la clé privée correspondante (la clé de *son* coffre) peut alors déchiffrer le message d'Alice.

<figure>
  <img src="../images/asymetric.png">
<figcaption>Chiffrement asymetrique</figcaption>
</figure>

### Authentification
On peut utiliser cet algorithme pour authentifier l'auteur du message, et réaliser une **signature numérique**.

Imaginons que Bob utilise sa clé *privée* pour chiffrer un message M. Il l'envoie à Alice, qui, en utilisant la clé publique de Bob, pourra le déchiffrer. Elle pourra ainsi s'assurer que Bob en est bien à l'origine et que son contenu n'a pas été modifié.

En effet, comme il est le seul à posséder la clé *privée*, ce message M vient bien de Bob.

> Compléter la situation où Bob envoie un message de type Bonjour à Alice, en utilisant sa clé privée:

<figure>
  <img src="../images/alicebob1.png">
<figcaption>Bonjour Alice - via chiffrement asymetrique</figcaption>
</figure>

Le point faible de cet échange vient de la distribution de la clé publique entre Bob et Alice.

Cet échange n'est réellement sécurisé qu'à la condition que la clé publique de Bob, vienne bien de Bob. Et que personne ne se soit introduit dans la discussion pour substituer la clé publique de Bob par la sienne (attaque de l'*homme du milieu*). 

> Compléter la situation suivante où Eve réalise une attaque dite de l'homme du milieu. Elle envoie au préalable sa propre clé publique à Alice et Bob. Puis elle se fait passer pour chacun des 2 lors de la discussion.


<figure>
  <img src="../images/alicebob2.png">
<figcaption>Bonjour Alice, bonjour Bob - Eve</figcaption>
</figure>

Pour s'authentifier, Bob doit d'abord envoyer à Alice un *certificat*, qui contient sa clé publique mais aussi d'autres informations qui permettent de verifier la validité de ce certificat, en particulier l'*emetteur*: le nom de l'autorité de certification, une *infrastructure à clé publique* (PKI) qui a validé l'identité de Bob.

**Certificats:** Les navigateurs permettent d'ouvrir les pages des sites qui ont pu être *authentifiés*. Pour faire ceci, les navigateurs intègrent un certain nombre de certificats reconnus. Pour les autres, ils utilisent une chaine de certification: les navigateurs font confiance à certaines autorités de certification, qui ont au préalable, certifié leurs clients (possesseurs de sites web).

Si la chaine de confiance est rompue, votre navigateur affiche cette image qui va certainement vous dissuader de poursuivre votre navigation:


<figure>
  <img src="../images/certificat.png">
<figcaption>certificat non reconnu</figcaption>
</figure>

En pratique, le certificat est un ensemble d'informations sur le propriétaire du domaine, la durée de validité, l'algorithme utilisé pour l'authentification, la clé publique, et surtout l'*emetteur*. Lorsqu'Alice reçoit le certificat que lui envoie Bob, elle consulte l'*emetteur* du certificat pour verifier qu'il s'agit bien du bon certificat, que celui-ci appartient bien à Bob.

<figure>
  <img src="../images/echange_certif.png">
<figcaption>procedure d'echange de certificat</figcaption>
</figure>

# Principe d'une communication securisée HTTPS
Lors d'une communication HTTPS: les objectifs d'authentification, authenticité et de confidentialité sont remplis. Lors du protocole de communication, les chiffrements asymétriques et symétriques sont tous 2 utilisés:

> Que Se Passe-t-il Entre un Navigateur Web (client) et un Serveur ?

* le client demande au serveur que celui-ci s'authentifie (1)
* Le serveur envoie au navigateur une copie de son certificat SSL (2)
* Le navigateur vérifie s'il fait confiance à ce certificat SSL. Si oui,le client envoie de manière sécurisée une clé de session qui servira pour la communication (3). L'envoie de la clé se fait à l'aide du chiffrement asymétrique (RSA). Le client utilise la clé publique du serveur pour cet envoi.
* Cette clé sera utilisée pour des chiffrements symétriques entre le client et le serveur (4).


<figure>
  <img src="../images/schema_ssl.jpg">
<a href="https://www.ovh.com/fr/ssl/fonctionnement-ssl.xml">
<figcaption>établissement d'une communication securisée - OVH</figcaption></a>
</figure>

> **Signature numérique:** Lorsqu'on utilise sa propre clé privée pour envoyer un message, et qu'une autorité de certification peut garantir l'origine de cette clé privée, alors ce message envoyé a valeur de signature numérique. Il permet d'authentifier l'emetteur du message.

# Liens
* Chiffrement : notre antisèche pour l'expliquer à vos parents [article de NextImpact](https://www.nextinpact.com/article/24930/99777-chiffrement-notre-antiseche-pour-expliquer-a-vos-parents)
* Les certificats [article de NextImpact](https://www.nextinpact.com/article/21092/97852-de-cacert-a-lets-encrypt-longue-route-vers-https-pour-tous)
* autorité de certification [video Youtube - chaine de Yann Bidon](https://www.youtube.com/watch?v=FSq-FXx5dxU)
* sécurisez vos données avec la cryptographie [openclassroom](https://openclassrooms.com/fr/courses/1757741-securisez-vos-donnees-avec-la-cryptographie/6031870-controlez-lintegrite-de-vos-messages#:~:text=L'int%C3%A9grit%C3%A9%20des%20donn%C3%A9es%20d%C3%A9signe,prot%C3%A9ger%20la%20confidentialit%C3%A9%20des%20donn%C3%A9es.)