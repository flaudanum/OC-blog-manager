# Blog Manager

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. Le fichier `package-lock.json` a volontairement été retiré du dépôt Git par précaution de compatibilité inter-OS. Ainsi ce fichier sera reconstruit lors de l'installation du projet.

## Installation avec npm

Depuis un terminal, aller dans le répertoire racine du projet et exécuter la commande suivante:

```bash
npm install
```

## Lancer l'application en mode développement

Exécutez la commande `ng serve` (ou `ng serve --open`) puis ouvrez votre navigateur à l'adresse [http://localhost:4200/](http://localhost:4200/). Un rafraîchissement automatique de l'application se produira si vous modifiez un fichier source (à l'exception des `export` au sein des modules qui requièrent une recompilation complète).

## Documentation

Le commentaires de code suivent le format *typedoc*. Installer *typedoc* avec `npm` comme une dépendance de développement du projet:

```
npm install --save-dev typedoc
```

ou comme un package global (droits administrateur éventuellement requis):

```
npm install --global typedoc
```

Pour générer le site de documentation dans un répertoire `./docs` utiliser le CLI de typedoc:

```
typedoc --out ./docs
```
