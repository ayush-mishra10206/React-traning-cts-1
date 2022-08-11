import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import TabProducts from "../Components/tabProducts/TabProducts"


const data = {
    id: 1,
    image: "/assets/Product1.png",
    price: 850,
    title: "afca",
    description: "faef",
    reviews: []
}

describe('<TabProduct/>', () => {
    test('testing tab product', () => {
        render(
            <MemoryRouter>
                <TabProducts data={data} />
            </MemoryRouter>
        )
    })
})