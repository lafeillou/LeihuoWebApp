import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';


import {IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonButtons, IonIcon, IonButton, IonSearchbar, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel} from '@ionic/react';
import { triangle, ellipse, square, calendar, personCircle, informationCircle, map} from 'ionicons/icons';
import './home.scss';
// import  Icon from '../../components/CustomIcon';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';

import Icon from '../../components/CustomIcon';

const Home: React.FC<RouteComponentProps> = ({match}) => {
    console.log("=====")
    console.log(match)
 return (
     <IonRouterOutlet>
            <Route  exact path="/home" component={Tab1} />
            <Route  path="/home/tab2" component={Tab2} />
            <Route  path="/home/tab3" component={Tab3} />
​          </IonRouterOutlet>)
  
};



export default Home;