import React from 'react';
import {IonButton} from '@ionic/react'
import './LoginModal.scss';

import  Icon from './CustomIcon';


const LoginModal: React.FC<{
    onDismiss: () => void;
  }> = ({ onDismiss }) => (
    <div className="login-modal-wrap">
      <div className="login-form">
        <div className="input-item-wrap">
          <Icon type="gerenzhongxin" className="left-icon"/>
          <input  className="input-item" placeholder="请输入姓名"/>
        </div>
        <div className="input-item-wrap">
        <Icon type="caozuo-jinghaoku" className="left-icon"/>
          <input  className="input-item" placeholder="请输入警号"/>
        </div>

        <div className="input-item-wrap">
        <IonButton expand="block" onClick={() => onDismiss()} className="loginBtn">
        登 录
        </IonButton>
        </div>
      </div>
    </div>
  );



export default LoginModal;