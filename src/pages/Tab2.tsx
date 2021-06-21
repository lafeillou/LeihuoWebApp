import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {RouteComponentProps} from 'react-router';
import './Tab2.css';

const Tab2: React.FC<RouteComponentProps> = ({match}) => {
  console.log('============')
  console.log(match)
  return (
      <IonContent>
        tab2
      </IonContent>
  );
};

export default Tab2;
