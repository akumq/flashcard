# Flashcards 

Flashcards est une application web interactive permettant d'apprendre et de réviser divers sujets à l'aide de cartes mémoire en 3D. Les utilisateurs peuvent charger différentes cartes et les retourner pour voir les questions et les réponses.

## Fonctionnalités

- **Interface utilisateur intuitive** : Une interface utilisateur moderne et réactive.
- **Cartes mémoire en 3D** : Les cartes peuvent être retournées pour afficher les questions et les réponses.
- **Menu déroulant** : Un menu déroulant pour sélectionner différents cours et charger les cartes correspondantes.
- **Chargement aléatoire** : Chargement aléatoire des cartes pour une révision variée.

## Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge).

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/akumq/flashcard.git
   cd flashcard
   ```

2. **Ouvrir le fichier `index.html`** dans votre navigateur web.

## Structure du Projet

```
flashcard/
│
├── index.html
├── ressources/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   ├── flashcards/
│   │   ├── chinois-1.json
│   │   ├── chinois-2.json
│   │   └── ...
│   └── ...
└── README.md
```

## Utilisation

1. **Ouvrir l'application** : Ouvrez le fichier `index.html` dans votre navigateur web.
2. **Sélectionner un cours** : Cliquez sur l'icône du menu burger en haut à gauche pour ouvrir le menu déroulant et sélectionner un cours.
3. **Charger une carte** : Cliquez sur le bouton "Charger une Carte" pour charger une carte aléatoire du cours sélectionné.
4. **Retourner la carte** : Cliquez sur la carte pour la retourner et voir la réponse.

## Personnalisation

- **Ajouter de nouveaux cours** : Ajoutez de nouveaux fichiers JSON dans le dossier `ressources/flashcards/` en suivant le format existant. Assurez-vous de mettre à jour la liste des fichiers JSON dans `script.js`.
- **Modifier le style** : Modifiez le fichier `styles.css` pour personnaliser l'apparence de l'application.

## Exemple de Fichier JSON

```json
{
    "courseName": "CSS",
    "flashcards": [
        {
            "question": "Définir CSS",
            "answer": "Langage de style pour la mise en page et le design"
        },
        {
            "question": "Que signifie CSS ?",
            "answer": "Cascading Style Sheets"
        }
    ]
}
```

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forker le dépôt.
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`).
3. Committer vos modifications (`git commit -m 'Ajout de la nouvelle fonctionnalité'`).
4. Pusher vers la branche (`git push origin feature/nouvelle-fonctionnalite`).
5. Ouvrir une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENCE](LICENCE) pour plus de détails.

---

N'hésitez pas à personnaliser ce README en fonction de vos besoins spécifiques et des informations de votre projet.
