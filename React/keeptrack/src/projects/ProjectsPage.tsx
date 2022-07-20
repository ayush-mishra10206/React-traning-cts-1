import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectList from './ProjectList';

export default function ProjectPage() {

    const saveNewData = (project:Project) =>{
        console.log('projectPage : ', project)
    }

    return <>
        <h1>Projects1</h1>
        <ProjectList
        onClickedSave={saveNewData}
        projects={MOCK_PROJECTS}/>
    </>

}
