import Checkbox from "./components/checkbox";



export default function CheckboxFrom({ checkBoxData, onChangeCheckBoxData }) {
    return <div className='d-flex flex-column justify-content-between'>
        <Checkbox name="isStandard" defaultChecked={checkBoxData.isStandard} onChangeCheckBoxData={onChangeCheckBoxData} checkboxLabel="isStandard"/>
        <Checkbox name="published" defaultChecked={checkBoxData.published} onChangeCheckBoxData={onChangeCheckBoxData} checkboxLabel="Published"/>
        <Checkbox name="loginRequired" defaultChecked={checkBoxData.loginRequired} onChangeCheckBoxData={onChangeCheckBoxData} checkboxLabel="Login Required"/>
        <Checkbox name="successLink" defaultChecked={checkBoxData.successLink} onChangeCheckBoxData={onChangeCheckBoxData} checkboxLabel="Route to Scuccess Link"/>
        <Checkbox name="allowEdit" defaultChecked={checkBoxData.allowEdit} onChangeCheckBoxData={onChangeCheckBoxData} checkboxLabel="Allow Edit"/>
        <Checkbox name="allowMultiple" defaultChecked={checkBoxData.allowMultiple} onChangeCheckBoxData={onChangeCheckBoxData} checkboxLabel="Allow Multiple"/>
    </div>
}