---
Title: python
---

# Naissance de Python
Python, créé en 1991, est désormais le principal langage de programmation dans les domaines du Machine Learning, du Big Data et de la Data Science.

Son créateur est un néerlandais nommé Guido van Rossum, qui a cherché à faire un langage très simple et lisible. Certains prétendent même que lire du code Python équivaut à lire de l’anglais.

{{< img src="../images/guido.jpeg" link="https://fr.wikipedia.org/wiki/Guido_van_Rossum" caption="Bio de Guido Van Rossum - wikipedia" >}}
le nom du langage vient de l’affection de Guido pour le « Monty Python Flying Circus », une comédie surréaliste créée par un groupe comique anglais « Monty Python ».

Le site « [Rosetta Code](http://www.rosettacode.org/wiki/Rosetta_Code) » permet de comparer des programmes réalisant le même travail dans plusieurs centaines de langages informatique différents, confirme cette lisibilité.

la licence Python appartient depuis 2001 à la Python Software Foundation, organisation sans but lucratif. La licence est donc FLOSS "Free/Libre and Open Source Software", à l’instar de Linux, Ubuntu, LibreOffice, Mozilla Firefox, Mono (clone de la plateforme .NET de Microsoft), Apache Web Server et le VLC player.

{{< img src="../images/logoPython.jpeg" >}}
# Langage de haut-niveau
On appelle « haut niveau » les langages de forte abstraction, qui s’éloignent de l’électronique de l’appareil opérant le programme. Un langage orienté autour du problème à résoudre sans s’occuper des caractéristiques techniques du matériel utilisé. 

Python est généralement appelé un langage interprété, cependant, il combine la compilation et l'interprétation:

* Lorsque nous exécutons un **code source** (un fichier avec une extension **`.py`** ), Python le compile d'abord en un bytecode. 
* Le **bytecode** est une représentation de bas niveau indépendante de la plate-forme de votre code source, cependant, il ne s'agit pas du code machine binaire et ne peut pas être exécuté directement par la machine. 
* Le bytecode est un ensemble d'instructions pour une machine virtuelle qui s'appelle la **machine virtuelle Python (PVM)**.

{{< img src="../images/pvm.png" caption="du .py au PVM" >}}
Le PVM est un interpréteur qui exécute le bytecode et fait partie du système Python. Le bytecode est indépendant de la plate-forme, mais PVM est spécifique à la machine cible. L'implémentation par défaut du langage de programmation Python est CPython qui est écrit dans le langage de programmation C. (il existe d'autres implementations). CPython compile le code source python dans le bytecode, et ce bytecode est ensuite exécuté puis desassemblé par la machine virtuelle CPython.

# Bytecode
On peut verifier comment sont codés les nombres dans la machine en lisant le Bytecode.<br>
Le **module struct** permet la conversion entre valeurs typées de python, et données binaires du C, le bytecode. C'est ce bytecode qui est passé à la machine après compilation lors de l'execution.

## Reconstruction d'un nombre à partir de son complément à 2
On doit alors spécifier le format de ces valeurs, avant d'en demander la conversion en bytecode.

Pour faire cela, on importe la librairie `struct` avec `import struct`.

La fonction `int_to_b` permet de convertir un entier signé en Bytecode, puis de retourner la sequence binaire correspondante. 

```python
import struct
def int_to_b(num):
    bits, = struct.unpack('!I', struct.pack('!i', num))
    return bin(bits)
```

Testons cette fonction avec le nombre -129:

```python
>>> int_to_b(-129)
'0b11111111111111111111111101111111'
```

Rappelez vous: pour coder un entier signé, il faut:


* inverser tous les bits (chercher le complément à 1)
* ajouter 1 au nombre binaire pris en valeur absolue

Donc pour retrouver la valeur absolue en binaire, il faudra :

* soustraire 1
* déterminer le complement à 1 (inverser tous les bits)

'0b11111111111111111111111101111111' <br>-> (-1) <br>'0b11111111111111111111111101111110'
<br>
puis inversion de tous les bits:<br>
N = '0b11111111111111111111111101111110' 
<br>
`inverse_bits(N) = ?` 

Il pourra être utile de programmer une fonction `inverse_bits` pour eviter de faire les 32 bits "à la main".

Le debut de cette fonction pourrait être:

```python
def inverse_bits(N):
    inverse = ''
    for bit in N:
        if bit == '0':
        ...
```

Puis pour finir:

```python
>>> N = '11111111111111111111111101111110'
>>> int(inverse_bits(N),2)
129
```

### à vous de jouer
Utiliser les fonctions `float_to_bin` puis `int_to_bin` pour obtenir les représentations de -126 dans les 2 représentations vues ici: selon la norme IEEE 754 puis selon le codage à complement à 2.

Verifier alors que le nombre peut être reconstruit selon ces 2 normes, et que l'on retrouve bien -126.

### CONVERSION PYTHON -> C
S'il s'agit d'un flottant à convertir en bytecode, faire:

`struct.pack('!f', num)`

On précise ici que la variable `num` est de type float. `num` sera alors codé en C-bytes selon la norme IEEE 754.

*Exemple:* en console, on demande le bytecode qui code le flottant 500.0

```python
import struct
>>> struct.pack('!f', 129.)
b'C\x01\x00\x00'
```

Les options sont:

* i : entier non signé 
* I : entier signé
* f : float


### CONVERSION C -> PYTHON
L'opération inverse s'effectue ainsi :

`bits,=struct.unpack('!I', b'C\x01\x00\x00')`

La virgule après bits doit bien être écrite afin de que bits soit mis en format numerique. Cela permet de traduire le Bytecode `b'C\x01\x00\x00'` en une serie de bits.

Si on veut afficher la série de bits:

```python
bin(bits)
'0b1000011000000010000000000000000'
```

## Programme complet: python -> C -> python
La fonction `float_to_b` permet de convertir un flottant en Bytecode, puis de retourner la sequence binaire correspondante. Celle-ci suit la norme IEEE 754, en simple precision.


```python
import struct

def float_to_b(num):
    bits, = struct.unpack('!I', struct.pack('!f', num))
    return bin(bits)

```

On peut alors tester avec le nombre -129:

```python
>>> float_to_b(-129)
'0b11000011000000010000000000000000'
```  

## Reconstruction d'un nombre à partir de la représentation en ieee 754

On peut alors vérifier si la reconstruction du nombre -129 est possible à partir de ce binaire: Le nombre s'écrit:

$$-1^{bit~signe}\times 1,M \times 2^{E-127}$$

Le binaire est constitué de 3 parties

| bit de signe | E | M |
| --- | --- | --- |
| 1 bit | 8 bits | 23 bits restants |
| 1 | 10000110 | 00000010000000000000000 |


E vaut donc 10000110. Or, pour obtenir la puissance de 2, il faut soustraire 127. Ceci permet de gérer les puissances négatives de 2 et donne une etendue [-127; 128] à l'exposant.

Cela peut se faire selon le calcul suivant:

```python
>>> int(b,2) - 127
7
```

M est la partie après la virgule de 1,M. On rajoute le bit entier avant la virgule: (on n'écrit pas les zeros à droite du dernier 1)

$$1,0000001$$

Le nombre s'écrit : 

$$-1 \times 1,0000001 \times 2^7$$

Mais l'exposant 7 doit permettre alors de decaler la virgule de 7 rangs vers la droite, ce qui donne finalement:

$$-1 \times 10000001$$

Cette fois, on peut evaluer ce binaire, et il vaut: $$-127$$



# Liens

https://www.ausy.fr/fr/actualites-techniques/que-se-cache-t-il-derriere-python

https://ichi.pro/fr/comprendre-le-bytecode-python-255007960625997

https://opensource.com/article/18/4/introduction-python-bytecode

https://learning-python.com/class/Workbook/unit02.htm
