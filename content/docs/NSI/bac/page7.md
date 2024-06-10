---
Title: Bac POO
---

# Bac 2022 Metropole1/ Exercice 5
*Cet exercice porte sur la Programmation Orientée Objet.*

Les participants à un jeu de LaserGame sont répartis en équipes et s’affrontent dans ce jeu de tir, revêtus d’une veste à capteurs et munis d’une arme factice émettant des infrarouges.

Les ordinateurs embarqués dans ces vestes utilisent la programmation orientée objet pour modéliser les joueurs. La classe Joueur est définie comme suit :

```python
class Joueur:
  def __init__(self, pseudo, identifiant, equipe):
    """constructeur """
    self.pseudo = pseudo
    self.equipe = equipe
    self.id = identifiant
    self.nb_de_tirs_emis = 0
    self.liste_id_tirs_recus = []
    self.est_actif = True

  def tire(self):
    """méthode déclenchée par l'appui sur la gachette"""
    if self.est_actif == True:
      self.nb_de_tirs_emis = self.nb_de_tirs_emis + 1

  def est_determine(self):
    """methode qui renvoie True si le joueur réalise un
    grand nombre de tirs"""
    return self.nb_de_tirs_emis > 500

  def subit_un_tir(self, id_recu):
    """méthode déclenchée par les capteurs de la
    veste"""
    if self.est_actif == True:
      self.est_actif = False
      self.liste_id_tirs_recus.append(id_recu)
```

## Question 1
Parmi les instructions suivantes, recopier celle qui permet de déclarer un objet `joueur1`, instance de la classe `Joueur`, correspondant à un joueur dont le pseudo est `“Sniper”`, dont l’identifiant est `319` et qui est intégré à l’équipe `“A”`:

* **Instruction 1** : `joueur1 = ["Sniper", 319, "A"]` 
* **Instruction 2** : `joueur1 = new Joueur["Sniper", 319, "A"]` 
* **Instruction 3** : `joueur1 = Joueur("Sniper", 319, "A")`
* **Instruction 4** : `joueur1 = Joueur{"pseudo":"Sniper",
 "id":319, "equipe":"A"}`

## Question 2
La méthode `subit_un_tir` réalise les actions suivantes :

Lorsqu’un joueur actif subit un tir capté par sa veste, l’identifiant du tireur est ajouté à l’attribut `liste_id_tirs_recus` et l’attribut `est_actif`prend la valeur `False` (le joueur est désactivé). Il doit alors revenir à son camp de base pour être de nouveau actif.

A.  Écrire la méthode `redevenir_actif`qui rend à nouveau le joueur actif
uniquement s’il était précédemment désactivé.

B.  Écrire la méthode `nb_de_tirs_recus`qui renvoie le nombre de tirs reçus
par un joueur en utilisant son attribut `liste_id_tirs_recus`.

## Question 3
Lorsque la partie est terminée, les participants rejoignent leur camp de base
respectif où un ordinateur, qui utilise la classe `Base`, récupère les données.
La classe `Base` est définie par :

* ses attributs :
  * `equipe` : nom de l’équipe (str). Par exemple, “A” ,
  * `liste_des_id_de_l_equipe` qui correspond à la liste (`list`) des
identifiants connus des joueurs de l’équipe,
  * `score` : score (`int`) de l’équipe, dont la valeur initiale est 1000 ;
* ses méthodes :
  * `est_un_id_allie` qui renvoie `True` si l’identifiant passé en paramètre
est un identifiant d’un joueur de l’équipe, `False` sinon,
  * `incremente_score` qui fait varier l’attribut `score` du nombre passé en
paramètre,
  * `collecte_information` qui récupère les statistiques d’un participant
passé en paramètre (instance de la classe `Joueur`) pour calculer le score
de l’équipe.

```python
def collecte_information(self,participant):
  if participant.equipe == self.equipe : # test 1
    for id in participant.liste_id_tirs_recus:
      if self.est_un_id_allie(id): # test 2
        self.incremente_score(-20)
      else:
        self.incremente_score(-10)
```

A.  Indiquer le numéro du test (**test 1** ou **test 2**) qui permet de vérifier qu’en fin de partie un participant égaré n’a pas rejoint par erreur la base adverse.

B.  Décrire comment varie quantitativement le score de la base lorsqu’un joueur
de cette équipe a été touché par le tir d’un coéquipier. 


On souhaite accorder à la base un bonus de 40 points pour chaque joueur
particulièrement déterminé (qui réalise un grand nombre de tirs).

## Question 4:
Recopier et compléter, en utilisant les méthodes des classes `Joueur` et `Base`, les 2 lignes de codes suivantes qu’il faut ajouter à la fin de la méthode
`collecte_information` :

```python
........ #si le participant réalise un grand nombre de tirs
 ......... #le score de la Base augmente de 40
```

# Bac 2024 Amerique du Nord J2 exercice 3
*Cet exercice porte sur la programmation objet, les structures de données, les réseaux
et l’architecture matérielle.*

On considère un réseau local constitué des trois machines de Alice, Bob et Charlie
dont les adresses IP sont les suivantes :

* la machine d’Alice a pour adresse 192.168.1.1 ;
* la machine de Bob a pour adresse 192.168.1.2.

On rappelle que l’adresse 192.168.1.255 est l’adresse de diffusion qui sert à communiquer avec toutes les machines du réseau local et le masque de ce réseau local est 255.255.255.0. Cette adresse de diffusion est réservée et ne peut être attribuée à une machine.

## Partie A
1. Donner une adresse IP possible pour la machine de Charlie afin qu’elle puisse communiquer avec celles d’Alice et Bob dans le réseau local. Justifier votre réponse en donnant toutes les conditions à respecter dans le choix de cette adresse IP.

Ce réseau est utilisé pour effectuer des transactions financières en monnaie numérique nsicoin entre les trois utilisateurs. Pour cela, on crée la classe Transaction ci-dessous :

```python
class Transaction:
  def __init__(self, expediteur, destinataire, montant):
    self.expediteur = expediteur
    self.destinataire = destinataire
    self.montant = montant
```

2. Toutes les dix minutes, les transactions réalisées pendant cet intervalle de temps sont regroupées par ordre d’apparition dans une liste Python. Dans un intervalle de dix minutes, Alice envoie dix nsicoin à Charlie puis Bob envoie cinq nsicoin à Alice. Écrire la liste Python correspondante à ces transactions.

Pour garder une trace de toutes les transactions effectuées, on utilise une liste chaînée de blocs (ou blockchain) dont le code Python est fourni ci-dessous. Toutes les dix minutes un nouveau bloc contenant les nouvelles transactions est créé et ajouté à la blockchain.

```python
class Bloc:
  def __init__(self, liste_transactions, bloc_precedent):
    self.liste_transactions = liste_transactions
    self.bloc_precedent = bloc_precedent # de type Bloc

class Blockchain:
  def __init__(self):
    self.tete = self.creer_bloc_0()

  def self.creer_bloc_0(self):
    """
    Crée le premier bloc qui distribue 100 nsicoin à tous les utilisateurs
    (un pseudo-utilisateur Genesis est utilisé comme
    expéditeur)
    """
    liste_transactions = [
      Transaction("Genesis", "Alice", 100),
      Transaction("Genesis", "Bob", 100),
      Transaction("Genesis", "Charlie", 100)
      ]
    return Bloc(liste_transactions, None) 
```

3. La figure 1 représente les trois premiers blocs d’une Blockchain. Expliquer pourquoi la valeur de l’attribut `bloc_precedent` du bloc0 est None.

{{< img src="../images/page7_1.png" caption="Blockchain" >}}

4. À l’aide des classes Bloc et Blockchain, écrire le code Python permettant de créer un objet `ma_blockchain` de type Blockchain représenté par la figure 1.
5. Donner le solde en nsicoin de Bob à l’issue du bloc2.

6. On souhaite doter la classe Blockchain d’une méthode `ajouter_bloc` qui prend en paramètre la liste des transactions des dix dernières minutes et l’ajoute dans un nouveau bloc. Écrire le code Python de cette méthode cidessous.

```python
def ajouter_bloc(self, liste_transactions):
  # A compléter
```

8. Lorsqu’un utilisateur ajoute un nouveau bloc à la Blockchain, il l’envoie aux autres membres. Ainsi chaque utilisateur dispose sur sa propre machine d’une copie identique de la Blockchain. Donner le nom et la valeur de l’adresse IP à utiliser pour effectuer cet envoi.
9. On souhaite doter la classe Bloc d’une nouvelle méthode `calculer_solde` permettant de renvoyer le solde à l’issue de ce bloc. Recopier et compléter sur votre copie le code Python de cette méthode :

```python
def calculer_solde(self, utilisateur):
  if self.precedent is None: # cas de base
    solde = 0
  else:
    solde = ... # appel récursif : calcul du solde au bloc précédent
    for transaction in bloc.liste_transactions
      if ... == utilisateur:
        solde = solde - ....
      elif ... :
        ...
    return solde
```

10. Écrire l’appel à la fonction calculer_solde permettant de calculer le solde
actuel de Alice

## Partie B
Dans cette partie, on va améliorer la sécurité de la blockchain. Pour cela on enrichit la
classe Bloc comme indiqué ci-dessous:

```python
class Bloc:
  def __init__(self, liste_transactions, bloc_precedent):
    self.liste_transactions = liste_transactions
    self.bloc_precedent = bloc_precedent
    # Définition de trois nouveaux attributs
    self.hash_bloc_precedent = self.donner_hash_precedent()
    self.nonce = 0 # Fixé arbitrairement et temporairement à 0 
    # avant le minage du bloc
    self.hash = self.calculer_hash()

    # Définition de trois nouvelles méthodes
    def donner_hash_precedent(self):
      if self.bloc_precedent is not None:
        return self.bloc_precedent.hash
      else :
        return "0"

    def calculer_hash(self):
      """calcule et renvoie le hash du bloc courant"""
      # Le code python n'est pas étudié dans cet exercice

    def minage_bloc(self):
      """modifie le nonce d'un bloc pour que son hash commence
      par '00'"""
      # A compléter
```

La fonction calculer_hash produit une chaîne de caractères appelée hash qui
possède les propriétés suivantes :

* Le hash d’un bloc dépend de toutes les données contenues dans le bloc et uniquement de ces données ;
* Le calcul du hash d’un bloc est rapide et facile à calculer par une machine ;
* La moindre modification dans le bloc produit un hash complètement différent ;
* Il est impossible de déduire le bloc à partir de son hash.
* Si deux blocs ont le même hash, c’est qu’ils sont parfaitement identiques.

11. L’attribut nonce est de type entier. Miner un bloc signifie trouver une valeur de
nonce de telle façon que l’attribut hash du bloc commence par les deux
caractères “00”. Compte tenu des propriétés précédentes, la seule façon de
trouver cette valeur est de procéder à une recherche exhaustive. Expliquer en
quoi consiste le fait de trouver une valeur par recherche exhaustive.

Dans la suite de l’exercice, on considère que tous les utilisateurs cherchent à miner le
nouveau bloc. Le premier qui réussit, l’ajoute à la blockchain et gagne une récompense
en nsicoin.

12. En justifiant votre réponse, donner la valeur de l’attribut hash_bloc_precedent
du bloc0.
13. Sachant que le hash est écrit sur 256 bits, donner le calcul permettant d’obtenir
le nombre de hash possibles.
14. Recopier et compléter sur votre copie le code python de la méthode
minage_bloc.

```python
def minage_bloc(self):
  """modifie le nonce d'un bloc pour que son hash commence par
  '00' en énumérant tous les entiers naturels en partant de 0."""
  self.nonce = 0
  self.hash = self.calculer_hash()
  while ... :
    self.nonce = ...
    self.hash = ...
```

