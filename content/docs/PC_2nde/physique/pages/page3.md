---
Title : Ondes et signaux
---

# Sons et ultra sons
## Definitions
Un *son* est une onde mecanique qui se propage dans un milieu matériel. Sa vitesse dans l'air à 20°C: 340m/s. Certains sons sont *audibles*: ceux dont l'intensité sonore est suffisament élevée, et de frequence adaptée à la sensibilité de l'oreille: de 20Hz à 20 000Hz.

{{< img src="../images/page3_1.png" link="https://www.cochlea.org/entendre/champ-auditif-humain" caption="frequence audibles image issue du site cochlea.org" >}}


Les sons de fréquence supérieure à 20 kHz sont des *ultrasons*. Ils ont la particularité d'être plus directifs. Ce qui est utile pour l'analyse par la méthode d'echo.

## Echo-sonar
Principe: La mesure par *echolocalisation* permet de determiner la **distance** entre un emetteur-recepteur d'ondes ultra sonores, et l'objet (ou plutôt sa surface) reflechissant. La mesure consiste à mesurer le **temps** de transit aller-retour, puis de multiplier par la **vitesse** des ondes ultra sonores pour connaitre la distance de transit. La distance à l'objet est alors:

$$d = \tfrac{vitesse\times temps}{2}$$

Certains animaux tels que les chiens peuvent les entendre. D’autres émettent des ultrasons pour localiser un objet, tel que les baleines, les dauphins ou encore les chauves-souris.

{{< img src="../images/page3_2.png" caption="" >}}

**1910 :** Paul Langevin met au point les premiers sonars. Les ultrasons ont ainsi été utilisés durant la 1ère Guerre mondiale pour détecter les sous-marins ennemis.

**1970 :** les ultrasons sont utilisés en médecine, J.J. Wild et J. Reid les utilisent pour faire les premières images de coupes échographiques.

**aujourd'hui :** les applications sont nombreuses dans le domaine médical mais aussi industriel. Les ultras sons sont utilisés pour mesurer la vitesse d'ecoulement de suspensions liquides (traitement du signal US), mesurer les formes des organes, ... mais aussi pour detecter les fissures, deformations, ... Et enfin pour la detection d'obstacles (capteurs de stationnement logés dans les pare-chocs)

{{< img src="../images/page3_3.png" caption="position des emetteurs recepteurs sur le pare choc" >}}

> Application: l'onde ultra sonore met 1ms pour se reflechir sur l'obstacle. Quelle est la distance? (*vitesse ultra sons dans l'air à 20°C: 340m/s*)

# La lumière
## Definition
La *lumière est une onde électromagnétique* qui se propage dans le vide et les milieux transparents. Sa vitesse est de $3.10^8m/s$ dans le vide. On repère la partie du spectre lumineux visible par la longueur d'onde dans le vide $\lambda$. Celle-ci est comprise entre 400nm et 800nm pour la lumière visible.

{{< img src="../images/page3_4.png" caption="spectre de la lumière, visible et invisible" >}}

## Application au transport d'une information
L'onde lumineuse peut transporter de l'information selon le principe de *modulation*.

La modulation consiste à transporter le signal utile à l'aide d'un autre signal appelé porteuse, de fréquence plus élevée.


{{< img src="../images/page3_5.gif" caption="transport d'informations par une onde lumineuse" >}}


Cette information peut être de tout type, à condition d'avoir été *numérisée*: trame internet, texte, media, ... 

{{< img src="../images/page3_6.png" caption="exemple de modulation d'amplitude" >}}


Souvent, on ajoute des valeurs de contrôle pour s'assurer de l'intégrité des données à la reception.

## Localisation par satellite
voir la page [localisation GNNS - cours de SNT](/docs/SNT_2nde/pages/page18/geolocaliser/)
<!--
# signaux sonores
L'animation suivante permet de synthétiser un son à partir d'une fonction mathématique. On peut ajuster les paramètres, et écouter le son.
-->

