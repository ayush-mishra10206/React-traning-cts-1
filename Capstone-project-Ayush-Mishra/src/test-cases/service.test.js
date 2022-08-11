import { getContctData, getProductData, getSpecificProductData, updateFeedback, updategetInTouchData } from '../services'



const data = [
    {
        "id": 1,
        "image": "/assets/Product1.png",
        "price": 850,
        "title": "afca",
        "description": "faef",
        "reviews": []
    },
    {
        "id": 2,
        "image": "/assets/Product2.png",
        "price": 250,
        "title": "afca",
        "description": "faef",
        "reviews": []
    },
    {
        "id": 3,
        "image": "/assets/Product3.png",
        "price": 6750,
        "title": "afca",
        "description": "faef",
        "reviews": [
            {
                "name": "asd",
                "email": "asd",
                "phone": "23e3",
                "reviewText": "assdf",
                "rating": "neutral"
            }
        ]
    },
    {
        "id": 4,
        "image": "/assets/Product4.png",
        "price": 340,
        "title": "afca",
        "description": "faef",
        "reviews": []
    }
]

const contactData = [
    {
        "id": 1,
        "address": "280 ParK Avenue Z,Cross cut Complex, Bangalore, India",
        "phone": [
          "(91) 987 654 3210",
          "(91) 987 654 3211"
        ],
        "email": "contact@sparkclothing.com"
      }
]

describe('services', () => {
    test('should return records', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve(data);
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));

        return getProductData()
            .then((data) => expect(data).toEqual(data));
    });

    test('should find particular record', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve({
            "id": 1,
            "image": "/assets/Product1.png",
            "price": 850,
            "title": "afca",
            "type":"Shirt",
            "description": "faef",
            "reviews": []
        });
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));
        return getSpecificProductData(1)
            .then((data) => {
                expect(data).toEqual(data)
            })

    })

    test('should put particular record', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve({
            id: 2,
            image: "/assets/Product2.png",
            price: 250,
            title: "afca",
            description: "faef",
            reviews: [
                {
                    email: "32",
                    name: "asd",
                    phone: "33",
                    rating: "neutral",
                    reviewText: "23",
                }
            ]
        });
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));
        return updateFeedback({
            email: "32",
            name: "asd",
            phone: "33",
            rating: "neutral",
            reviewText: "23",
        }, 2)
            .then((data) => {
                expect(data).toEqual(data)
            })

    })

    test('should contact records', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve(contactData);
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));

        return getContctData()
            .then((data) => expect(data).toEqual(data));
    });

    test('should post particular record', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });
        response.json = () => Promise.resolve([{
            "name": "asd",
            "email": "fff",
            "phone": "23233",
            "message": "asdasd",
            "id": 1
        }
        ]);
        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));
        return updategetInTouchData(
            {
                name: "asd",
                email: "fff",
                phone: "23233",
                message: "asdasdsdsd",
            }
        )
            .then((data) => {
                expect(data).toEqual(data)
            })

    })
});