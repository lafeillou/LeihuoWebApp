const CustomList = (props:any) => {
  const {
    title,
    type,
    createTime,
    messageId,
    routerId,
    summary,
    readStatus,
    setReadStatus,
    index,
    module,
  } = props;

  return (
    <div
      onClick={() => {
        setReadStatus({
          module,
          subType: type,
          index,
        });
      }}
    >
      <div>
        <div>
          <div />
        </div>
        <div >
          <div >
            <span>
              {title}
            </span>
            <span >{createTime}</span>
          </div>
          <div >
            <span>
              {summary}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomList;
