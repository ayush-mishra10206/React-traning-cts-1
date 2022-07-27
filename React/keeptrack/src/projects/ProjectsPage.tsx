import React, { Fragment, useEffect, useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import { projectApi } from './projectApi';
import ProjectList from './ProjectList';

export default function ProjectPage() {
    // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            try {
                const data = await projectApi.get(1);
                setError('');
                setProjects(data)
            }
            catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
            finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, [])

    const saveNewData = (project: Project) => {
        let uptdProject = projects.map((prjt: Project) => {
            return prjt.id === project.id ? project : prjt;
        });
        setProjects(uptdProject);
    }


    return (
        <Fragment>
            <h1>Projects1</h1>
            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            <ProjectList
                onClickedSave={saveNewData}
                projects={projects} />
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
        </Fragment>
    )

}
