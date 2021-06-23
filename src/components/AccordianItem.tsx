import {IonIcon, IonButton} from "@ionic/react";
import { caretDownOutline, caretForwardOutline} from 'ionicons/icons';
import CustomListItem from "./CustomListItem";
import './AccordianItem.scss';
const AccordianItem = (props:any) => {
    const { name, type, businessList, select, selectedIndex, setReadStatus, index, module } = props;
    const isActive = index === selectedIndex;
    return (
      <div className="accordianItemWrap">
        <div
          onClick={() => {
            select(index);
          }}
          className="accordianItemWrap-head"
        >
          <div>
          <IonIcon icon={isActive ? caretDownOutline: caretForwardOutline} />
            <span className="title">{name}</span>
          </div>
        </div>
        {isActive && (
          <div>
            <div className="custom-list-wrap">
            {businessList.map((o:any, i:number) => {
              return <CustomListItem {...o} key={o.summaryId} index={i} setReadStatus={setReadStatus} />;
            })}
            </div>
            {businessList.length > 0 && (
              <IonButton expand="block" fill="clear" className="check-for-more"
                onClick={() => {
                  // Actions.subModuleList({ module, subType: type, title: name, setReadStatus });
                }}
              ><span>{'查看更多>>'}</span>
              </IonButton>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default AccordianItem;
  