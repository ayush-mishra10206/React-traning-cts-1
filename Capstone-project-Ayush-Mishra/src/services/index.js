import axios from "axios";
import { useDispatch } from "react-redux";
import { productDataAction } from "../redux/actions";
import { store } from "../redux/store";



export const getProductData = async () => {
    const response = await axios.get("http://localhost:5000/data");
    store.dispatch(productDataAction(response.data))
}


export const getSpecificProductData = async (id) => {
    const specificProduct = await axios.get(`http://localhost:5000/data/${id}`);
    return specificProduct.data
}

export const updateFeedback = async (data, id) => {
    const updateProduct = await axios.patch(`http://localhost:5000/data/${id}/`, data);
}

export const getContctData = async () => {
    const contatctData = axios.get("http://localhost:5000/contactData")
    return contatctData;
}

export const updategetInTouchData = async (data) => {
    await axios.post("http://localhost:5000/getInTouchData", data);
}