---
Title: Capteur lumiere
---

# Capteur de luminosité
## Prise en main du capteur
Pour ce projet, le panneau de DEL peut être utilisé en capteur de luminosité basique en inversant la polarisation des DEL. 

Celles-ci sont alors utilisées comme capteur de lumière.

Le capteur de lumière de la micro:bit mesure la lumière dans une gamme allant de 0 (très sombre) à 255 (très lumineuse).


La mesure du niveau de luminosité passe par la commande ci-dessous.

```python
from microbit import *
display.read_light_level()
```

On peut stocker cette valeur dans une variable, par exemple:

```python
from microbit import *
lumi = display.read_light_level()
```

On peut alors ajouter des branchements sur cette variable dans le programme pour actionner un *smiley* qui depend de la mesure (clarté/obscurité). Il faudra prévoir un seuil de luminosité pour basculer d'un *smiley* à un autre *smiley*.

Et mettre l'ensemble dans une boucle `while True:`, comme par exemple:

```python
# script 1
from microbit import *

while True:
    lumi = display.read_light_level()
    if ...
    ...
```

La surface de DEL alterne alors entre mesure d'intensité et affichage. D'où le clignottement.

**Question a:** Recopier le script 1 sur votre feuille

## Affichage d'intensité variable
On peut fabriquer nos propres images à partir de chaine de caractère utilisant des chiffres de 0 à 9.

Le script suivant donne un carré de plus forte intensité:

```python
from microbit import *

img = Image('99999:90009:90009:90009:99999:')
display.show(img)
```

{{< img src="../images/lumi2.jpg" >}}

Le script suivant donne un carré de plus faible intensité:

```python
from microbit import *

img = Image('11111:10001:10001:10001:11111:')
display.show(img)
```

{{< img src="../images/lumi1.jpg" >}}

Avec des valeurs intermédaires, comme par exemple '33333:30003:...', l'intensité sera réduite.

Vous pouvez, dans un premier temps, afficher ces 2 images selon l'intensité lumineuse mesurée. Modifier légèrement le script 1 précédent. (obscurité: '99999:90009:...', clair: '11111:10001:...')

Puis, concevoir le nouveau projet suivant (script 2): Afficher un carré dont l'intensité lumineuse varie entre 0 et 9 selon l'intensité lumineuse mesurée.

**Aides:**

1. La fonction suivante retourne une valeur de 0 à 9 selon la variable `lumi` en argument:

```python
def intensite(lumi):
	"""retourne une valeur de 0 a 9
	9 <=> lumi = 0
	0 <=> lumi = 255
	"""
	return int((255 - lumi)/255*9)

>>> I = intensite(255)
>>> print(I)
0
>>> I = intensite(0)
>>> print(I)
9
```

2. On peut ensuite construire une `chaine` de caractères à partir de `str(I)`, qui sera dans le même format que celle utilisée dans l'instruction `img = Image('99999:90009:90009:90009:99999:')` 

```python
chaine = str(I) * 5 + ":" + str(I) + "0" + ...
```

**Question b:** Construire le script 2 et tester le programme. Recopier le script de votre *programme principal* sur votre feuille.

**Question c:** Améliorer le script 2 en créant une nouvelle fonction `carre` qui prendra en paramètre la valeur `lumi` et retournera une chaine de caractères dans le format voulu pour l'affichage:

```python
>>> carre(0)
'99999:90009:90009:90009:99999:'
>>> carre(255)
'11111:10001:10001:10001:11111:'
>>> carre(100)
'55555:50005:50005:50005:55555:'
```

**Question d:** Recopier sur votre feuille le script de votre fonction `carre`

## Prolongement
On pourra remplacer l'image fixe par une animation. Il faudra alterner avec 3 images successives, et attendre un delai de 100ms entre chaque. Utiliser pour cela la fonction `sleep(100)` entre chaque affichage.

{{< img src="../images/lumi3.GIF" >}}

# Documentation
* TP inspiré du document de [Formation_Microbit_Lycee](https://xofe14.scenari-community.org/Publications/Formations/Formation_Microbit_Lycee/co/CapteurLuminosite.html)