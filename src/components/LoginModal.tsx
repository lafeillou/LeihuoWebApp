import React from 'react';
import {IonButton, useIonToast} from '@ionic/react'
import './LoginModal.scss';
import  Icon from './CustomIcon';
import classnames from 'classnames';
import {useForm, SubmitHandler} from 'react-hook-form';
// redux
// import { connect } from 'react-redux';

type loginForm = {
  name: string,
  policeCode: string,
}
const LoginModal: React.FC<{
    onDismiss: () => void;
    login: any;
  }> = ({ onDismiss, login}) => {
    const [present, dismiss] = useIonToast();
    const {register, handleSubmit, formState: {errors}} = useForm<loginForm>();
  
    const onSubmit: SubmitHandler<loginForm> = (data) => {
      const {policeCode, name} = data;
      // redux effects
      console.log(login);
      login({...data, present})
    }

    return (<div className="login-modal-wrap">
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-item-wrap">
        <Icon type="gerenzhongxin" className="left-icon"/>
        <input  {...register("name", {required: true})} className={classnames('input-item', {error: errors.name})} placeholder="请输入姓名"/>
      </div>
      <div className="input-item-wrap">
      <Icon type="caozuo-jinghaoku" className="left-icon"/>
        <input  {...register("policeCode", {required: true})} className={classnames('input-item', {error: errors.policeCode})} placeholder="请输入警号"/>
      </div>

      <div className="input-item-wrap">
      <IonButton type="submit" expand="block" className="loginBtn">
      登 录
      </IonButton>
      </div>
      <div className="subBtn-item-wrap">
          <IonButton type="button" fill="clear" onClick={() => {onDismiss()}}>账号注册</IonButton>
      </div>
    </form>
  </div>)
    
  };

  // const mapStateToProps = (state:any) => {
  //   return {
  //     userInfo: state.userInfo,
  //   };
  // };
  
  // const mapDispatchToProps = (dispatch:any) => ({
  //     login: dispatch.userInfo.login
  // });

export default LoginModal;