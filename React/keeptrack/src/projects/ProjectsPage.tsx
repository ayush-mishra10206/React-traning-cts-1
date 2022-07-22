import React, { Fragment, useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectList from './ProjectList';

export default function ProjectPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
    const saveNewData = (project: Project) => {
        let uptdProject = projects.map((prjt: Project) => {
            return prjt.id === project.id ? project : prjt;
        });
        setProjects(uptdProject);
    }


    return <>
        <h1>Projects1</h1>
        <ProjectList
            onClickedSave={saveNewData}
            projects={projects} />
    </>

}
