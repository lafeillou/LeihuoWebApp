import React, {useState, useEffect, useLayoutEffect}from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import {IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonButtons, IonIcon, IonButton, IonSearchbar, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel} from '@ionic/react';
// import { triangle } from 'ionicons/icons';
import './Home.scss';
import Accordian from '../../components/Accordian';
import Icon from '../../components/CustomIcon';

// 引入接口
import {getIndexTabsData, getIndexTabsBusinessData} from '../../api/common';
import _ from "lodash";

const Home: React.FC<RouteComponentProps> = ({match}) => {

    const [footerTabs, setFooterTabs] = useState<any>({
        selectedIndex: 0,
        data: [
          {
            name: '重点管控',
            module: 'ZDGK',
            icon: 'guankong',
          },
          {
            name: '警情通报',
            module: 'JQTB',
            icon: 'jingqing',
          },
          {
            name: '通知公告',
            module: 'TZGG',
            icon: 'tongzhi',
          },
          {
            name: '法律指引',
            module: 'FLZY',
            icon: 'falv',
          },
        ],
      });

      const [accordianData, setAccordianData] = useState<any>({ selectedIndex: 0, data: [] });

  // 相当于componentDidMount
  useLayoutEffect(() => {
    handleTabSelect(0);
  }, []);

  const handleTabSelect = (index:number) => {
    // 从服务器查询数据
    getIndexTabsBusinessData(footerTabs.data[index].module).then((res) => {
      // start loading
      if (res.data.status === 200) {
        // end loading
        setAccordianData((state:any) => {
          // 这里的state是上一次的state
          const data = res.data.data;
          console.log("====xxx====")
          console.log({
            ...state,
            data,
          });
          return {
            ...state,
            data,
          };
        });
      }
    });
    setFooterTabs((state:any) => {
      return {
        ...state,
        selectedIndex: index,
      };
    });
    // 默认展开第一个
    setAccordianData((state:any) => {
      return {
        ...state,
        selectedIndex: 0,
      };
    });
  };

  const selectAccordian = (index:number) => {
    setAccordianData((state:any) => {
      // 点击的就是当前已经展开的项
      if (index === state.selectedIndex) {
        return {
          ...state,
          selectedIndex: -1,
        };
      }
      return {
        ...state,
        selectedIndex: index,
      };
    });
  };

  const setReadStatus = ({ module, subType, index }:any) => {
    setAccordianData((state:any) => {
      const newData = [...state.data];
      const Index = _.findIndex(newData, (o:any) => {
        return o.type === subType;
      });
      if (Index >= 0) {
        if (newData[Index].messages.length >= 0) {
          newData[Index].messages[index].readStatus = true;
        }
      }
      return {
        ...state,
        data: newData,
      };
    });
  };

  const goToPersonPage = () => {
    // if (userInfo.status === 2) {
    //   Actions.person();
    // } else {
    //   Actions.bindModal();
    // }
  };

  const handleTabsWillChange = (e:any) => {
    const goToIndex = e.detail.tab.slice(-1) * 1 - 1;
    handleTabSelect(goToIndex)
  }
 return (
    <IonPage className="home-page-wrap">
    <IonContent>
        <IonHeader mode="ios">
            <IonToolbar color="primary">
                <IonTitle>{footerTabs.data[footerTabs.selectedIndex].name}</IonTitle>
                <IonButtons slot="end">
                    <IonButton routerLink="/person" routerDirection="forward">
                    <Icon type="geren" className="icon"/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    <IonTabs onIonTabsWillChange={handleTabsWillChange}>
    <IonRouterOutlet style={{marginTop: '44px'}}>{footerTabs.data.map((o:any, i:number) => {
                return (<Route path={`/home/tab${i+1}`} key={o.name}><Accordian data={accordianData.data}
                select={selectAccordian}
                setReadStatus={setReadStatus}
                module={footerTabs.data[footerTabs.selectedIndex].module}
                selectedIndex={accordianData.selectedIndex}/></Route>)
            })}<Route  exact path="/home"  render={() => <Redirect to="/home/tab1" />} /></IonRouterOutlet>
        <IonTabBar slot="bottom">
            {footerTabs.data.map((o:any, i:number) => {
                return (<IonTabButton key={o.name} tab={`tab${i+1}`} href={`/home/tab${i+1}`}><Icon type={o.icon} className="tab-icon"/><IonLabel>{o.name}</IonLabel></IonTabButton>)
            })}
​          </IonTabBar>
    </IonTabs></IonContent></IonPage>)
};

export default Home;