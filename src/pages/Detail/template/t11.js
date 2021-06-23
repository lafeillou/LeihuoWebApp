// ------------- 重点管控-三涉管控业务表(反诈中心) -------------
// id : id
// 姓名 : name
// 性别 : sex
// 证件号 : cardNo
// 户籍地址 : householdAddress
// 人员类型 : peopleType
// 控制单位 : controlUnit
// 人员状态 0: 不正常 1: 正常 : peopleStatus
// 处理类型 : handleType
// 落实管控 0: 未管控 1: 已管控 : hasControl
// ------------- 重点管控-三涉管控业务表(反诈中心) -------------
const templateStr = `
<table>
    <tbody>
        <tr>
            <td>姓名</td>
            <td>{name}</td>
        </tr>
        <tr>
            <td>性别</td>
            <td>{sex}</td>
        </tr>
        <tr>
            <td>证件号</td>
            <td>{cardNo}</td>
        </tr>
        <tr>
            <td>户籍地址</td>
            <td>{householdAddress}</td>
        </tr>
        <tr>
            <td>人员类型</td>
            <td>{peopleType}</td>
        </tr>
        <tr>
            <td>控制单位</td>
            <td>{controlUnit}</td>
        </tr>
        <tr>
            <td>人员状态</td>
            <td>{peopleStatus}</td>
        </tr>
        <tr>
            <td>处理类型</td>
            <td>{handleType}</td>
        </tr>
        <tr>
            <td>落实管控</td>
            <td>{hasControl}</td>
        </tr>
    </tbody>
</table>
`;
export default templateStr;
