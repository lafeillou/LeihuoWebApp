import React, {useState} from 'react';
import './Register.scss';
import {useIonModal, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon, IonTitle, IonContent, IonSelect, IonSelectOption, useIonToast } from '@ionic/react';
import  Icon from '../../components/CustomIcon';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import classnames from 'classnames';
import CustomSelectModal from '../../components/CustomSelect';
import {register as sysRegister} from '../../api/common';
import { chevronBackOutline} from 'ionicons/icons';
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

let orgId:number = 0; 
let deptId:number = 0;
// react-hook-from组件 链接 自定义的机构选择器组件；开始没有链接，后面保持一种链接
let onJurisdictionValueChange: any = null;
const Register: React.FC<any> = ({handlePresent}) => {

    const [gender, setGender] = useState<string>("");
    const [jurisdiction, setJurisdiction] = useState<string>("");

    const {register, handleSubmit, control, formState: {errors}} = useForm<registerForm|any>();

    const handleDismiss = () => {
        dismiss();
      };

    const handleCustomSelectModalPresent = () => {
        present({
          cssClass: 'custom-select-modal-wrap',
        });
      }
    
      // 处理自定义机构选择组件，返回的选择结果
    const handleCustomSelectResult = (data: any) => {
        // console.log(data)
        // 收集选择的部门id, 岗位id
        orgId = data.currentSelectDep.orgId;
        deptId = data.currentSelectUnit.deptId;
        const jurisdiction = `${data.currentSelectDep.orgName} - ${data.currentSelectUnit.deptName}`
        onJurisdictionValueChange(jurisdiction)
        setJurisdiction(jurisdiction)
    }

    const [toastPresent, toastDismiss] = useIonToast();

    const [present, dismiss] = useIonModal(CustomSelectModal, {
        onDismiss: handleDismiss,
        // 自定义机构选择组件，回填表单
        onHandleCustomSelect: handleCustomSelectResult,
    });

    const onSubmit: SubmitHandler<registerForm> = (data) => {
        const {name, password, phone, policeNo} = data;
        sysRegister({
            name,
            password,
            phone,
            policeNo,
            sex: gender,
            orgId,
            jurisdiction,
            deptId
        }).then(res => {
            console.log('=======sysRegister')
            console.log(res)
            if(res.data.success) {
                toastPresent({
                    message: "恭喜您注册成功！3秒钟后回到登录界面",
                    duration: 3000,
                })
                // 返回登录界面，重新登录
                setTimeout(() => {
                    window.location.href = '/'
                }, 3000) 
                // 这里调用dismiss 竟然没用，就采用了window.location.href的写法
                return
            } 
                toastPresent({
                    message: res.data.msg,
                    duration: 3000,
                    })
            
        }).catch(err => {
            toastPresent({
              message: err,
              color: 'danger',
              duration: 3000
            })
        })
      }

    return (
    <IonPage>
        <IonHeader mode="ios">
            <IonToolbar>
                <IonButtons slot="start">
                    <div>
                    <IonButton onClick={() => {handlePresent()}}>
                    <IonIcon icon={chevronBackOutline} />返回</IonButton>
                    </div>
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
                    <Controller 
                    rules={{required: true}}
                    defaultValue={gender}
                    name="sex"
                    control={control}
                    render={
                        ({field: {onChange, onBlur, value}}) => (<IonSelect className={classnames({error: errors.sex})} interface="action-sheet"  okText="确定" cancelText="取消" value={gender} placeholder="请选择您的性别" onIonChange={e => {onChange(e.detail.value);setGender(e.detail.value)}}>
                        <IonSelectOption value="女">女</IonSelectOption>
                        <IonSelectOption value="男">男</IonSelectOption>
                    </IonSelect>)
                    }
                    />
                    
                </div>

                <div className="input-item-wrap">
                    <Icon type="zuzhi-app" className="left-icon"/>
                    <Controller
                    rules={{required: true}}
                    defaultValue={jurisdiction}
                    name="jurisdiction"
                    control={control} render={
                        ({field: {onChange, onBlur, value}}) => (<div className={classnames('input-item', {error: errors.jurisdiction})} style={{lineHeight: '40px'}} onClick={() => {onJurisdictionValueChange = onChange;handleCustomSelectModalPresent();}}>{jurisdiction? <span>{jurisdiction}</span>:<span style={{color: '#ccc'}}>请选择您的部门</span>}</div>)
                    } />
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