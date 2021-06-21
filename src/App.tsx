import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonModal
} from '@ionic/react';
import {useEffect, useState} from 'react';

import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
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
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
let logged = false ;
const App: React.FC = () => {
  const handleDismiss = () => {
    dismiss();
  };
  const handlePresent = () => {
    present({
      cssClass: 'custom-login-modal',
    });
  }
  const [present, dismiss] = useIonModal(LoginModal, {
    onDismiss: handleDismiss,
  });

  useEffect(() => {
    if (!logged) {
      handlePresent();
    }
  }, []);

  // 如果没有登录，则弹出
  return (
      <IonReactRouter>
        <IonApp>
        <IonRouterOutlet>
          <Route  path="/register">
            <Register handlePresent={handlePresent} />
          </Route>
          <Route  path="/person" component={Person} />
          <Route  path="/home" render={props => <Home {...props} />} />
          <Route exact path="/"  render={() => logged ? <Redirect to="/home" />: <Redirect to="/register" />} />
        </IonRouterOutlet>
        </IonApp>
      </IonReactRouter>
  );
}

export default App;
