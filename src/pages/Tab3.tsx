import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {RouteComponentProps} from 'react-router';
import './Tab3.css';

const Tab3: React.FC<RouteComponentProps> = ({match}) => {
  console.log('============')
  console.log(match)
  return (
      <IonContent>
        tab3
      </IonContent>
  );
};

export default Tab3;
