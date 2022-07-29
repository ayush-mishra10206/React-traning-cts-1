


import { MOCK_PROJECTS } from '../MockProjects';
import { Project } from '../Project';
import { projectApi } from '../projectApi';

describe('projectApi', () => {
    test('should return records', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve(MOCK_PROJECTS);
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));

        return projectApi
            .get()
            .then((data) => expect(data).toEqual(MOCK_PROJECTS));
    });

    test('should find particular record', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve(new Project({
            id: 1,
            name: 'Perosn1',
            description: 'Descp1',
            imageUrl: '/assets/placeimg_500_300_arch4.jpg',
            contractTypeId: 3,
            contractSignedOn: '2013-08-04T22:39:41.473Z',
            budget: 54637,
            isActive: false,
        }));
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));
        return projectApi
            .find(1)
            .then((data) => {
                expect(data).toEqual(new Project({
                    id: 1,
                    name: 'Perosn1',
                    description: 'Descp1',
                    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
                    contractTypeId: 3,
                    contractSignedOn: '2013-08-04T22:39:41.473Z',
                    budget: 54637,
                    isActive: false,
                }))
            })

    })

    test('should put particular record', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve(new Project({
            id: 1,
            name: 'Perosn1',
            description: 'Descp1',
            imageUrl: '/assets/placeimg_500_300_arch4.jpg',
            contractTypeId: 3,
            contractSignedOn: '2013-08-04T22:39:41.473Z',
            budget: 54637,
            isActive: false,
        }));
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));
        return projectApi
            .put(new Project({
                name: 'Perosn2',
                description: 'Descp1',
                imageUrl: '/assets/placeimg_500_300_arch4.jpg',
                contractTypeId: 3,
                contractSignedOn: '2013-08-04T22:39:41.473Z',
                budget: 54637,
                isActive: false,
            }))
            .then((data) => {
                expect(data).toEqual(new Project({
                    id: 1,
                    name: 'Perosn1',
                    description: 'Descp1',
                    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
                    contractTypeId: 3,
                    contractSignedOn: '2013-08-04T22:39:41.473Z',
                    budget: 54637,
                    isActive: false,
                }))
            })

    })
});