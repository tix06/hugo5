---
Title: Cinématique (cours)
---

# Cinematique
La cinématique, c'est l'étude du mouvement à partir des positions. On y définit la position, la vitesse, et l'accélération au cours du temps.

# Etude dans un repère cartésien
## Référentiel
> Definition: C'est l'espace, muni d'un repère, dans lequel on étudie un mouvement.

*Quelques référentiels particuliers:*

| nom | centré sur | axes du repère | On y étudie ...|
|--- |--- |--- |--- |
| Héliocentrique | Soleil | Dirigés vers des étoiles lointaines | mouvement des objets du système Solaire (planètes...). La Terre fait un tour en 365j dans le ref Héliocentrique|
| Géocentrique | Terre | Dirigés vers des étoiles lointaines | mouvement des satellites de la Terre. La Terre fait un tour sur elle-même en 24h dans ce ref. |
| Terrestre | Terre | Fixés avec la Terre | mouvement des objets à la surface de la Terre. Aussi appelé le référentiel du laboratoire. |

Dans un référentiel cartésien, le réféntiel est muni d'un repère (0,x,y,z).

<figure><div>
  <img src="../images/cartesien.png">
<figcaption>exemple de repère cartésien (O,x,y)</figcaption></div>
</figure>

Les axes sont supportés par les vecteurs $\overrightarrow{i}$ et $\overrightarrow{j}$

## Trajectoire
> Definition: C'est l'ensemble des points qui représentent le mouvement (M<sub>1</sub>, M<sub>2</sub>, ... M<sub>n</sub>).

On considère le mouvement comme une succession continue de petits mouvements. Les positions sont alors marquées de manière discrète (discrétisation du temps), espacés avec des intervalles de temps égaux, &#x394;t.

<figure><div>
  <img src="../images/cartesien2.png">
<figcaption>exemple de trajectoire dans le<br>repère cartésien (O,x,y)</figcaption></div>
</figure>

## Coordonnées d'un point
Un point M<sub>n</sub> est alors repéré par ses coodonnées $M\binom{x_n}{y_n}$, ou bien grâce au vecteur position $\overrightarrow{OM}\binom{x_n}{y_n}$

## Coordonnées du vecteur vitesse
> Définition: la vitesse est le taux de variation de la position, en fonction du temps. Il s'agit d'un vecteur. Au moment n, c'est le vecteur $\overrightarrow{v_n}$. Ce vecteur est *tangent* à la trajectoire.

Comme: $\overrightarrow{v}\binom{v_x}{v_y}$, on a:

$$\overrightarrow{v_n} \begin{pmatrix}
 vx_n\\\vy_n
\end{pmatrix}$$




* Au *moment n*: en une durée &#x394;t, la coordonnée x<sub>n</sub> varie de x<sub>n</sub> à x<sub>n+1</sub>. Alors v<sub>xn</sub> représente le taux de variation de cette coordonnée selon l'axe des x.
* Au *moment n*: en une durée &#x394;t, la coordonnée y<sub>n</sub> varie de y<sub>n</sub> à y<sub>n+1</sub>. D'où la loi sur v<sub>yn</sub>:


<figure><div>
  <img src="../images/equation1.svg">
</div>
</figure>

On a alors des suites de fonctions v<sub>xn</sub> et v<sub>yn</sub>. On peut utiliser un logiciel tableur ou un programme (en langage python) pour calculer ces valeurs: Voir [TP2](/docs/PC_1ere/meca/page2/).

<figure>
  <img src="../images/dataframe.png">
  <figcaption>Exemple avec données obtenues<br>
  avec un logiciel de pointage</figcaption>
</figure>



Et on peut tracer le vecteur $\overrightarrow{v_n}$ à partir de ses coordonnées, v<sub>xn</sub> et v<sub>yn</sub>, de sommet M<sub>n</sub>, directement sur la trajectoire:

<figure>
  <img src="../images/cartesien3.png">
  <figcaption>Exemple avec <b>v<sub>1</sub></b></figcaption>
</figure>



## Coordonnées du vecteur accélération
> Définition: l'accélération est le taux de variation de la vitesse, en fonction du temps. Il s'agit d'un vecteur. Au moment n, c'est le vecteur $\overrightarrow{a_n}$

* Au *moment n*: en une durée &#x394;t, la vitesse v<sub>xn</sub> varie de v<sub>xn</sub> à v<sub>x n+1</sub>. Alors a<sub>xn</sub> représente le taux de variation de cette coordonnée selon l'axe des x.
* Au *moment n*: en une durée &#x394;t, la vitesse v<sub>yn</sub> varie de v<sub>yn</sub> à v<sub>y n+1</sub>. D'où la loi sur a<sub>yn</sub>:

<figure><div>
  <img src="../images/equation2.svg">
</div>
</figure>

* Pour un mouvement accéléré dans la direction (Ox), a<sub>x</sub> est positif, et la vitesse v<sub>x</sub> augmente au cours du temps.
* Pour un mouvement décéléré dans la direction (Ox), a<sub>x</sub> est négatif, et la vitesse v<sub>x</sub> diminue au cours du temps.

# Etude par une méthode géométrique
On peut ignorer les coordonnées de position, et repérer les directions avec des vecteurs unitaires $\overrightarrow{u_1}$, $\overrightarrow{u_2}$, etc...

Alors le déplacement de M<sub>1</sub> vers M<sub>2</sub> est repéré par le vecteur $\overrightarrow{M_1M_2}$ tel que:

$$\overrightarrow{M_1M_2} = M_1M_2.\overrightarrow{u_1}$$

<figure><div>
  <img src="../images/geom2.png">
</div>
</figure>

## Vitesse
La definition de la vitesse, au point M<sub>n</sub>, sera prise comme le taux de variation de la position, entre les points M<sub>n</sub> et M<sub>n+1</sub>:


<figure><div>
  <img src="../images/equation6.svg">
</div>
</figure>

<!--
$$\overrightarrow{v_n} = \tfrac{\overrightarrow{M\textrm{n} M\textrm{n+1}}}{\Delta t}$$
-->

Mais, pour des mouvements courbes, on peut prendre la vitesse en M<sub>n+1</sub> comme le taux de variation de la position, entre les points M<sub>n</sub> et M<sub>n+2</sub>. La **durée** est alors de **2.&#x394;t**. Cela donne:

<figure><div>
  <img src="../images/equation5.svg">
</div>
</figure>

<!--
$$\overrightarrow{v_\textrm{n+1}} = \tfrac{\overrightarrow{M\textrm{n} M\textrm{n+2}}}{2.\Delta t}$$
-->

*En pratique:* 
On mesure le segment M<sub>1</sub>M<sub>2</sub>. On divise par &#x394;t. 

<figure><div>
  <img src="../images/geom1.png">
</div>
</figure>

Le vecteur $\overrightarrow{v_1}$ est alors porté par la droite (M<sub>1</sub>M<sub>2</sub>), de sens 1 vers 2. La longueur du vecteur depend de la valeur calculée, et de l'echelle utilisée (1cm <-> ... m/s).

<figure><div>
  <img src="../images/geom3.png">
</div>
</figure>

## Accélération
L'accélération au point M<sub>n</sub>, sera prise comme le taux de variation de la *vitesse*, entre les points M<sub>n</sub> et M<sub>n+1</sub>:

<figure><div>
  <img src="../images/equation4.svg">
</div>
</figure>

<!--
$$\overrightarrow{a_n} = \tfrac{\overrightarrow{v\textrm{n+1}}-\overrightarrow{v_n}}{\Delta t}$$
-->

Mais là aussi, pour des mouvements courbes, on peut avoir:

<figure><div>
  <img src="../images/equation3.svg">
</div>
</figure>

<!--
$$\overrightarrow{a_{n+1}} = \tfrac{\overrightarrow{v_{n+2}}-\overrightarrow{v_n}}{2.\Delta t}$$
-->

*En pratique:*
En prenant la première définition. Au point M<sub>1</sub>:

<figure><div>
  <img src="../images/geom4.png">
</div>
</figure>

On fait la somme géométrique des vecteurs $\overrightarrow{v_2}$ et -$\overrightarrow{v_1}$. On obtient alors le vecteur $\overrightarrow{\Delta v_1}$. (à gauche sur l'image). 

Pour tracer les vecteur $\overrightarrow{a_1}$, on utilise alors l'echelle proposée sur le document *(1cm <-> ...m/s<sup>2</sup>)*: à droite sur le schéma.

<figure><div>
  <img src="../images/geom5.png">
  <figcaption>à gauche: vecteur <b>&#x394;v</b> / à droite: vecteur <b>a</b></figcaption>
</div>
</figure>

On reporte alors ce vecteur au point M<sub>1</sub> :

<figure><div>
  <img src="../images/geom6.png">
</div>
</figure>

