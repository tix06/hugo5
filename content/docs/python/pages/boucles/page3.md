---
Title: listes
bookShowToc: false
---

  
  <!--<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
 -->
  <style>
    .editor-box{
      width: 60%;
      display: block;
    }
    #output > div {
    font-family: 'monospace';
    background-color: #e5e5e5;
    border: 1px solid lightgray;
    /*border-top: 0;*/
    font-size: 0.875rem;
    padding: 0.5rem;
  
  }

  #output > div:first-child {
    border-top: 1px solid lightgray;
    display: block;
  }

  #output > div:nth-child(even) {
    border: 0;
  } 
</style>

<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
<py-env>
    - matplotlib
</py-env>

# Editeur Python
* L'**editeur** suivant se présente comme un **notebook**. Saisir une ou plusieurs lignes de code Python, puis appuyer simultanement sur *Majuscule(Shift)* + *Entrée* pour **executer le code**.

<div >
<py-repl id="my-repl" auto-generate="true"></py-repl>
</div>


# TP1 Listes
## Ex1: Elements d'une liste
Dans une cellule, saisir la ligne suivante:

```python
s = ['lundi', 'mardi',  'mercredi']
```

Puis tester chacune des propositions suivantes:

| proposition | résultat/commentaire |
|--- |--- |
| `s[0]` |  |
| `s[1]` |   |
| `s[2] = "jeudi"`<br>`s` |   |
| `s[4] = 'samedi' ` |  erreur de type: ... ... |
| `s[1:]` |    |


## Exercice
Energies en SPC

```python
t = [0,0.04,0.08,0.12,0.16,0.2,0.24]
v = [5.2,4.8,4.41,4.02,3.63,3.23,2.84]
```

