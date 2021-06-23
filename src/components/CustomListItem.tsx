
import ReactDOM from 'react-dom';
import React from 'react';
console.log(ReactDOM);
console.log(React);

declare global {
  interface Window {
    Babel: any;
    React: any;
  }
}

const CustomList = (props:any) => {
  const {
    summaryContent,
    businessStatus,
    summaryTemplate,
    // title,
    // type,
    // createTime,
    // messageId,
    // routerId,
    // summary,
    // readStatus,
    setReadStatus,
    index,
    module,
  } = props;
  const str = summaryTemplate.replace(/<>/gmi, '<div>').replace(/<\/>/gmi, '</div>').replace(/\r\n/gmi, '').replace(/\$/gmi,'').replace(/\{/gmi, '').replace(/\}/gmi, '');
  const node = window.Babel.transform(str, { presets: ['es2015', 'react']});
  return (eval(node.code));
    
};

export default CustomList;
