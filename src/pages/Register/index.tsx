import React from 'react';
import './Register.scss';
import {IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent } from '@ionic/react';

import  Icon from '../../components/CustomIcon';

const Register: React.FC<any> = ({handlePresent}) => {
    console.log('====handlePresent====')
    console.log(handlePresent)
    return (
    <IonPage>
        <IonHeader mode="ios">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton onClick={() => {handlePresent()}}>返回</IonButton>
                </IonButtons>
                <IonTitle color="#252525">注 册</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="registerForm">
                <div className="input-item-wrap">
                    <Icon type="gerenzhongxin" className="left-icon"/>
                    <input type="text" className="input-item" placeholder="请输入您的姓名"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="gerenzhongxin" className="left-icon"/>
                    <input type="number" className="input-item" placeholder="请输入您手机号"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="gerenzhongxin" className="left-icon"/>
                    <input type="text" className="input-item" placeholder="请输入您的警号"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="gerenzhongxin" className="left-icon"/>
                    <input  className="input-item" placeholder="请选择您的性别"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="gerenzhongxin" className="left-icon"/>
                    <input  className="input-item" placeholder="请选择您的部门"/>
                </div>

                <div className="input-item-wrap">
                    <IonButton expand="block" className="registerBtn">
                    提交注册
                    </IonButton>
                    </div>
            </div>
        </IonContent>
    </IonPage>
    )
};



export default Register;