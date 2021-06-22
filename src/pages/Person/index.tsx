import React from 'react';
import './Person.scss';
import {IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent } from '@ionic/react';
//import  Icon from '../../components/CustomIcon';

const Person: React.FC<any> = () => {
    return (
    <IonPage>
        <IonHeader mode="ios">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" text="返回"/>
                </IonButtons>
                <IonTitle color="#252525">个人中心</IonTitle>
                <IonButtons slot="end">
                    <IonButton>编辑</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="registerForm"></div>
        </IonContent>
    </IonPage>
    )
};



export default Person;