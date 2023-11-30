---
Title: direct css
---

# Direct css
La technique de direct-css est une manière originale de styliser le document, qui s'apparente à faire de la stylisation directe en inline).

L'idée est d'ajouter des valeurs à l'attribut class. Ces classes font référence au fichier *framework* en ligne. Voir pour plus d'infos [tailwindcss.com](https://tailwindcss.com/docs/utility-first).

Ainsi, pour réaliser le pop up suivant, il faudra de nombreuses lignes de script css:

{{< img src="../images/direct_css.png" >}}

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

Mais cela peut être remplacé par le script HTML minimum suivant. Sans écriture d'une seule ligne de css:

```html
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="chat.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
  ```

Pour démarrer, il faudra placer la ligne suivante dans le `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Ajouter un bouton:

```html
<button class="bg-sky-500 hover:bg-sky-700 ...">
  Save changes
</button>
```

ou avec plus de règles de style, et utilisant des pseudo-classes:

```html
<button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
```



