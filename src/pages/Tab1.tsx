import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {RouteComponentProps} from 'react-router';

import './Tab1.css';

const Tab1: React.FC<RouteComponentProps> = ({match}) => {
  console.log('============')
  console.log(match)
  return (
      <IonContent>
        tab1
      </IonContent>
  );
};

export default Tab1;
