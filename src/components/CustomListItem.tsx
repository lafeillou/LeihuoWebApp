declare global {
  interface Window {
    Babel: any;
    React: any;
    leihuoGlobal: any;
  }
}

const CustomListItem = (props:any) => {
  const handleClick = (summaryId: any) => {
    // console.log(summaryId);
    window.leihuoGlobalHistory.push(`/detail?summaryId=${summaryId}`, {summaryId})
  }

  const {
    summaryId,
    summaryContent,
    businessStatus,
    summaryTemplate,
    businessDetail,
    assignTime,
    setReadStatus,
    index,
    module,
  } = props;
  const str = summaryTemplate.replace(/<>/gmi, '<div className="custom-list-item">').replace(/<\/>/gmi, '</div>').replace(/\r\n/gmi, '').replace(/\$\{/gmi,'{leihuoGlobal.');
  const node = window.Babel.transform(str, { presets: ['es2015', 'react']});
  // 设置所有字段，包括时间字段（在字段列表的外面）
  window.leihuoGlobal = {...businessDetail, assignTime}
  return (<div onClick={() => {handleClick(summaryId)}}>
    {eval(node.code)}
  </div>);
};
export default CustomListItem;