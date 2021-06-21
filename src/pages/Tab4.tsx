import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {RouteComponentProps} from 'react-router';
import './Tab4.css';

const Tab4: React.FC<RouteComponentProps> = ({match}) => {
  console.log('============')
  console.log(match)
  return (
      <IonContent>
        tab4
      </IonContent>
  );
};

export default Tab4;
