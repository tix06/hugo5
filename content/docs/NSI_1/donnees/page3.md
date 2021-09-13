---
Title: TP2 bases en python
---

<div><h1>
    <label for="bloc1">Variables</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc1" class="visually-hidden">

    <div class="control-me">
      <p>On a vu dans le TP précédent qu&rsquo;il était possible de créer des objets avec la console python, par exemple des chaines de caractère, ou valeurs numériques.</p>

      <p>Mais si on veut les réutiliser, il va falloir les stocker dans des variables.</p>

      <h2 id="nommer-une-variable">Nommer une variable</h2>

      <p><strong>Variables</strong>: Une variable est un espace de stockage qui porte un nom. En python, on assigne une valeur à une variable en utilisant le symbole <code>=</code>.</p>

      <p><em>Exemple:</em> L&rsquo;instruction suivante stocke <code>Carl</code> dans la variable <code>mon_nom</code>.</p>
      <div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">mon_nom</span> <span style="color:#f92672">=</span> <span style="color:#111">Carl</span></code></pre></div>
      <p>Lorsque l&rsquo;on veut afficher le contenu d&rsquo;une variable, on met cette variable SANS les guillemets, en argument de la fonction <code>print</code> (entre les parenthèses):</p>
      <div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#111">mon_nom</span><span style="color:#111">)</span></code></pre></div>
      <p>Lorsque le programme arrive à cette instruction, il affiche:</p>

      <p><code>Carl</code></p>

      <p><em>Remarque sur le nommage:</em> Le nom d&rsquo;une variable contient des lettres et des chiffres. On peut choisir toute chaine de caractère pour nom de variable, de la simple lettre jusqu&rsquo;à la longue chaine de caractères (sans espaces, mais les <em>underscores sont autorisés</em>). Ne pas commencer par un chiffre:</p>

      <pre><code>n = 2020
      la_2e_meilleure_annee_de_ma_vie = 2020
      </code></pre>

      <h2 id="localiser-l-emplacement-mémoire">localiser l&rsquo;emplacement mémoire</h2>

      <p>Pour localiser l&rsquo;emplacement mémoire d&rsquo;une variable, utiliser la fonction <em>native</em> <code>id</code>.</p>

      <p>Utiliser un editeur python pour saisir les lignes suivantes:</p>
      <div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">a</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">5</span>
      <span style="color:#111">b</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">5</span>
      <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#111">id</span><span style="color:#111">(</span><span style="color:#111">a</span><span style="color:#111">))</span>
      <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#111">id</span><span style="color:#111">(</span><span style="color:#111">b</span><span style="color:#111">))</span></code></pre></div>
      <p>On peut vérifier que les 2 variables, a et b, pointent vers le même objet, l&rsquo;entier 5, grace à l&rsquo;adresse mémoire qui est identique.</p>

      <p>Par contre, si vous modifiez le contenu de l&rsquo;une de ces variables, vous devriez voir que l&rsquo;adresse n&rsquo;est plus la même. (à tester vous-même).</p>

      <h2 id="affectation-multiple">Affectation multiple</h2>

      <p>Il existe plusieurs façons en python d&rsquo;affecter un objet:</p>
      <div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">a</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">5</span>
      <span style="color:#111">b</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">10</span></code></pre></div>
      <p>Ces lignes sont équivalents à l&rsquo;affectation multiple:</p>
      <div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">a</span><span style="color:#111">,</span> <span style="color:#111">b</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">5</span><span style="color:#111">,</span> <span style="color:#ae81ff">10</span></code></pre></div>
      


      
    </div>
</div>

<div><h1>
    <label for="bloc2">Opérations logiques (True/False)</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc2" class="visually-hidden">

    <div class="control-me">


<h2 id="opérateurs-d-ordre">Opérateurs d&rsquo;ordre</h2>

<p>En reprenant l&rsquo;affectation multiple vue plus haut, tester les opérations logiques:</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">a</span><span style="color:#111">,</span> <span style="color:#111">b</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">5</span><span style="color:#111">,</span> <span style="color:#ae81ff">10</span>
<span style="color:#111">a</span> <span style="color:#f92672">==</span> <span style="color:#111">b</span></code></pre></div>
<p>Puis tester les opérations:</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">a</span> <span style="color:#f92672">&lt;</span> <span style="color:#111">b</span>
<span style="color:#111">a</span> <span style="color:#f92672">&gt;</span> <span style="color:#111">b</span>
<span style="color:#111">a</span> <span style="color:#f92672">&gt;=</span> <span style="color:#111">b</span>
<span style="color:#111">a</span> <span style="color:#f92672">!=</span> <span style="color:#111">b</span></code></pre></div>
<p>Ces expressions renvoient <code>True</code> ou <code>False</code>. Ce sont des opérations logiques.</p>

<p><em>Remarque:</em> Si vous utilisez un notebook ipython, seul le résultat de la dernière ligne de la cellule est affiché.</p>

<p><strong>Question</strong> Quels sont les opérateurs: <em>supérieur à, inferieur à, égal à, différent de, supérieur ou égal à</em>?</p>

<h2 id="opérateurs-and-or">Opérateurs AND, OR</h2>

<p>Plusieurs expressions logiques peuvent être combinées à l&rsquo;aide des opérateurs AND, OR.</p>

<p>Lorsque 2 expressions logiques sont reliées avec AND, cela renvoie True si et seulement si chacune des 2 expressions est evaluée à <code>True</code>.</p>

<p>Avec OR, il suffit que l&rsquo;une d&rsquo;elles soit évaluée à <code>True</code>.</p>

<p><em>Tester l&rsquo;exemple suivant:</em></p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">a</span><span style="color:#111">,</span> <span style="color:#111">b</span><span style="color:#111">,</span> <span style="color:#111">c</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">5</span><span style="color:#111">,</span> <span style="color:#ae81ff">10</span><span style="color:#111">,</span> <span style="color:#ae81ff">10</span>
<span style="color:#111">a</span> <span style="color:#f92672">==</span> <span style="color:#111">b</span> <span style="color:#111">OR</span> <span style="color:#111">b</span> <span style="color:#f92672">==</span> <span style="color:#111">c</span></code></pre></div>
 

</div>
</div>


<div><h1>
    <label for="bloc3">Boucle bornée</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc3" class="visually-hidden">

    <div class="control-me">
      <h2 id="principe">Principe</h2>

<p>Une boucle bornée permet de répéter un élément de code un nombre fixe de fois.</p>

<p>Pour repeter par exemple 4 fois un bloc de code, on utilise l&rsquo;instruction: <br>
<code>for &lt;variable&gt; in range(4):</code></p>

<p>Ce bloc de code est indenté, sous l&rsquo;instruction qui commence par <code>for</code>.</p>

<p>A chaque itération, i est incrementé.</p>

<p><em>Exemple</em>:</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">for</span> <span style="color:#111">i</span> <span style="color:#f92672">in</span> <span style="color:#111">range</span><span style="color:#111">(</span><span style="color:#ae81ff">4</span><span style="color:#111">):</span>
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;le compteur i a pour valeur:&#39;</span><span style="color:#111">)</span>
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#111">i</span><span style="color:#111">)</span>
<span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;Il termine donc avec i = &#39;</span> <span style="color:#f92672">+</span> <span style="color:#111">str</span><span style="color:#111">(</span><span style="color:#111">i</span><span style="color:#111">))</span></code></pre></div>
<h2 id="exercice-1">Exercice 1</h2>

<p>Ecrire un programme qui affiche la table de multiplication par 7.</p>

<h2 id="exercice-2">Exercice 2</h2>

<p>Ecrire un programme qui réalise la multiplication de 1024 par 16, en n&rsquo;utilisant que des additions (par de *): adapter pour cela l&rsquo;algorithme vu en classe.</p>


</div>
</div>

<div><h1>
    <label for="bloc4">Boucle non bornée</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
    
    <input type="checkbox" id="bloc4" class="visually-hidden">

    <div class="control-me">
      <h2 id="principe-1">Principe</h2>

<p>Une boucle non bornée permet de répéter un élément de code un nombre à priori inconnu de fois.</p>

<p>On écrit l&rsquo;instruction:  <br> <code>while &lt;condition&gt;:</code></p>

<p>Le bloc de code est indenté sous cette première ligne.</p>

<p>Cette boucle repète l&rsquo;execution d&rsquo;un bloc de code, <em>tant que</em> la <code>&lt;condition&gt;</code> est evaluée à <code>True</code>.</p>

<p><em>Exemple:</em></p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">r</span> <span style="color:#f92672">=</span> <span style="color:#ae81ff">10</span>
<span style="color:#00a8c8">while</span> <span style="color:#111">r</span> <span style="color:#f92672">&gt;</span> <span style="color:#ae81ff">0</span><span style="color:#111">:</span>
  <span style="color:#111">r</span> <span style="color:#f92672">=</span> <span style="color:#111">r</span> <span style="color:#f92672">-</span> <span style="color:#ae81ff">3</span>
<span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;à la fin du programme, r vaut &#39;</span> <span style="color:#f92672">+</span> <span style="color:#111">str</span><span style="color:#111">(</span><span style="color:#111">r</span><span style="color:#111">))</span></code></pre></div>
<h2 id="exercice">Exercice</h2>

<p>Adapter l&rsquo;algorithme vu en classe pour faire la division entière de 39 par 8. Vous ne devrez utiliser que la soustraction comme opérateur.</p>

</div>
</div>

<div><h1>
    <label for="bloc5">Expression conditionnelle</label><span class="derouler"> <i>(cliquer pour derouler)</i></span></h1>
     <input type="checkbox" id="bloc5" class="visually-hidden">

    <div class="control-me">
<h2 id="principe-2">Principe</h2>

<p><em>Définition :</em> Une <em>instruction conditionnelle</em> vérifie si une certaine condition est vraie avant d&rsquo;executer son code:</p>

<pre><code>if instruction_conditionnelle : 
  code_à_executer
</code></pre>

<p><em>Exemple :</em></p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">if</span> <span style="color:#111">prix_essence</span> <span style="color:#f92672">&gt;</span> <span style="color:#ae81ff">1.8</span><span style="color:#111">:</span>
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;Trop cher&#39;</span><span style="color:#111">)</span></code></pre></div>
<h2 id="les-blocs-du-programme">Les blocs du programme</h2>

<p>En Python, on utilise l&rsquo;indentation (le retrait de la ligne) pour rendre compte des blocs de code.</p>

<figure>
  <img src="../images/pybloc1.png" alt="pybloc et indentation">
  <figcaption>de pybloc au script python</figcaption>
</figure>

<p>Le bloc de code à executer peut contenir plusieurs lignes, à condition de respecter l&rsquo;indentation.</p>

<h2 id="l-alternative-if-else">L&rsquo;alternative <code>if - else</code></h2>

<p>Une instruction <code>if - else</code> contient une instruction <code>if</code> qui s&rsquo;execute si la condition est <code>True</code> et une clause <code>else</code> qui s&rsquo;execute si la condition est <code>False</code>.</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">if</span> <span style="color:#111">hauteur_plant</span> <span style="color:#f92672">&lt;</span> <span style="color:#ae81ff">3</span> <span style="color:#111">:</span> 
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;laisser le plant dans la serre&#39;</span><span style="color:#111">)</span>
<span style="color:#00a8c8">else</span> <span style="color:#111">:</span> 
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;la mettre dehors&#39;</span><span style="color:#111">)</span></code></pre></div>
<p>Un bloc <code>if - elif - else</code> comprend une premiere instruction <code>if</code>, puis une suite de conditions de tests <code>elif</code> si le premier test echoue, puis un bloc <code>else</code> qui s&rsquo;execute si tous les autres tests échouent.</p>

<p>Même s&rsquo;il n&rsquo;est pas obligatoire, il est fortement recommandé de finir une série de conditions <code>elif</code> par le bloc <code>else</code>.</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#00a8c8">if</span> <span style="color:#111">hauteur_plant</span> <span style="color:#f92672">&lt;</span> <span style="color:#ae81ff">3</span> <span style="color:#111">:</span> 
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;laisser le plant dans la serre&#39;</span><span style="color:#111">)</span>
<span style="color:#00a8c8">elif</span> <span style="color:#111">hauteur_plant</span> <span style="color:#f92672">&lt;</span> <span style="color:#ae81ff">15</span> <span style="color:#111">:</span> 
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;la mettre dehors&#39;</span><span style="color:#111">)</span>
<span style="color:#00a8c8">else</span> <span style="color:#111">:</span> 
  <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;Pret pour la recolte&#39;</span><span style="color:#111">)</span></code></pre></div>
<h2 id="exercice-1-1">Exercice 1</h2>

<p>Compléter (et tester) le programme suivant qui demande votre age (fonction <code>input</code>), et vous laisse entrer en discothèque si vous avez 18 ans:</p>
<div class="highlight"><pre style="color:#272822;background-color:#fafafa;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-python" data-lang="python"><span style="color:#111">age</span> <span style="color:#f92672">=</span> <span style="color:#111">input</span><span style="color:#111">(</span><span style="color:#d88200">&#39;Quel est votre age : &#39;</span><span style="color:#111">)</span>
<span style="color:#00a8c8">if</span> <span style="color:#111">int</span><span style="color:#111">(</span><span style="color:#111">age</span><span style="color:#111">)</span> <span style="color:#f92672">...</span><span style="color:#111">:</span>
    <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;...&#39;</span><span style="color:#111">)</span>
<span style="color:#00a8c8">else</span><span style="color:#111">:</span>
    <span style="color:#00a8c8">print</span><span style="color:#111">(</span><span style="color:#d88200">&#39;...&#39;</span><span style="color:#111">)</span></code></pre></div>
<h2 id="exercice-2-1">Exercice 2</h2>

<p>Pour la rentrée 2021, les règles sanitaires suivantes s&rsquo;appliquent dans les établissement scolaires:</p>

<p><em>les élèves non-vaccinés subiront des restrictions plus importantes que les autres. Au premier cas de Covid identifié dans une classe, les cas-contacts non-vaccinés devront s’isoler pendant 7 jours et suivre les cours à distance. Les élèves vaccinés qui seraient cas-contact pourront, eux, venir en classe.</em></p>

<p>Réaliser un programme qui indique ce que l&rsquo;élève doit faire, selon sa situation. Les variables utilisées auront pour valeur 0 ou 1. Par exemple, on pourra utiliser une variable appelée <code>cas_contact</code> qui vaudrait 1 si l&rsquo;élève est cas contact, 0 sinon.</p>

</div>
</div>





