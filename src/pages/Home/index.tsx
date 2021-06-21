import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import {IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonButtons, IonIcon, IonButton, IonSearchbar, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel} from '@ionic/react';
import { triangle, ellipse, square, calendar, personCircle, informationCircle, map} from 'ionicons/icons';
import './home.scss';
// import  Icon from '../../components/CustomIcon';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
import Tab4 from '../Tab4';

import Icon from '../../components/CustomIcon';

const Home: React.FC<RouteComponentProps> = ({match}) => {
 return (
    <IonPage className="home-page-wrap">
    <IonContent>
        <IonHeader mode="ios">
            <IonToolbar color="primary">
                <IonTitle>重点管控</IonTitle>
                <IonButtons slot="end">
                    <IonButton>
                    <Icon type="geren" className="icon"/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    <IonTabs>
    <IonRouterOutlet style={{marginTop: '44px'}}><Route path="/home/tab1" component={Tab1} />
        <Route  path="/home/tab2" component={Tab2} />
        <Route  path="/home/tab3" component={Tab3} />
        <Route  path="/home/tab4" component={Tab4} />
        <Route  exact path="/home"  render={() => <Redirect to="/home/tab1" />} /></IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/home/tab1"><Icon type="guankong" className="tab-icon"/><IonLabel>重点管控</IonLabel></IonTabButton>
​            <IonTabButton tab="tab2" href="/home/tab2"><Icon type="jingqing" className="tab-icon"/><IonLabel>警情通报</IonLabel></IonTabButton>
​            <IonTabButton tab="tab3" href="/home/tab3"><Icon type="tongzhi" className="tab-icon"/><IonLabel>通知公告</IonLabel></IonTabButton>
            <IonTabButton tab="tab4" href="/home/tab4"><Icon type="falv" className="tab-icon"/><IonLabel>法律指引</IonLabel></IonTabButton>
​          </IonTabBar>
    </IonTabs></IonContent></IonPage>)
};

export default Home;