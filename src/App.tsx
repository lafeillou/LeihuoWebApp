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
import {useEffect} from 'react';

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

const logged = false;

const App: React.FC = () => {
  const handleDismiss = () => {
    dismiss();
  };

  const [present, dismiss] = useIonModal(LoginModal, {
    onDismiss: handleDismiss,
  });

  useEffect(() => {
    // if (!logged) {
    //   present({
    //     cssClass: 'custom-login-modal',
    //   });
    // }
  }, []);

  // 如果没有登录，则弹出
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route  path="/register" component={Register} />
          <Route  path="/home" render={props => <Home {...props} />} />
          <Route exact path="/"  render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
