

export default function Checkbox({ defaultChecked, onChangeCheckBoxData, checkboxLabel, name }) {
    return <div className="form-check">
        <input name={name} className="form-check-input" defaultChecked={defaultChecked} onChange={onChangeCheckBoxData} type="checkbox" />
        <label className="form-check-label h6">{checkboxLabel}</label>
    </div>
}