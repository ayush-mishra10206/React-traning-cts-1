import { Project } from "./Project";

const baseUrl = 'http://localhost:3000';
const url = `${baseUrl}/projects`;




const delay = (ms: number) => {
    return (x: any): Promise<any> => {
        return new Promise((res) => setTimeout(() => res(x), ms))
    }
}

const translateStatusToErrorMessage = (status: number) => {
    switch (status) {
        case 401:
            return "login again";
        case 403:
            return "don't have permission"
        default:
            return "error in getting project"
    }
}

const checkStatus = (res: any) => {
    if (res.ok) {
        return res;
    }
    else {
        const httpError = {
            status: res.status,
            statusText: res.statusText,
            url: res.url
        }
        console.log('server error : ', httpError)
        let errorMessage = translateStatusToErrorMessage(httpError.status);
        throw new Error(errorMessage)
    }

}

const parseJSON = (response: Response) => {
    return response.json();
}

const convertToProjectModels = (data: any[]): Project[] => {
    let projects: Project[] = data.map(convertToProjectModel);
    return projects;
}

const convertToProjectModel = (item: any): Project => {
    return new Project(item);
}

export const projectApi = {
    get(page = 1, limit = 20) {
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
            // .then(delay(600))
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToProjectModels)
            .catch((error: TypeError) => {
                console.log('log client error ' , error);
                throw new Error(
                    'error retriveing data'
                );
            });
    },

    put(project: Project) {
        return fetch(`${url}/${project.id}`, {
            method: 'PUT',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .catch((error:TypeError)=>{
            console.log('log error ', error);
            throw new Error('error while updating')
        })
    }
}