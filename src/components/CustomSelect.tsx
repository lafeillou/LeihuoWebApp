import React from 'react';
// import {IonButton, useIonToast} from '@ionic/react'
import './CustomSelect.scss';
// import  Icon from './CustomIcon';
// import classnames from 'classnames';

// import {useForm, SubmitHandler} from 'react-hook-form';

const CustomSelectModal: React.FC<{
    onDismiss: () => void;
  }> = ({ onDismiss}) => {
   
    return (<div className="custom-select-modal-inner">
    <div className="custom-select-modal-top" onClick={() => {onDismiss()}}></div>
    <div className="custom-select-modal-bottom">
        bottom
    </div>
  </div>)
    
  };



export default CustomSelectModal;