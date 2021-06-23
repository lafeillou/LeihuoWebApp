import React, {useEffect, useLayoutEffect, useState} from 'react';
import './Detail.scss';
import {IonSegment, IonSegmentButton, IonPage, IonIcon, IonSelect,IonSelectOption,IonToggle,IonInput, IonDatetime, IonHeader, IonList,IonItem, IonText, IonLabel, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent, useIonToast} from '@ionic/react';
import {getDetailInfo} from '../../api/common';
import template from "./template/index";

const Detail: React.FC<any> = () => {
    const [code, setCode] = useState<any>("")
    const [present, dismiss] = useIonToast();

    useLayoutEffect(() => {
        console.log("===Detail Page入参===")
        console.log(template)
        const state = window.leihuoGlobalHistory?.location?.state;
        // 目前有可能取不到
        if (state && state.summaryId) {
            getDetailInfo(state.summaryId).then(res => {
                if (res.data.success){
                    const {businessModule, businessType} = res.data.data;
                    const templateStr = template[businessModule][businessType]
                    if (templateStr) {
                        const str = templateStr.replace(/<table>/gmi, '<table className="custom-detail-table">').replace(/\r\n/gmi, '').replace(/\{/gmi,'{leihuoGlobal.');
                        const node = window.Babel.transform(str, { presets: ['es2015', 'react']});
                        window.leihuoGlobal = {...res.data.data}
                        setCode(node.code)
                    }
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            present({
                message: "发生错误，请点击返回重试！",
                duration: 3000,
            });
        }
    }, [])
    return (
    <IonPage className="detail-page-wrap">
        <IonHeader mode="ios">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" text="返回"/>
                </IonButtons>
                <IonSegment value="0" className="custom-segment-wrap" onIonChange={e => { console.log('Segment selected', e.detail.value);console.log(e.detail.value) }}>
                    <IonSegmentButton value="0">
                        <IonLabel>消息详情</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton disabled value="1">
                        <IonLabel>反馈记录</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                <IonButtons slot="end">
                    <IonButton>下发</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
        {eval(code)}
        </IonContent>
    </IonPage>
    )
};

export default Detail;