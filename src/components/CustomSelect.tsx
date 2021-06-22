import React, {useEffect, useState} from 'react';
import {IonButton} from '@ionic/react'
import './CustomSelect.scss';
// import  Icon from './CustomIcon';
// import classnames from 'classnames';

// import {useForm, SubmitHandler} from 'react-hook-form';
import {getDepList} from "../api/common";

const CustomSelectModal: React.FC<{
    onDismiss: () => void;
  }> = ({ onDismiss}) => {
    const [depList, setDepList] = useState([]);
    useEffect(()=>{
        getDepList().then(res => {
            console.log('====getDepList====')
            console.log(res)
            if (res.data.success) {
                setDepList(res.data.data)
            }
        })
    }, [])
    return (<div className="custom-select-modal-inner">
    <div className="custom-select-modal-top" onClick={() => {onDismiss()}}></div>
    <div className="custom-select-modal-bottom">
        <form className="search-input-wrap">
            <input type="text" placeholder="请输入机构名称搜索" />
            <IonButton size="small">搜索</IonButton>
        </form>
        <div className="depList-wrap"></div>
    </div>
  </div>)
    
  };



export default CustomSelectModal;