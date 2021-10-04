---
Title: 1er projet Python
---
<p class="rubrik">Choisissez l'un des projets suivants. Vous utiliserez comme support un <b><i>notebook</i></b> pour repondre aux questions. <br>
Renommez ce fichier <code>projet_votre_nom</code>.<br>Les cellules du notebook serviront à écrire du code python mais aussi à commenter, préciser la question, et expliquer votre code. Les cellules prévues pour les commentaires seront écrites en syntaxe markdown</p>

<p class="rubrik">En syntaxe markdown, 
  <ul><li>le `#` en debut de ligne pour un titre de niveau 1</li>
    <li>`##` pour un titre de niveau inférieur</li>
    <li>...</li>
  </ul>
</p>


<div><h1>
    <label for="bloc1">Projet 1: Rire aléatoire</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc1" class="visually-hidden">

    <div class="control-me">

<p>La fonction <code>random</code> de la bibliothèque <code>random</code> produit un nombre aleatoire entre 0 et 1.</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#f92672">&gt;</span> <span style="color:#f92672">from</span> <span style="color:#111">random</span> <span style="color:#f92672">import</span> <span style="color:#111">random</span>
<span style="color:#f92672">&gt;</span> <span style="color:#111">random</span><span style="color:#111">()</span>

<span style="color:#ae81ff">0.8324575544825609</span></code></pre></div>
<p>On peut egalement demander un entier aleatoire entre 0 et 100 avec la fonction <code>int</code>:</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#f92672">&gt;</span> <span style="color:#111">int</span><span style="color:#111">(</span><span style="color:#ae81ff">100</span><span style="color:#f92672">*</span><span style="color:#111">random</span><span style="color:#111">())</span>

<span style="color:#ae81ff">62</span></code></pre></div>
<ol>
<li>Ecrire un programme qui affiche de manière aléatoire la chaine de phonèmes &ldquo;Ha&rdquo;, &ldquo;HaHa&rdquo;, &ldquo;HaHaHaHa&rdquo; ou &ldquo;HaHaHaHaHa&rdquo;, avec &ldquo;Ha&rdquo; répété un nombre aléatoire de fois, entre 1 et 10.</li>
<li>On veut maintenant que le programme affiche un rire aléatoire pouvant aussi comporter des séquences de &ldquo;Ho&rdquo;, comme par exemple: &ldquo;HaHaHaHaHoHoHoHoHaHaHa&hellip;&rdquo;. La séquence devra avoir une longueur inférieure à 50 phonèmes.</li>
</ol>
</div>
</div>

<div><h1>
    <label for="bloc2">Projet 2: Calendrier</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc2" class="visually-hidden">

    <div class="control-me">
<p><strong>1.</strong> Ecrire un programme qui indique si une année <strong>a</strong> est bissextile. Une année est bissextile si elle est divisible par 4.</p>

<p><strong>2.</strong> Compléter le programme pour calculer le nombre de jours du mois <strong>m</strong>. <strong>m</strong> étant un entier compris entre 1 et 12. De janvier à juillet, les mois impairs ont 31 jours, les autres 30. Sauf le mois de fevrier a 29 ou 28 selon que l&rsquo;année est bissextile ou non. Pour les autres mois, du mois d&rsquo;aout à décembre c&rsquo;est l&rsquo;inverse (31 jours pour les <strong>m</strong> pairs).</p>

<p><strong>3.</strong> Ecrire une fonction <code>jour_semaine</code> qui détermine le jour de la semaine à une date donnée. On représente les jours par les nombres 0 = lundi, 1 = mardi, &hellip; 6 = dimanche.</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">def</span> <span style="color:#75af00">jour_semaine</span><span style="color:#111">(</span><span style="color:#111">jour</span><span style="color:#111">,</span><span style="color:#111">mois</span><span style="color:#111">,</span><span style="color:#111">annee</span><span style="color:#111">,</span><span style="color:#111">jour0</span><span style="color:#111">):</span>
  <span style="color:#d88200">&#34;&#34;&#34;retourne le jour de la semaine à une 
</span><span style="color:#d88200">  date donnée. jour0 est le code du premier
</span><span style="color:#d88200">  jour de l&#39;année&#34;&#34;&#34;</span></code></pre></div>
<p><strong>4.</strong> Vérifier que le 14 juillet 2022 tombe un jeudi.</p>

</div>
</div>

<div><h1>
    <label for="bloc3">Projet 3: Fonction sin</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc3" class="visually-hidden">

    <div class="control-me">

<p><strong>1.</strong> Ecrire un programme qui utilise une boucle pour afficher les valeurs de la fonction <code>sin</code> pour <code>x</code> entre 0 et &#960;
<br>On découpera l&rsquo;intervale [0; &#960;] de façon à afficher 15 valeurs de <code>sin(x)</code>.
<br>Pour utiliser la fonction <code>sin</code>, il faudra l&rsquo;importer avec la librairie math:</p>

<p><em>Exemple d&rsquo;import de la fonction sin et de la constante PI en console:</em></p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#f92672">&gt;</span> <span style="color:#f92672">from</span> <span style="color:#111">math</span> <span style="color:#f92672">import</span> <span style="color:#111">sin</span><span style="color:#111">,</span><span style="color:#111">pi</span>
<span style="color:#f92672">&gt;</span> <span style="color:#111">sin</span><span style="color:#111">(</span><span style="color:#111">pi</span><span style="color:#f92672">/</span><span style="color:#ae81ff">2</span><span style="color:#111">)</span>

<span style="color:#ae81ff">1.0</span></code></pre></div>
<p><em>Exemple de valeurs obtenue pour sin(x), où x est dans [0; &#960;]</em></p>

<pre><code>0.0
0.20791169081775931
0.40673664307580015
0.5877852522924731
0.7431448254773941
0.8660254037844386
0.9510565162951535
0.9945218953682733
0.9945218953682734
0.9510565162951536
0.8660254037844388
0.7431448254773945
0.5877852522924732
0.40673664307580004
0.2079116908177593
5.66553889764798e-16
</code></pre>

<p><strong>2.</strong> Pour afficher le graphe de la fonction <code>sin</code>, on peut remplacer chaque valeur calculée précédement par une barre horizontale de longueur proportionnelle à sa valeur.<br>
On pourra par exemple multiplier le résultat de <code>sin(x)</code> par 30, et utiliser la fonction <code>int</code> pour transformer le nombre en entier, afin d&rsquo;afficher un nombre de barres entre 0 et 30: <code>int(30 * sin(x))</code>
<br>Utiliser le programme pour afficher un graphique qui aura l&rsquo;allure suivante:</p>

<pre><code>
=====
===========
================
=====================
========================
===========================
============================
============================
===========================
========================
=====================
================
===========
=====
</code></pre>

<p><strong>3.</strong> <em>(difficile)</em> Modifier le programme pour afficher maintenant la courbe entière de <code>sin</code> sur une période entière, c&rsquo;est à dire pour x compris dans l&rsquo;intervale [0, 2&#960;]</p>

<pre><code>                              ======
                              ============
                              =================
                              ======================
                              =========================
                              ============================
                              =============================
                              =============================
                              ============================
                              =========================
                              ======================
                              =================
                              ============
                              ======
                              
                        ======
                  ============
             =================
        ======================
     =========================
  ============================
 =============================
 =============================
  ============================
     =========================
        ======================
             =================
                  ============
                        ======
</code></pre>

</div>
</div>


<div><h1>
    <label for="bloc4">Projet 4: Combinaisons et jeu de hasard</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc4" class="visually-hidden">

    <div class="control-me">

<p><strong>1.</strong> Ecrire un programme qui, étant donné un nombre entre 2 et 12, affiche toutes les combinaisons possibles permettant d&rsquo;obtenir ce nombre avec 2 dés.</p>

<p>Par exemple, pour obtenir 7, il pourrait afficher:</p>

<pre><code>'1 ET 6 , 2 ET 5 , 3 ET 4 , 4 ET 3 , 5 ET 2 , 6 ET 1 , '
</code></pre>

<p><em>Aide:</em> Pour faire une boucle bornée, avec un variant qui va de 1 à 6, on peut faire:</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">for</span> <span style="color:#111">i</span> <span style="color:#f92672">in</span> <span style="color:#111">range</span><span style="color:#111">(</span><span style="color:#ae81ff">1</span><span style="color:#111">,</span><span style="color:#ae81ff">7</span><span style="color:#111">):</span>
  <span style="color:#f92672">...</span></code></pre></div>
<p><strong>2.</strong> Etendre ce programme pour afficher, pour chaque nombre entre 2 et 12, toutes les combinaisons possibles permettant d&rsquo;obtenir ce nombre avec les 2 dés.</p>

<p>Par exemple:</p>

<pre><code>Pour obtenir 2, on peut faire 1 ET 1 , 
Pour obtenir 3, on peut faire 1 ET 2 , 2 ET 1 , 
Pour obtenir 4, on peut faire 1 ET 3 , 2 ET 2 , 3 ET 1 , 
Pour obtenir 5, on peut faire 1 ET 4 , 2 ET 3 , 3 ET 2 , 4 ET 1 , 
Pour obtenir 6, on peut faire 1 ET 5 , 2 ET 4 , 3 ET 3 , 4 ET 2 , 5 ET 1 , 
Pour obtenir 7, on peut faire 1 ET 6 , 2 ET 5 , 3 ET 4 , 4 ET 3 , 5 ET 2 , 6 ET 1 , 
Pour obtenir 8, on peut faire 2 ET 6 , 3 ET 5 , 4 ET 4 , 5 ET 3 , 6 ET 2 , 
Pour obtenir 9, on peut faire 3 ET 6 , 4 ET 5 , 5 ET 4 , 6 ET 3 , 
Pour obtenir 10, on peut faire 4 ET 6 , 5 ET 5 , 6 ET 4 , 
Pour obtenir 11, on peut faire 5 ET 6 , 6 ET 5 , 
Pour obtenir 12, on peut faire 6 ET 6 ,
</code></pre>

<p><strong>3.</strong> Modifier le programme pour faire la même chose avec 3 dés.</p>
</div>
</div>

<p class="rubrik">Pour rendre votre projet: Copier-coller votre fichier `projet.pynb` dans le dossier <i>devoirs/tixidor</i> de vos documents. Ce dossier ne devra contenir que le seul fichier à rendre.</p> 