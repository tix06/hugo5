---
Title: TP source de tension
---

# Mesures électriques dans un circuit
## Brancher un multimètre (Voltmètre / Ampèremetre)
Voir les rappels d'électricité sur: [allophysique.com/docs/PC_1ere/energie/energie3/](/docs/PC_1ere/energie/energie3/)

| tension | courant | puissance |
| --- | --- | --- |
| 
![mesure de tension](../images/mesureV.png) | ![mesure du courant](../images/mesureI.gif)  | ![mesure puissance](../images/puissance2.png)   |

## Travail pratique

1. Recopier le schéma du circuit suivant dans votre cahier:
![circuit simple](../images/sensCourant.gif)
2. Positionner sur le schéma les multimètres qui mesurent la tension aux bornes de la pile, et le courant électrique dans le circuit.
3. Réaliser le circuit. Ajouter un interrupteur pour éviter de vider la pile trop rapidement. Remplir le tableau avec les mesures.
<table ><thead style="border:solid;"><th>U<sub>PN</sub>(V)</th><th>I(A)</th><th>P = U<sub>AB</sub>*I (W)</th></thead><tr style="border:solid;"><td><br></td><td></td><td></td></tr></table>
4. Recopier le schéma suivant. Positionner les multimètres qui mesurent la tension aux bornes de la pile, et le courant électrique dans la **branche principale** circuit.
![circuit avec derivation](../images/circuitDerive.gif)
5. Réaliser le circuit. Ajouter un interrupteur pour éviter de vider la pile trop rapidement. Remplir le tableau avec les mesures.
<table ><thead style="border:solid;"><th>U<sub>PN</sub>(V)</th><th>I(A)</th><th>P = U<sub>AB</sub>*I (W)</th></thead><tr style="border:solid;"><td><br></td><td></td><td></td></tr></table>
6. Dans un cas idéal, chaque lampe devrait éclairer comme si elle était seule dans le circuit. Est-ce le cas? D'où vient cette différence avec le cas ideal?

# Une source de tension pas si idéale
## Caractéristique intensité - tension
A partir du premier montage réalisé, remplacer la lampe par un rhéostat.
<br>Faire varier le rheostat (20 à 1 000 &#937;) et relever les valeurs de tension et de courant. Remplir le tableau:

<table ><thead style="border:solid;"><th>R (&#937;)</th><th>U(V)</th><th>I(A)</th><th>P = U<sub>AB</sub>*I (W)</th></thead><tr style="border:solid;"><td>20<br></td><td></td><td></td><td></td></tr>
<td>40<br></td><td></td><td></td><td></td></tr>
<td>60<br></td><td></td><td></td><td></td></tr>
<td>80<br></td><td></td><td></td><td></td></tr>
<td>120<br></td><td></td><td></td><td></td></tr>
<td>200<br></td><td></td><td></td><td></td></tr>
<td>400<br></td><td></td><td></td><td></td></tr>
<td>600<br></td><td></td><td></td><td></td></tr>
<td>1000<br></td><td></td><td></td><td></td></tr></table>

1. Quelle est la valeur maximale de la puissance fournie par la lampe? Quelles sont alors les valeurs de courant et de tension? Quelle est la resistance *idéale*?
2. Utiliser un [outil numérique - voir en bas de page](http://localhost:1313/docs/PC_1ere/energie/energie7/#traitement-num%C3%A9rique-d-une-serie-de-mesures) pour:
  * obtenir la courbe caractéristique intensité - tension
  * obtenir l'équation de sa caractéristique
2. Représentez l'allure de la courbe obtenue sur votre cahier.
3. Indiquez l'équation de la caractéristique intensité - tension.
4. Déterminer les valeur de la force électro motrice E de la pile, ainsi que sa resistance interne r.

Aide: Le modèle mathématique est:

$$U_{PN} = E - r.I$$

## Source réelle de tension continue (concerne la 1ere Spé Physique Chimie)
Un générateur de tension réel est constituée : 

* d'une source de tension idéale de force électromotrice (tension) noté E
* d'une resistance interne r


<figure>
<img src="../images/generateur.png" width = 80% alt="générateur de tension">
<figcaption>générateur réel</figcaption>
</figure>

Par définition, la tension délivrée par ce générateur branché entre les bornes P et N est : 

$$U_{PN} = E - r\times I$$

En effet, dans le circuit série complet : d'après la loi d'additivité des tensions : 

<div id="formule">
$$U_{NA} + U_{AP} + U_{PB} + U_{BC} + U_{CN} = 0$$
</div>

Soit : 
<div id="formule">
$$-U_{NA} = U\_{AP} + U\_{PB} + U\_{BC} + U\_{CN}$$
</div>

<div id="formule">
$$U_{AN} = U_{AP} + U_{PB} + U_{BC} + U_{CN}$$
</div>

<div id="formule">
$$E = r\times I + 0 + R\times I + 0$$
</div>

On met d'un côté de l'égalité tous les termes qui correspondent aux dipôles du générateur (encadré sur le schéma). Ce terme correpond à : U(PN)

$$U_{PN} = E - r\times I = R \times I$$

Ce qui revient à énoncer que la tension U(PN) aux bornes d'un générateur vaut : 


$$U_{PN} = E - r\times I$$


*Remarques :* 

* Pour un générateur de tension idéale, la tension U(PN) est égale à E, quelle que soit la valeur du courant I.
* Pour un générateur réel (non idéal), la tension délivrée par un générateur est décroissante avec I. 
* Une partie de la puissance chimique est dégradée par effet Joule. On la note P(J), pour *P(effet Joule)* Cette partie dégradée de l'énergie vaut alors : 

$$P_J = r \times I^2$$

**Bilan de puissance pour un générateur :** 
(voir livre de 1ere Spé Physique Chimie p 243)

# Traitement numérique d'une serie de mesures

On pourra utiliser le script suivant à recopier, et modifier dans un <a href="https://notebook.basthon.fr/" target=_blank>editeur python</a>:

```python
import matplotlib.pyplot as plt
import numpy as np
from scipy.optimize import curve_fit

#--------------------------------------------------
#création des listes de variables utilisées dans le programme
#--------------------------------------------------
intensite=[0,0.05,0.09,0.11,0.15,0.20]
tension=[4.1,3.5,3.2,3.0,2.5,2.1]

grandeurs = ['intensite','tension']


#variables utilisées dans la modélisation polynomiale standard
a=0
b=0
c=0
d=0

#---------------------------------------------
# modélisation
#---------------------------------------------
tension=np.asarray(tension)
intensite=np.asarray(intensite)


def fit_func(x,a,b):
    return a*x+b

#mise en place de l'outil curve fit (scipy)

params, mcov =curve_fit(fit_func,intensite,tension)
# params = coefficients retournés par le calcul de modélisation avec R2 minimal
# mcov = matrice de covariance, permet de quantifier la variation de chaque variable par rapport à chacune des autres
a = params[0]; b=params[1]

#-------------------------------------------------
#             partie graphique avec quadrillage
#-------------------------------------------------
# titre du graphique
plt.title('Caracteristique Intensité-Tension)')
# label et config des axes
plt.xlabel(grandeurs[0])
plt.ylabel(grandeurs[1])


# Customize the major grid
plt.grid(which='major', linestyle='-', linewidth='0.5', color='red')
plt.minorticks_on()
# Customize the minor grid
plt.grid(which='minor', linestyle=':', linewidth='0.2', color='black')
# Turn off the display of all ticks.
plt.tick_params(which='both', # Options for both major and minor ticks
                top='False', # turn off top ticks
                left='True', # turn off left ticks
                right='False',  # turn off right ticks
                bottom='True') # turn off bottom ticks


# Plot
plt.plot(intensite,tension,'o') # nuage de points de l'acquisition
plt.plot(intensite,fit_func(intensite,a,b),'g',linewidth=1) # courbe modelisee
equation = str(round(a,3))+" * Intensite + "+str(round(b,3))
plt.legend(["mesures",equation])
# modifier les axes APRES avoir positionné les points sinon l'echelle voulue
# n'est pas prise en compte

axes = plt.gca()
axes.set_xlim(left=0,right=max(intensite)*1.2,emit=False,auto=True)
axes.set_ylim(bottom=0,top=max(tension)*1.2,auto=True)

# affichage
plt.show()
```

<figure>
  <img src = "../images/pile_caract.png">
</figure>
