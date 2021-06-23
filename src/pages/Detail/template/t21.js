// ------------- 警情通报-三涉警情业务表(反诈中心) -------------
// id : id
// 风险特征 : riskFeatures
// 预警等级 : warningLevel
// 受害账号 : victimAccount
// 受害人姓名 : victimName
// 受害人身份证号 : victimCard
// 户籍地址 : householdAddress
// 户籍区划 : householdArea
// 反馈情况 : feedbackCase
// 反馈单位 : feedbackUnit
// 反馈民警 : feedbackPolice
// 拦截金额 : interceptAmount
// 备注 : remarks
// ------------- 警情通报-三涉警情业务表(反诈中心) -------------
const templateStr = `
<table>
    <tbody>
        <tr>
            <td>风险特征</td>
            <td>{riskFeatures}</td>
        </tr>
        <tr>
            <td>预警等级</td>
            <td>{warningLevel}</td>
        </tr>
        <tr>
            <td>受害账号</td>
            <td>{victimAccount}</td>
        </tr>
        <tr>
            <td>受害人姓名</td>
            <td>{victimName}</td>
        </tr>
        <tr>
            <td>受害人身份证号</td>
            <td>{victimCard}</td>
        </tr>
        <tr>
            <td>户籍地址</td>
            <td>{householdAddress}</td>
        </tr>
        <tr>
            <td>户籍区划</td>
            <td>{householdArea}</td>
        </tr>
        <tr>
            <td>反馈情况</td>
            <td>{feedbackCase}</td>
        </tr>
        <tr>
            <td>反馈单位</td>
            <td>{feedbackUnit}</td>
        </tr>
        <tr>
            <td>反馈民警</td>
            <td>{feedbackPolice}</td>
        </tr>
        <tr>
            <td>拦截金额</td>
            <td>{interceptAmount}</td>
        </tr>
        <tr>
            <td>备注</td>
            <td>{remarks}</td>
        </tr>
    </tbody>
</table>
`;
export default templateStr;
