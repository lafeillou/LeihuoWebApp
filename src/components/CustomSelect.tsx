import React, {useEffect, useState, useRef} from 'react';
import {IonButton, IonContent} from '@ionic/react'
import './CustomSelect.scss';
// import  Icon from './CustomIcon';
// import classnames from 'classnames';

// import {useForm, SubmitHandler} from 'react-hook-form';
import {getDepList} from "../api/common";
import classNames from 'classnames';

let totalDepListData: any[] = [];
const CustomSelectModal: React.FC<{
    onDismiss: () => void;
    onHandleCustomSelect: (data:any) => void;
  }> = ({ onDismiss, onHandleCustomSelect}) => {
    const [depList, setDepList] = useState<any[]>([]);
    // 当前选择的部门
    const [currentSelectDep, setCurrentSelectDep] = useState<any>(null);
    // 当前选择的岗位
    const [currentSelectUnit, setCurrentSelectUnit] = useState<any>(null);

    // 选择部门
    const handleDepSelect = (o:any) => {
        setCurrentSelectDep(o);
        if (o.depts.length > 0) {
            setCurrentSelectUnit(o.depts[0])
        }
    }
    // 选择岗位（部门里面的小部门）
    const handleUnitSelect = (o:any) => {
        setCurrentSelectUnit(o);
    }
    // 搜索关键字dom引用
    const inputRef = useRef<any>();
    // 按关键字搜索机构
    const handleSearch = () => {
        const filterData = totalDepListData.filter((o:any) => {
            const  pattern = new RegExp(inputRef.current.value);
            const {orgName} = o
            return pattern.test(orgName)
        })
        // 过滤出列表，并重新渲染组件
        setDepList(filterData)
        if (filterData.length > 0) {
            handleDepSelect(filterData[0])
        } 

    }
    useEffect(()=>{
        getDepList().then(res => {
            console.log('====getDepList====')
            console.log(res)
            if (res.data.success) {
                totalDepListData = res.data.data
                setDepList(res.data.data)
                if (res.data.data.length > 0) {
                    handleDepSelect(res.data.data[0])
                    if (res.data.data[0].depts.length > 0) {
                        handleUnitSelect(res.data.data[0].depts[0])
                    }
                }
                
            }
        })
    }, [])
    return (<div className="custom-select-modal-inner">
    <div className="custom-select-modal-top" onClick={() => {onHandleCustomSelect({
        currentSelectDep,
        currentSelectUnit
    }); onDismiss();}}></div>
    <div className="custom-select-modal-bottom">
        <form className="search-input-wrap" onSubmit={(e) => {e.preventDefault();handleSearch()}}>
            <input  type="text" ref={inputRef} placeholder="请输入机构名称搜索" />
            <IonButton size="small" type="submit" onClick={() => {handleSearch()}}>搜索</IonButton>
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
                {depList.length !== 0 && currentSelectDep?.depts.map((o:any) => {
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