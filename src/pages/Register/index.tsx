import React, {useState} from 'react';
import './Register.scss';
import {useIonModal, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonContent, IonSelect, IonSelectOption } from '@ionic/react';
import  Icon from '../../components/CustomIcon';
import {useForm, SubmitHandler} from 'react-hook-form';
import classnames from 'classnames';
import CustomSelectModal from '../../components/CustomSelect';

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

    const [gender, setGender] = useState<string>("男");

    const {register, handleSubmit, formState: {errors}} = useForm<registerForm>();

    const handleDismiss = () => {
        dismiss();
      };

    const handleCustomSelectModalPresent = () => {
        present({
          cssClass: 'custom-select-modal-wrap',
        });
      }

    const [present, dismiss] = useIonModal(CustomSelectModal, {
        onDismiss: handleDismiss,
    });

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
                    <Icon type="xingbie-app" className="left-icon" style={{zIndex: 3}}/>
                    {/* <input type="text" {...register("sex", {required: true})} className={classnames('input-item', {error: errors.sex})} placeholder="请选择您的性别"/> */}
                    <IonSelect interface="action-sheet"  okText="确定" cancelText="取消" value={gender} placeholder="请选择您的性别" onIonChange={e => setGender(e.detail.value)}>
                        <IonSelectOption value="女">女</IonSelectOption>
                        <IonSelectOption value="男">男</IonSelectOption>
                    </IonSelect>
                </div>

                <div className="input-item-wrap">
                    <Icon type="zuzhi-app" className="left-icon"/>
                    {/* <input type="text" {...register("jurisdiction", {required: true})} className={classnames('input-item', {error: errors.jurisdiction})} placeholder="请选择您的部门"/> */}
                    <div className="input-item" style={{lineHeight: '40px'}} onClick={() => {handleCustomSelectModalPresent()}}><span style={{color: '#ccc'}}>请选择您的部门</span></div>
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