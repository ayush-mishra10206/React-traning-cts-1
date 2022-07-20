import { Project } from "./Project";

export const MOCK_PROJECTS = [
    new Project({
      id: 1,
      name: 'Perosn1',
      descp:'Descp1',
      imageUrl: '/assets/placeimg_500_300_arch4.jpg',
      contractTypeId: 3,
      contractSignedOn: '2013-08-04T22:39:41.473Z',
      budget: 54637,
      isActive: false,
    }),
    new Project({
      id: 2,
      name: 'Person2',
      descp:'Descp2',
      imageUrl: '/assets/placeimg_500_300_arch1.jpg',
      contractTypeId: 4,
      contractSignedOn: '2012-08-06T21:21:31.419Z',
      budget: 91638,
      isActive: true,
    }),
]