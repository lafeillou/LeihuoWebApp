import { IonContent} from '@ionic/react';
import './Accordian.scss';
import AccordianItem from './AccordianItem';

const Accordian = (props:any) => {

    const { data, select, selectedIndex, setReadStatus, module } = props;
  return (
      <IonContent>
        <div>
      {data.map((o:any, i:number) => {
        return (
          <AccordianItem
            {...o}
            key={i}
            select={select}
            selectedIndex={selectedIndex}
            index={i}
            setReadStatus={setReadStatus}
            module={module}
          />
        );
      })}
    </div>
      </IonContent>
  );
};

export default Accordian;
