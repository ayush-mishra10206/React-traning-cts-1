import React, { Fragment, useEffect, useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import { projectApi } from './projectApi';
import ProjectList from './ProjectList';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../state';
import { ProjectState } from './state/projectTypes';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { loadProjects } from './state/projectActions';
export default function ProjectsPage() {
    // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
    // const [projects, setProjects] = useState<Project[]>([])
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | undefined>(undefined);
    // const [currentPage, setCurrentPage] = useState(1);

    const loading = useSelector(
        (appState: AppState) => appState.projectState.loading
    )
    const projects = useSelector(
        (appState: AppState) => appState.projectState.projects
    );
    const error = useSelector(
        (appState: AppState) => appState.projectState.error
    );
    const currentPage = useSelector(
        (appState: AppState) => appState.projectState.page
    );

    const dispatch = useDispatch<ThunkDispatch<ProjectState, any, Action>>();


    // useEffect(() => {
    //     const loadProjects = async () => {
    //         setLoading(true);
    //         try {
    //             const data = await projectApi.get(1);
    //             setError('');
    //             if (currentPage === 1) {
    //                 setProjects(data)
    //             }
    //             else {
    //                 setProjects([...projects, ...data])
    //             }
    //         }
    //         catch (e) {
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         }
    //         finally {
    //             setLoading(false);
    //         }
    //     }
    //     loadProjects();
    // }, [currentPage])
    useEffect(() => {
        dispatch(loadProjects(1));
    }, [dispatch])

    // const saveNewData = (project: Project) => {
    //     // let uptdProject = projects.map((prjt: Project) => {
    //     //     return prjt.id === project.id ? project : prjt;
    //     // });
    //     // setProjects(uptdProject);
    //     projectApi
    //         .put(project)
    //         .then((updatedProject) => {
    //             let updatedProjects = projects.map((p: Project) => {
    //                 return p.id === project.id ? new Project(updatedProject) : p;
    //             });
    //             setProjects(updatedProjects);
    //         })
    //         .catch((e) => {
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         })
    // }


    const handleMoreClick = () => {
        // setCurrentPage((currentPage) => currentPage + 1);
        dispatch(loadProjects(currentPage + 1))
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
            {!loading && !error && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                            <button aria-label='moreBtn' className="button default" onClick={handleMoreClick} >
                                More...
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* <ProjectList
                onClickedSave={saveNewData}
                projects={projects} /> */}
            <ProjectList projects={projects} />
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
        </Fragment>
    )

}
