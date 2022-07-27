import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "./action";
import Form from "./Form";
import List from "./List";



export default function Container() {
    const items = useSelector((state) => state.items);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems())
    }, [dispatch])
    return (
        <div>
            <Form item="" buttonValue="Add" />
            <List loading={loading} error={error} items={items} />
        </div>
    )
}