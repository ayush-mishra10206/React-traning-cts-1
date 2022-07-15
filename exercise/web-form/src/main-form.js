import InputTags from "./components/input-tags";


export default function MainForm({ onChangeFileData, fileData }) {
    return <div className=' w-50'>
        <InputTags inputLabel="Title" onChangeFileData={onChangeFileData} value={fileData.title} name="title" />
        <InputTags inputLabel="Route" onChangeFileData={onChangeFileData} value={fileData.route} name="route" />
        <InputTags inputLabel="Select DocType" onChangeFileData={onChangeFileData} value={fileData.docType} name="docType" />
        <InputTags inputLabel="Module" onChangeFileData={onChangeFileData} value={fileData.module} name="module" />
    </div>
}