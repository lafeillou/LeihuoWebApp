import React from 'react';
import './Person.scss';
import {IonPage, IonIcon, IonSelect,IonSelectOption,IonToggle,IonInput, IonDatetime, IonHeader, IonList,IonItem, IonText, IonLabel, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent } from '@ionic/react';

const Detail: React.FC<any> = () => {
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
            <form className="person-editForm">
            <IonList>
                <IonItem className="listItem">
                    <IonLabel>
                    您的手机号
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    13697331010
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的警号
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    31010
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的性别
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    男
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的姓名
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    娄永亮
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的单位
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    荆州市公安局
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的部门
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    情报科
                    </IonText>
                </IonItem>
            </IonList>

                <div className="btns-wrap">
                    <IonButton type="button" expand="block" className="exitBtn">
                    退出登录
                    </IonButton>
                    <IonButton type="button" expand="block" className="changeBtn">
                    部门调换
                    </IonButton>
                </div>
            </form>
        </IonContent>
    </IonPage>
    )
};

export default Detail;