import React from 'react';
import './Person.scss';
import {useIonAlert, useIonToast, IonPage,IonHeader, IonList,IonItem, IonText, IonLabel, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import {connect} from "react-redux";
import {logout} from "../../api/common";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Person: React.FC<any> = (props:any) => {
    const {name, phone, policeNo, sex, deptName, orgName} = props.userInfo;
    // const [present, dismiss] = useIonToast();
    const [alertPresent, alertDismiss] = useIonAlert();
    const handleLogout = () => {
        
        // 登出操作
        logout().then(res => {
            // console.log(res)
            if (res.data.success) {
                // present({
                //     message: "安全登出，3秒钟后回到登录界面",
                //     duration: 3000
                // })

                alertPresent({
                    header: '提示',
                    message: '您确定要退出吗？',
                    buttons: [
                      '取消',
                      { text: '确定', handler: (d) => {
                        // 清空所有app缓存
                        AsyncStorage.clear();
                        window.location.href = "/webApp"
                      } },
                    ],
                    onDidDismiss: (e) => console.log('关闭确认框'),
                })
                
            }
        })
    }
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
                    {phone}
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的警号
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    {policeNo}
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的性别
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    {sex}
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的姓名
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    {name}
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的单位
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    {orgName}
                    </IonText>
                </IonItem>
                <IonItem className="listItem">
                    <IonLabel>
                    您的部门
                    </IonLabel>
                    <IonText color="#333" slot="end">
                    {deptName}
                    </IonText>
                </IonItem>
            </IonList>

                <div className="btns-wrap">
                    <IonButton onClick={() => {handleLogout()}}type="button" expand="block" className="exitBtn">
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

const mapStateToProps = (state:any) => {
    return {
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = (dispatch:any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Person);