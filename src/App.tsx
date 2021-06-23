import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  useIonModal
} from '@ionic/react';
import {useEffect, useLayoutEffect, useState, useRef} from 'react';

import { IonReactRouter } from '@ionic/react-router';
import Register from './pages/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import LoginModal from './components/LoginModal';
// 个人中心页面
import Person from './pages/Person';
// 业务（消息）详情页面
import Detail from './pages/Detail';

import AsyncStorage from "@react-native-async-storage/async-storage";
// redux
import { connect } from 'react-redux';
// 在CustomListItem.tsx中也写了一份，没有相互覆写
declare global {
  interface Window {
    leihuoGlobalHistory: any;
  }
}

const App: React.FC<any> = ({login}) => {
  // 全局history 对象
  const [token, setToken] = useState<any>(null);
  const handleDismiss = () => {
    dismiss();
    if (!token) {
      routeComGlobal.current.history.push("/register")
    }
  };
  const handlePresent = () => {
    present({
      cssClass: 'custom-login-modal',
    });
  }
  const routeComGlobal = useRef<any>();
  

  const [present, dismiss] = useIonModal(LoginModal, {
    onDismiss: handleDismiss,
    // redux effect方法; 一切都是这种Modal挂载方式制造麻烦
    login
  });

  const fn = async () => {
    let token: any= "";
    try {
      token = await AsyncStorage.getItem('@Auth:token');
      if(!token) {
        handlePresent();
      }else {
        setToken(token)
        routeComGlobal.current.history.push("/home")
        // 放到window上去
        window.leihuoGlobalHistory = routeComGlobal.current.history
      }
    } catch (error) {
      // 出错让重新登录
      setToken(null)
      /* Nothing */
    }
  }
    
  useLayoutEffect(() => {
    fn();
  }, []);

  // 如果没有登录，则弹出
  return (
        <IonReactRouter basename="/webApp" ref={routeComGlobal}>
          <IonApp>
          <IonRouterOutlet>
            <Route  path="/register">
              <Register handlePresent={handlePresent} />
            </Route>
            <Route  path="/person" component={Person} />
            <Route  path="/detail" component={Detail} />
            <Route  path="/home" render={props => <Home {...props} />} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          </IonApp>
        </IonReactRouter>
  );
}
const mapStateToProps = (state:any) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch:any) => ({
    login: dispatch.userInfo.login
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
