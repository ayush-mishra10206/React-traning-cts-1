

export default function InputTags({ inputLabel, onChangeFileData, value, name }) {
    return <div className='mb-3'>
        <label className="ml-2 form-label mb-3 h5">{inputLabel}</label>
        <input className="form-control form-control-lg" onChange={onChangeFileData} name={name} value={value} />
    </div>
}