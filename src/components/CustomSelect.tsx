import React, {useEffect, useState} from 'react';
import {IonButton, IonContent} from '@ionic/react'
import './CustomSelect.scss';
// import  Icon from './CustomIcon';
// import classnames from 'classnames';

// import {useForm, SubmitHandler} from 'react-hook-form';
import {getDepList} from "../api/common";
import classNames from 'classnames';

const CustomSelectModal: React.FC<{
    onDismiss: () => void;
  }> = ({ onDismiss}) => {
    const [depList, setDepList] = useState([]);
    // 当前选择的部门
    const [currentSelectDep, setCurrentSelectDep] = useState<any>(null);
    // 当前选择的岗位
    const [currentSelectUnit, setCurrentSelectUnit] = useState<any>(null);

    // 选择部门
    const handleDepSelect = (o:any) => {
        setCurrentSelectDep(o);
    }
    // 选择岗位（部门里面的小部门）
    const handleUnitSelect = (o:any) => {
        setCurrentSelectUnit(o);
    }
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
        <div className="depList-wrap">
            <div className="left-part">
                <IonContent>
                    {depList.map( o => {
                        const {orgName, orgId} = o;
                        return (
                            <div className={classNames('depItem-wrap', {selected: currentSelectDep?.orgId === orgId})} key={orgId} onClick={() => {handleDepSelect(o)}}>
                                <span>{orgName}</span>
                            </div>
                        )
                    })}
                </IonContent>
            </div>
            <div className="right-part">
                <IonContent>
                {currentSelectDep?.depts.map((o:any) => {
                    const {deptId, deptName} = o;
                    return (
                        <div className={classNames('unitItem-wrap', {selected: currentSelectUnit?.deptId === deptId } )} key={deptId} onClick={() => {handleUnitSelect(o)}}>
                            <span>{deptName}</span>
                        </div>
                    )
                })}
                </IonContent>
            </div>
        </div>
    </div>
  </div>)
    
  };



export default CustomSelectModal;