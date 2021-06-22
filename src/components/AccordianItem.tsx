import {IonIcon} from "@ionic/react";
import { caretDownOutline, caretForwardOutline} from 'ionicons/icons';
import CustomList from "./CustomListItem";

const AccordianItem = (props:any) => {
    const { name, type, messages, select, selectedIndex, setReadStatus, index, module } = props;
    const isActive = index === selectedIndex;
    return (
      <div>
        <div
          onClick={() => {
            select(index);
          }}
        >
          <div>
          <IonIcon icon={isActive ? caretDownOutline: caretForwardOutline} />
            <span>{name}</span>
          </div>
        </div>
        {isActive && (
          <div>
            {messages.map((o:any, i:number) => {
              return <CustomList {...o} key={o.messageId} index={i} setReadStatus={setReadStatus} />;
            })}
  
            {messages.length > 0 && (
              <button
                onClick={() => {
                  // Actions.subModuleList({ module, subType: type, title: name, setReadStatus });
                }}
              >
                <span>{'查看更多>>'}</span>
              </button>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default AccordianItem;
  