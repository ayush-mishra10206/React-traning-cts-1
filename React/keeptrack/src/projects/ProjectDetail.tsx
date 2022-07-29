import React from 'react';
import { Project } from './Project';

interface ProjectDetailProps {
  project: Project;
}
export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img
            className="rounded"
            src={project.imageUrl}
            alt={project.name}
          />
          <section className="section dark">
            <h3 className="strong">
              <strong>{project.name}</strong>
            </h3>
            <p>{project.description}</p>
            <p>Budget : {project.budget}</p>

            <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
            <div>
              <mark className="active">
                {' '}
                <div data-testid="isActive">
                  {project.isActive ? 'active' : 'inactive'}
                </div>
              </mark>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}