---
Title : securisation des communications 
---

Ce chapitre contient plusieurs pages:

* [introduction au chiffrement](../page9/) et nombres premiers
* sécuriser les communications: [Lien 2](../page6/)
* chiffrement asymetrique: [Lien 3](../page7/)
* TP sur les nombres premiers: [Lien 4](/docs/NSI/algorithmes/page11/)
* Projet sur le *hack* ethique et le chiffrement RSA: [Lien 5](/docs/python/pages/TP/python6_codes/)

# Chiffrements symétriques
## Vocabulaire
* **Chiffrer:** transformer les caractères d'un texte pour le rendre incompréhensible, sauf pour celui qui possède la clé de chiffrement.
* **Déchiffrer:** transformer le texte chiffré en texte clair à l'aide de la clé de chiffrement
* **Décrypter:** transformer le texte chiffré en texte clair sans posséder la clé.
* **Cryptologie:** science du secret: possède deux branches
  * **cryptographie:** étude de l'art du chiffrement
  * **cryptanalyse:** analyse des méthodes de chiffrement pour les casser (décrypter)

## à quoi sert le chiffrement?
Le chiffrement a pour but de protéger nos données, nos communications, mais aussi de signer nos messages et de s'assurer que l'on communique bien avec la bonne personne:

* **Authentification**: L'authentification est la procédure qui consiste, pour un système informatique, à vérifier l'identité d'une entité (personne, programme, machine).
* **L'intégrité** des données désigne le fait que les données ne soient pas modifiées au cours d'une communication ou de leur stockage. <br>
Ainsi, si vous envoyez un texte chiffré sur un canal non sécurisé, le texte chiffré pourra être intercepté et altéré par un attaquant avant d'atteindre son destinataire. Pour contrôler cette intégrité, on associe au message une valeur de contrôle.
* **La confidentialité:** Le chiffrement permet de protéger la confidentialité de vos données à l'aide d'une clé secrète. 

## Le chiffrement par décalage, ou chiffre de Caesar
Le chiffre de César fonctionne par décalage des lettres de l'alphabet. 

{{< img src="../images/Caesar3.png" caption="Chiffrement par décalage - wikipedia" >}}
Cet algorithme de chiffrement utilise une fonction périodique pour transformer les rangs de chaque lettre:

| a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

<br>

> Compléter l'algorithme du chiffrement de César. On suppose qu'il existe une clé `c` correspondant au décalage utilisé. Le message clair est `m` et le message chiffré est `m_chiffre`

```python
Pour chaque lettre l du message m:
  l_chiffre = ...
  m_chiffre = ...
```

### Facilité du décryptage

> **Décryptage par FORCE BRUTE**: Combien y-a-t-il de clés possibles à essayer pour celui qui réalise le décryptage? Conclure.

### Un chiffrement par substitution monoalphabetique
Le chiffrement par {{< a link="https://fr.wikipedia.org/wiki/Chiffrement_par_substitution" caption="substitution monoalphabetique" >}}
$$x \rightarrow x + cle$$

Mais il peut y avoir d'autres fonctions plus complexes utilisées. Voire, même aucune fonction, mais une table de correspondance entre lettre en clair et symbole chiffré. La clé aurait alors la longueur de l'alphabet.

Le chiffrement par monosubstitution a été également utilisé par différentes méthodes utilisant une table.

{{< img src="../images/polybe.png" caption="Carré de Polybe - le mot « bonjour » est ainsi chiffré par le carré de Polybe :12 34 33 24 34 45 42 - wikipedia" >}}

Vous trouvez cette méthode de chiffrement trop simpliste? Regardez alors sa déclinaison avec le{{< a link="https://fr.wikipedia.org/wiki/Chiffre_de_Playfair" caption="chiffrement de Playfair" >}}

{{< img src="../images/playfair.png" link="https://www.youtube.com/watch?v=JMkGYoT3-Rw" caption="VIDEO: chiffrement de Playfair - youtube - Astuces et tutoriels" >}}
### Decryptage par analyse fréquentielle
Le code issu du carré de Polybe a été utilisé par les prisonniers, qui transmettaient leur message en tapant sur les murs {{< a link="https://fr.wikipedia.org/wiki/Tap_code" caption="Tap code" >}}
Le **problème** avec ce type de chiffrement monoalphabetique, est qu'il est possible de repérer comment sont transformées certaines lettres à partir de l'**analyse fréquentielle** du message chiffré.

On peut alors utiliser la frequence des lettres pour dechiffrer et comparer avec la frequence moyenne dans une langue. (200 caracteres suffisent). Il y a aussi tout un tas de statistique, comme les lettres uniques, doubles lettres, finales, etc... C'est un marqueur suffisant pour savoir comment le code est fait.


{{< img src="../images/frequenceA_Z.gif" caption="frequence des lettres en français, calculée sur la lecture de plusieurs ouvrages classiques (10 millions de caracteres)" >}}
Cette analyse frequentielle est plus difficile *(mais pas impossible)* dans le cas du chiffrement de Playfair, car celui-ci utilise une methode de substitution d'un groupe de 2 lettres: c'est une substitution *polyalphabetique*. Le nombre de combinaisons possibles avec 2 lettres est alors de $26^2 = 676$.

### Une amélioration: Substitution polyalphabétique
L'analyse des fréquences est moins pertinente lorsque le message a été chiffré avec un chiffrement polyalphabétique (qui tend à rendre aléatoire la fréquence des lettres).

**Polyalphabetique:** Se dit d'un chiffre où un groupe de n lettres est codé par un groupe de n symboles. Le chiffrement *Playfair*, vu plus haut s'apparente à une substitution polyalphabetique, puisqu'il substitue des digrammes (groupes de 2 lettres) dans le texte d'origine.

L'exemple suivant montre une polysubstitution simple avec une clé de longueur 3 qui va décaler les lettres de l'alphabet :

On définit la clé '123' qui indique que le premier caractère sera décalé d'une position, le second de 2 et le troisième de 3 positions, etc.

Le mot : WIKIPEDIA donne donc dans ce cas XKNJRHEKD.

Mais si on chiffre le mot : AAAAAAAAA cela donnera BCDBCDBCD. La lettre A ne donne pas toujours la même correspondance chiffrée. Mais on peut analyser la périodicité et en déduire la longueur de la clé. La connaissance de la longueur de la clé est essentielle pour pouvoir pratiquer l'analyse frequentielle.

### La machine{{< a link="https://fr.wikipedia.org/wiki/Enigma_(machine)" caption="Enigma" >}}
{{< img src="../images/enigma.jpg" caption="Enigma: machine électromécanique portative servant au chiffrement et au déchiffrement - wikipedia" >}}
La machine utilise des rotors qui sont mis en position selon une clé. L'alphabet est chiffré selon la position initiale de ces rotors. Ceux-ci se décalent lors de l'utilisation. Ce qui modifie l'alphabet chiffré et augmente sérieusement la complexité.

Déchiffrer se fait avec la même machine, à condition d'utiliser la même clé.

Son utilisation la plus célèbre fut celle faite par l'Allemagne nazie, avant et pendant la Seconde Guerre mondiale, la machine étant réputée inviolable selon ses concepteurs. 

Le **principe de la machine Enigma était connu**. Le concepteur savait à l'avance que certains modèles pourraient être volés par les alliés. Ce qui fit son efficacité, c'est le nombre immense de combinaisons possibles pour les réglages initiaux de la machine et le choix de la clef brute du message.

Les cryptanalystes britanniques, dont{{< a link="https://fr.wikipedia.org/wiki/Alan_Turing" caption="Alan Turing" >}}
### Points communs des chiffrements symétriques
Ces algorithmes fonctionnent selon:

- Entrée
- repetition n fois de substitutions et permutations. Utilise une clé unique pour chiffrer et dechiffrer.
- Sortie



# Exercices
## Substitution monoalphabétique: Code de César

* **Question 1:** Quelle clé a  été utilisée pour chiffer ce texte (avec l’algorithme de César)? 

$$jyfwavnyhwopl hwwspxbll$$

* **Question 2:** Décrypter ce message.



* **Question 3:** Proposer un programme en python qui chiffre un message clair `m` en un message codé selon la clé numérique `c`.

*Aide:* 

* La fonction `ord('x')` retourne un entier correspondant à la position d'un caractère dans la table ascii.<br>
Par exemple, `ord('A')` retourne 65, `ord('B')` retourne 66,...

* La fonction `chr(N)` retourne le caractère de rang N: `chr(65)` retourne 'A'.

## Substitution polyalphabétique: Chiffrement de Playfair
A partir des explications données dans la video:

* **Question 1:** Construisez la matrice pour l’algorithme de Playfair avec la clé *estienne*. 
* **Question 2:** Chiffrer le message: *COUPERLETRANSMETTEUR*.
* **Question 3:** S'agit-il d'une méthode utilisant la substitution monoalphabetique, ou polyalphabetique?
* **Question 4:** Est-ce qu'avec cette méthode, le decryptage peut être facilité par l'analyse fréquentielle? 

## Frequences des lettres dans un texte
La fonction suivante retourne une liste de 26 valeurs de type *float*, donnant dans l'ordre de l'alphabet, la frequence pour chaque lettre dans un texte:

```python
def freq(m):
    frequences = [0]*26
    n = len(m)
    for c in m:
    ...
```

* **Question 1:** Compléter le script de la fonction `freq`.

Soient les deux textes chiffrés suivants:

a. DGFHTMOMEIAMTLMFGOKFGOKEGDDTRWEIAKZGFGFSTEKGOMLASTTIFG FOSTLM FTFGOK MGWMFG OKRTSA JWTWTA WDTFMG FDAOLT WMOSSA FGOKET WKRWFD TEIAFM ROAZSG MOFKOT FFTXAW MLARGW ETWKJW AFROSD OAWSTA WDAMOF HGWKDT STEITK SADAOF

b. YOHGMV MFCBRB GWFNIZ ZPSURW FUOIPU WYITFA NIETGG DOCKAC PQE- BEW PMXEMK VGRAIL KWWXZO CILGPM QOVCGE GMYEBQ RYACJM WX- ULFR VQMDCY LZFYZM YTPCRF DCRJNS FIHIQG RZEPRC VWMDIL KGYDQO RVFMXM CRCNIM UGRBKR BOOIUG PQCBVZ NEYACE

* **Question 2:** L'un des 2 a été chiffré avec un algorithme de substitution mon-alphabetique, et l'autre, poly-alphabétique. Lequel est mono-alphabétique?

## Chiffrement symétrique par la fonction XOR
exercice inspiré de la page sur le chiffrement de [glassus.github.io](https://glassus.github.io/terminale_nsi/T5_Architecture_materielle/5.4_Cryptographie/cours/)

* **Question 1:** La fonction XOR est la fonction du OU EXCLUSIF.

Donner la table de vérité de la fonction XOR

* **Question 2:** A partir des lignes suivantes, vérifier que l'opérateur `^` en python réalise la fonction XOR sur 2 nombres écrits en valeur décimale:

```python
> 3 ^ 4
7
> 4 ^ 5
1
```

* **Question 3:** Programmer la fonction `xor` en python qui retourne le resultat de XOR appliqué aux 2 paramètres a et b.

*Exemple:*

```
>>> xor(0,1)
>>> 1
```

* **Question 4:** On s'interresse maintenant à la programmation de la fonction XOR pour chiffrer un message à partir d'un masque:

$$masque = "CETTEPHRASEESTVRAIMENTTRESTRESLONGUEMAISCESTFAITEXPRES"$$

Compléter la fonction chiffre(message, masque) qui chiffre message en le XORant avec masque.

Cette fonction doit pouvoir aussi servir à déchiffrer le message chiffré.

```python
def chiffre(message, masque):
    message_chiffre = ""
    for i in range(len(message)):
        ...
```

<!--
## Chiffrement symetrique par la fonction XOR
Cet exercice est inspiré du TP cryptographie du site de [hmalherbe.fe - NSI](http://hmalherbe.fr/thalesm/gestclasse/documents/Terminale_NSI/2020-2021/TP/TP_Term_NSI_cryptographie/TP_Term_NSI_cryptographie.html)

La fonction XOR est la fonction du OU EXCLUSIF.

* **Question 1:** Donner la table de vérité de la fonction XOR
* **Question 2:** Programmer la fonction `xor` en python qui retourne le resultat de XOR appliqué aux 2 paramètres a et b.

*Exemple:*

```
>>> xor(0,1)
>>> 1
```

On utilisera pour cet exercice les fonctions suivantes, qui permettent de transformer un texte en binaire, à partir du code ascii des lettres:

```python
def text2bin(texte):
    """ convertit une chaine de caracteres en binaire
    param:
    texte: str, une chaine de caracteres
    return:
    bin: str, une sequence de 8 bits par caracteres
    chaque sequence de 8 bits est la valeur du code ascii du caractere
    convertie en binaire (sur un octet)
    exemple:
    >>> text2bin('HELLO')
    >>> '0100100001000101010011000100110001001111'
    """
    bin = ''
    for l in texte:
        bits = f'{ord(l):b}'
        # f est une fonction de formatage et convertit
        # une valeur decimale ord(l) en binaire
        # ord(l) donne la valeur numerique correspondant au caractere ascii l
        oct = octet(bits)
        bin += oct
    return bin

def octet(bits):
    """ rajoute les 0 au nombre binaire pour mettre en format de 8 bits
    """
    byte = str(bits)
    for i in range(8-len(bits)):
        byte = '0' + byte
    return byte
```



* **Question 3:** programmer toutes ces fonctions dans un fichier python (ou un notebook). Tester en particulier la fonction `text2bin` sur un texte relativement court (2 caractères). Recopier le résultat obtenu.

La fonction suivante transforme une séquence de chiffres binaires en une valeur décimale:

```python
def bin2dec(oct):
    # oct est un str de 8 caracteres
    n = 0
    for i in range(len(oct)):
        n += int(oct[-i-1])*2**i
    return n
```

Exemple:

```
>>> bin2dec('001001')
>>> 9
```

* **Question 4:** Utiliser cette fonction pour écrire le script de `bin2text`, la fonction inverse de `text2bin`, qui, pour une sequence binaire donnée, de longueur multiple de 8 bits, retourne la chaine de caracteres correspondants.

Le XOR (OU exclusif) est très utilisé dans les protocoles de chiffrement symétrique. En effet, c’est une opération qui est sa propre réciproque, ce qui n’est pas le cas du ET ni du OU.

On souhaite chiffrer un message (par exemple une chaîne de caractères) à l’aide d’une clé binaire. Seuls des caractères ASCII sont utilisés.

* **Question 5:** Ecrire le script de cette fonction, que l'on appelera `chiffre_xor`. Cette fonction prend 2 paramètres: la séquence de bits à chiffrer, ainsi que la clé de chiffrement. Cette clé est de dimension inférieure ou égale au premier paramètre. Il faudra l'appliquer de manière périodique aux bits de la séquence à chiffrer (voir cours sur le chiffrement poly-alphabetique).
* **Question 6:** Utiliser les fonctions du programme pour: 
  * convertir un message secret en une sequence binaire
  * chiffrer cette sequence binaire avec l'algorithme XOR, en utilisant la clé `10101`
  * afficher le message chiffré
  * dechiffrer le message
  * afficher le message dechiffré
-->
# Liens
* Suite du cours: [chiffrement asymétrique](../page7)

## Documentation, sitographie
* Chiffrement : notre antisèche pour l'expliquer à vos parents [article de NextImpact](https://www.nextinpact.com/article/24930/99777-chiffrement-notre-antiseche-pour-expliquer-a-vos-parents)
* Interstices : [coder et decoder. La machine Enigma](https://interstices.info/turing-a-lassaut-denigma/)
* sécurisez vos données avec la cryptographie [openclassroom](https://openclassrooms.com/fr/courses/1757741-securisez-vos-donnees-avec-la-cryptographie/6031870-controlez-lintegrite-de-vos-messages#:~:text=L'int%C3%A9grit%C3%A9%20des%20donn%C3%A9es%20d%C3%A9signe,prot%C3%A9ger%20la%20confidentialit%C3%A9%20des%20donn%C3%A9es.)