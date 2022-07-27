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

export const projectApi = {
    get(page = 1, limit = 20) {
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
            .then(delay(600))
            .then(checkStatus)

    }
}