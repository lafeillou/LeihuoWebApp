import React from 'react';
import './Register.scss';
import {IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import  Icon from '../../components/CustomIcon';
import {useForm, SubmitHandler} from 'react-hook-form';
import classnames from 'classnames';

type registerForm = {
    name: string,
    password: string,
    phone: string,
    policeNo: string,
    sex: string,
    orgId: number,
    jurisdiction: string,
    deptId: number
}

const Register: React.FC<any> = ({handlePresent}) => {

    const {register, handleSubmit, formState: {errors}} = useForm<registerForm>();

    const onSubmit: SubmitHandler<registerForm> = (data) => {
        const {name, password, phone, policeNo, sex, orgId, jurisdiction, deptId} = data;
        console.log(data)
        // login({
        //   policeNo: policeCode,
        //   password: policeCode,
        //   // name
        // }).then( res => {
        //   if (!res.data.success) {
        //     present({
        //       message: res.data.msg,
        //       duration: 3000
        //     })
        //   }
        //   // to do 登录成功后的操作
        // }).catch(err => {
        //     present({
        //       message: err,
        //       color: 'danger',
        //       duration: 3000
        //     })
        // })
      }


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
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-item-wrap">
                    <Icon type="gerenzhongxin" className="left-icon"/>
                    <input {...register("name", {required: true})} className={classnames('input-item', {error: errors.name})} type="text" placeholder="请输入您的姓名"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="shouji-app" className="left-icon"/>
                    <input type="number" {...register("phone", {required: true})} className={classnames('input-item', {error: errors.phone})} placeholder="请输入您手机号"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="caozuo-jinghaoku" className="left-icon"/>
                    <input type="text" {...register("policeNo", {required: true})} className={classnames('input-item', {error: errors.policeNo})} placeholder="请输入您的警号"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="xingbie-app" className="left-icon"/>
                    <input type="text" {...register("sex", {required: true})} className={classnames('input-item', {error: errors.sex})} placeholder="请选择您的性别"/>
                </div>

                <div className="input-item-wrap">
                    <Icon type="zuzhi-app" className="left-icon"/>
                    <input type="text" {...register("jurisdiction", {required: true})} className={classnames('input-item', {error: errors.jurisdiction})} placeholder="请选择您的部门"/>
                </div>

                <div className="input-item-wrap">
                    <IonButton type="submit" expand="block" className="registerBtn">
                    提交注册
                    </IonButton>
                    </div>
            </form>
        </IonContent>
    </IonPage>
    )
};



export default Register;