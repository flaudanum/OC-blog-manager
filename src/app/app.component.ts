import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // posts = [
  //   new Post(
  //     "La Californie veut imposer plus de femmes dans les conseils d’administration",
  //     "Le gouverneur de la sixième puissance économique mondiale, dont la croissance repose notamment sur les entreprises de la Silicon Valley, a signé un texte obligeant les sociétés cotées dont le siège social est basé en Californie à nommer au moins une femme dans leur conseil d'administration d'ici à la fin de l'année 2019. Un premier pas vers une Silicon Valley plus paritaire ?"
  //   ),
  //   new Post(
  //     "Contrôler le temps d’écran, c’est se tromper de problème",
  //     "Savoir que je passe 3 heures et 12 minutes par jour sur mon téléphone a-t-il une utilité quelconque ? La question peut se poser pour des millions d’utilisateurs, invités désormais, s’il détiennent un iPhone, à contrôler leur « temps d’écran » (depuis la mi-septembre et la mise à jour iOS12, un décompte est activé à chaque déverrouillage). Mais la pertinence de tels outils divise également les designers, ceux qui conçoivent les applications, sites et réseaux sociaux sur lesquels nous passons tant de temps. Le temps passé est-il l'essentiel ? Par ailleurs, a-t-on besoin, pour empêcher la conception d’applications jugées « addictives », d'une loi européenne contraignante ?"
  //   ),
  //   new Post(
  //     "Vous pourrez bientôt choisir la fin d’un épisode de Black Mirror",
  //     "Netflix s’apprête à développer une offre « interactive ». D’après Bloomberg, le service de vidéo à la demande proposera bientôt un épisode de la série Black Mirror contenant plusieurs scénarios possibles, laissant le choix aux spectateurs de regarder celui qu’ils veulent. Des adaptations de jeux vidéo sous une forme similaire sont également prévues."
  //   )
  // ];

  constructor() {
    const config = {
      apiKey: "AIzaSyBrbfdmz5eukwJSR3KPbUh8_wMKx2zS9-Q",
      authDomain: "blog-manager-13f12.firebaseapp.com",
      databaseURL: "https://blog-manager-13f12.firebaseio.com",
      projectId: "blog-manager-13f12",
      storageBucket: "blog-manager-13f12.appspot.com",
      messagingSenderId: "889985866382"
    };

    firebase.initializeApp(config);
  }

}
