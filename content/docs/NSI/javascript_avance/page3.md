---
Title: Cheval au galop
---

# Animation d'un cheval au galop avec `requestAnimationFrame`

> **Niveau** : 1ère NSI  
> **Prérequis** : HTML/CSS (mise en page, centrage), JavaScript (tableaux, fonctions, modulo)  
> **Durée estimée** : 1h
> **Fichier complet**: [Lien](../cheval_animation.html), et {{< download link="/docs/NSI/javascript_avance/cheval_animation.html" hint="cheval_animation.html" caption="téléchargement" >}}
---

## 1. Objectif

Réaliser une animation fluide d'un cheval au galop en combinant :

- **HTML/CSS** : afficher et centrer une image à l'écran
- **JavaScript** : gérer une liste d'images et boucler dessus avec le modulo
- **`requestAnimationFrame`** : synchroniser l'animation avec le rafraîchissement de l'écran

---

## 2. Principe de l'animation par défilement d'images (sprite)

Un cheval au galop peut être animé en affichant successivement plusieurs images (*frames*), chacune représentant une phase du mouvement.

```
frame 0 → frame 1 → frame 2 → frame 3 → frame 0 → ...
```

On stocke les chemins vers ces images dans un **tableau JavaScript**, et on affiche l'une après l'autre en boucle.

---

## 3. HTML — Structure de la page

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Cheval au galop</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <img id="cheval" src="cheval_0.png" alt="Cheval au galop">
  <script src="animation.js"></script>
</body>
</html>
```

**Points clés :**
- Un seul élément `<img>` avec l'identifiant `cheval`.
- On ne crée **pas** plusieurs balises `<img>` : c'est JavaScript qui change la source.

---

## 4. CSS — Centrer l'image à l'écran

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #87CEEB; /* ciel bleu */
}

#cheval {
  width: 300px;
}
```

**Rappel Flexbox :**

| Propriété | Rôle |
|---|---|
| `display: flex` | Active le mode Flexbox sur le `<body>` |
| `justify-content: center` | Centre **horizontalement** |
| `align-items: center` | Centre **verticalement** |
| `height: 100vh` | Le body occupe toute la hauteur de la fenêtre |

---

## 5. JavaScript — L'animation

### 5.1 Le tableau des images

```javascript
const frames = [
  "cheval_0.png",
  "cheval_1.png",
  "cheval_2.png",
  "cheval_3.png",
  "cheval_4.png"
];
```

On regroupe tous les chemins dans un tableau. Modifier l'animation revient simplement à modifier ce tableau.

### 5.2 Le modulo pour boucler

Pour parcourir le tableau en boucle infinie, on utilise l'opérateur **modulo** (`%`) :

```javascript
let index = 0;

// À chaque étape :
index = (index + 1) % frames.length;
```

| `index` | `(index + 1) % 6` |
|---|---|
| 0 | 1 |
| 1 | 2 |
| 4 | 5 |
| 5 | **0** ← repart au début |

> **Propriété clé :** `n % longueur` reste toujours dans `[0, longueur - 1]`.

### 5.3 `requestAnimationFrame`

`requestAnimationFrame(callback)` demande au navigateur d'appeler `callback` **avant le prochain affichage à l'écran** (environ 60 fois par seconde).

C'est préférable à `setInterval` car :
- synchronisé avec l'écran (pas de saccades)
- mis en pause automatiquement si l'onglet est inactif (économie de ressources)

### 5.4 Contrôler la vitesse avec un compteur

60 appels par seconde, c'est trop rapide pour une animation de cheval. On n'avance dans le tableau qu'**une fois tous les N appels** :

```javascript
const img    = document.getElementById("cheval");
const frames = ["cheval_0.png","cheval_1.png","cheval_2.png",
                 "cheval_3.png","cheval_4.png","cheval_5.png"];

let index    = 0;
let compteur = 0;
const VITESSE = 8; // changer une frame toutes les 8 images écran

function animer() {
  compteur++;

  if (compteur % VITESSE === 0) {
    img.src = frames[index];
    index = (index + 1) % frames.length;
  }

  requestAnimationFrame(animer); // relance la boucle
}

requestAnimationFrame(animer); // démarre l'animation
```

---

## 6. Schéma de fonctionnement

```
requestAnimationFrame(animer)
        │
        ▼
   animer() appelée
        │
   compteur++
        │
   compteur % VITESSE === 0 ?
        │
   OUI ─┤─ img.src = frames[index]
        │   index = (index+1) % frames.length
        │
        └──────► requestAnimationFrame(animer)
                        │
                   (boucle infinie)
```

---

## 7. Code complet (en un seul fichier)

Voir le fichier **`cheval_animation.html`** fourni avec ce cours.

---

## 8. Pour aller plus loin

- **Déplacement horizontal** : modifier la propriété CSS `left` ou `transform: translateX(...)` à chaque frame pour faire traverser le cheval d'un bord à l'autre.
- **Plusieurs chevaux** : créer plusieurs éléments `<img>` avec des décalages de phase différents (index de départ différent).
- **Sprites CSS** : regrouper toutes les frames dans une seule image et utiliser `background-position` pour les afficher.

---

## 9. Résumé des notions mobilisées

| Notion | Utilisation |
|---|---|
| Tableau JS | Stocker les références des images |
| Modulo `%` | Boucler sur le tableau indéfiniment |
| `document.getElementById` | Accéder à l'élément `<img>` |
| `requestAnimationFrame` | Synchroniser l'animation avec l'écran |
| Flexbox CSS | Centrer l'image dans la page |
| `img.src` | Changer dynamiquement l'image affichée |
