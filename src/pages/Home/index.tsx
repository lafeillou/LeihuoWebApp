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
 return (
    <IonPage>
    <IonContent fullscreen>
        <IonHeader className="home-page-header" mode="ios">
            <IonToolbar color="primary">
                <IonTitle>重点管控</IonTitle>
                <IonButtons slot="end">
                    <IonButton>
                    <Icon type="geren" className="right-icon"/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    <IonTabs>
    <IonRouterOutlet style={{marginTop: '44px'}}><Route path="/home/tab1" component={Tab1} />
        <Route  path="/home/tab2" component={Tab2} />
        <Route  path="/home/tab3" component={Tab3} />
        <Route  exact path="/home"  render={() => <Redirect to="/home/tab1" />} /></IonRouterOutlet>
        <IonTabBar slot="bottom">
​            <IonTabButton tab="tab1" href="/home/tab1">
​              <IonIcon icon={triangle} />
​              <IonLabel>Tab 1</IonLabel>
​            </IonTabButton>
​            <IonTabButton tab="tab2" href="/home/tab2">
​              <IonIcon icon={ellipse} />
​              <IonLabel>Tab 2</IonLabel>
​            </IonTabButton>
​            <IonTabButton tab="tab3" href="/home/tab3">
​              <IonIcon icon={square} />
​              <IonLabel>Tab 3</IonLabel>
​            </IonTabButton>
​          </IonTabBar>
    </IonTabs></IonContent></IonPage>)
};



export default Home;