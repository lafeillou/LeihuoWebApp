// ------------- 警情通报-110警情业务表(指挥中心) -------------
// id : id
// 行政区划 : administrativeNo
// 警情行政区划+系统接警单编号 : alarmNo
// 报警方式代码 : alarmMethodCode
// 接警类型代码 : alarmTypeCode
// 报警人姓名 : alarmPersonName
// 报警人性别 : alarmPersonSex
// 报警人联系方式 : alarmPersonPhone
// 报警人住址或单位 : alarmPersonAddress
// 报警次数 : alarmCount
// 报警内容 : alarmContent
// 报警时间 : alarmTime
// 报警车牌类型 : carNumberType
// 报警车牌号 : carNumber
// 案发地点 : crimePlace
// 警情级别 : alarmLevel
// 周边信息 : peripheralInformation
// 被困人数 : trappedNumber
// 受伤人数 : injuredNumber
// 死亡人数 : deathNumber
// X坐标 : axisX
// Y坐标 : axisY
// 有否危险品，0为否，1为有 : hasDangerousGoods
// 关联接警单编号 : receiveDocumentNo
// 接警单状态 : receiveDocumentStatus
// 接警单位代码 : receiveUnitCode
// 接警员姓名 : receivePersonName
// 接警员工号 : receivePersonNo
// ------------- 警情通报-110警情业务表(指挥中心) -------------
const templateStr = `
<table>
    <tbody>
        <tr>
            <td>行政区划</td>
            <td>{administrativeNo}</td>
        </tr>
        <tr>
            <td>警情行政区划+系统接警单编号</td>
            <td>{alarmNo}</td>
        </tr>
        <tr>
            <td>报警方式代码</td>
            <td>{alarmMethodCode}</td>
        </tr>
        <tr>
            <td>接警类型代码</td>
            <td>{alarmTypeCode}</td>
        </tr>
        <tr>
            <td>报警人姓名</td>
            <td>{alarmPersonName}</td>
        </tr>
        <tr>
            <td>报警人性别</td>
            <td>{alarmPersonSex}</td>
        </tr>
        <tr>
            <td>报警人联系方式</td>
            <td>{alarmPersonPhone}</td>
        </tr>
        <tr>
            <td>报警人住址或单位</td>
            <td>{alarmPersonAddress}</td>
        </tr>
        <tr>
            <td>报警次数</td>
            <td>{alarmCount}</td>
        </tr>
        <tr>
            <td>报警内容</td>
            <td>{alarmContent}</td>
        </tr>
        <tr>
            <td>报警时间</td>
            <td>{alarmTime}</td>
        </tr>
        <tr>
            <td>报警车牌类型</td>
            <td>{carNumberType}</td>
        </tr>
        <tr>
            <td>报警车牌号</td>
            <td>{carNumber}</td>
        </tr>
        <tr>
            <td>案发地点</td>
            <td>{crimePlace}</td>
        </tr>
        <tr>
            <td>警情级别</td>
            <td>{alarmLevel}</td>
        </tr>
        <tr>
            <td>周边信息</td>
            <td>{peripheralInformation}</td>
        </tr>
        <tr>
            <td>被困人数</td>
            <td>{trappedNumber}</td>
        </tr>
        <tr>
            <td>受伤人数</td>
            <td>{injuredNumber}</td>
        </tr>
        <tr>
            <td>死亡人数</td>
            <td>{deathNumber}</td>
        </tr>
        <tr>
            <td>X坐标</td>
            <td>{axisX}</td>
        </tr>
        <tr>
            <td>Y坐标</td>
            <td>{axisY}</td>
        </tr>
        <tr>
            <td>有否危险品</td>
            <td>{hasDangerousGoods}</td>
        </tr>
        <tr>
            <td>关联接警单编号</td>
            <td>{receiveDocumentNo}</td>
        </tr>
        <tr>
            <td>接警单状态</td>
            <td>{receiveDocumentStatus}</td>
        </tr>
        <tr>
            <td>接警单位代码</td>
            <td>{receiveUnitCode}</td>
        </tr>
        <tr>
            <td>接警员姓名</td>
            <td>{receivePersonName}</td>
        </tr>
        <tr>
            <td>接警员工号</td>
            <td>{receivePersonNo}</td>
        </tr>
    </tbody>
</table>
`;
export default templateStr;
