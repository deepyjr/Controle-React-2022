# Projet Estiam TodoList

## Contributeurs

Ce projet a été realisé par les contributeurs suivants

- Raphaël DA FONSECA
- William HERBIN
- Florian GILLET

## Présentation du projet

Le but de ce projet est de réaliser une Todolist via un CRUD (créer, lire, modifier et supprimer). Trois animations via ces trois méthodes différentes:

- CSS
- Class CSS
- librairie React

## Technologies utilisées

### React

React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.\
Version de React utilisée: 18.0.0
Plus d'information: [Voir le site React js](https://fr.reactjs.org/)

### Spring React (c'est la lib)

React-spring est une bibliotèque pour créer des animations.\
Version de Spring React utilisée: 9.4.4
Plus d'information: [Voir le site Spring React](https://react-spring.io/)

## Présentation des différentes animations

### PageCSS

#### Animation

<img src="imgDoc\g1.gif" alt="g1"/>

#### Code

Importation des modules nécésaires

```
import styled, { keyframes } from "styled-components";
```
Définition du "keyFrame" de l'animation, c'est-à-dire, définir le début et la fin de l'animation. Dans notre cas, nous définissons une rotation de 360 degrés.

```
  const rotate = keyframes`from { transform: rotate(0deg);}to {transform: rotate(360deg);}`; 
```

Définition des attributs pour avoir une balise animée. Deux attributs sont nécéssaires, la rotation et vitesse de la rotation.

```
  const InfiniteRoll = styled.div`
    animation: ${rotate} ${(time) => time.time}s linear infinite;
  `; 
```

Pour obtenir différentes vitesses d'animations, nous générons un nombre aléatoire grace à cette fonction:

```
  const genNumber = () => {
    return Math.floor(Math.random() * 100) / 100;
  };
```

Pour mettre en place l'animation

```
 {/* ANIMATION NO CLASS */}
          {animation === "no-class" &&
            Array.from(Array(30).keys()).map(() => {
              return (
                <InfiniteRoll time={genNumber().toString()}>
                  <p style={{ fontSize: "2em" }}>MY TODO LIST</p>
                </InfiniteRoll>
              );
            })}
```

### PageCSSClass

#### Animation

<img src="imgDoc\g2.gif" alt="g2"/>

#### Code

Définition du 'keyFrame':
```
@keyframes slidein {
    from {
      margin-left: 50%;
      transform: rotate(3600deg);
    }
  
    to {
      margin-left: 0%;
      transform: rotate(0deg);
    }
  }
```

Définition d'une classe CSS contenant la durée de l'animation et le KeyFrame.
```
.slide {
    animation-duration: 10s;
    animation-name: slidein;
}
```

Pour savoir si l'animation doit être déclenchée ou non, nous allons utiliser une condition ternière.
```
   <div
     className={
       props.animation === "class"
         ? "todo-item slide"
         : "todo-item"
     }
     key={index}
     // END ANIMATION CLASS
   >
```

Pour savoir, si l'animation doit être déclenchée, nous utilisons un props.\
Pour récupérer le props:

```
  const [animation] = useState(props.animation);
```

Pour avoir l'animation, il ne reste plus qu'a définir une balise avec l'attribut 'animation={"class"}'.

```
  <div>
    <TodoList animation={"class"}/>
  </div>
```

### PageLibReact

#### Animation

<img src="imgDoc\g3.gif" alt="g3"/>

#### Code

Pour créer cette animation, il faut commencer par importer deux éléments de react-spring.

```
import { useSpring, animated } from "react-spring";
```

Ensuite nous allons définir une configuration. Elle va nous permettre de déterminer la boucle et les deux couleurs. 'useSpring" est une ofnction qui permet d'animer des valeurs.

```
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })
```

Pour finir, nous créons une balise dit "animée" avec le style.

```
<animated.div style={styles}>{todo.text}</animated.div>
```

## Fonctionnalités

Quatre fonctionnalités ont été développées. Ces fonctonnalités permettent de créer, modifier et supprimer une tâche de la Todolist. Une autre fonctionnalité permet d'afficher toutes les tâches.

### Afficher

La fonctionnalité "afficher" permet d'afficher l'ensemble des tâches à faire.\
<img src="imgDoc\affichage1.PNG" alt="affichage"/>

### Créer

La fonctionnalité "créer" permet d'ajouter une tâche à la Todolist.\
<img src="imgDoc\addTODO.PNG" alt="img_creer"/>

Pour ajouter une tâche, il suffit de remplir le champs et d'appuyer sur le bouton "Add todo".\
Une fois la tâche ajoutée, elle apparaîtra au début de la Todolist.\
<img src="imgDoc\addTODO2.PNG" alt="img_creer2"/>

### Modifier

La fonctionnalité "modifier" permet de modifier une tâche.\
<img src="imgDoc\edit1.PNG" alt="edit1"/>

Pour modifier une tâche, il suffit d'appuyer sur le bouton "edit". Puis de remplir le champs et ensuite d'appuyer sur le bouton "update" .\
<img src="imgDoc\edit2.PNG" alt="edit2"/>\
Une fois la tâche modifiée, elle apparaîtra dans la Todolist.\
<img src="imgDoc\edit3.PNG" alt="edit3"/>

### Supprimer

La fonctionnalité "supprimer" permet de su^pprimer une tâche à la Todolist.\

Pour supprimer une tâche, il suffit d'appuyer sur le bouton "supprimer".\
<img src="imgDoc\delete1.png" alt="delete1"/>\
Une fois la tâche supprimée, elle disparaîtra de la Todolist.\
<img src="imgDoc\delete2.PNG" alt="delete2"/>



## Installation et lancement du projet

### Installation

Dans le dossier du projet, vous devez executer le commande suivante afin d'installer les différents modules.

```
npm update
npm install
```

### Lancement

Pour lancer l'application, vous devez executer la commande suivantes:

```
npm start
```
