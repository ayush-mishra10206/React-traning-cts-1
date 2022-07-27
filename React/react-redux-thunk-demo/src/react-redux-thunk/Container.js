import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "./action";
// import Form from "./Form";
import List from "./List";
const Form = lazy(() => import("./Form.js"));



export default function Container() {
    const items = useSelector((state) => state.items);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const [isListVisible, setListVisible] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems())
    }, [dispatch])

    const onClickOpenForm = () => {
        setListVisible(true)
    }

    return (
        <div>
            <button onClick={onClickOpenForm}>click</button>
            <List loading={loading} error={error} items={items} />
            {/* {
                isListVisible &&<Form item="" buttonValue="Add" />
            } */}
            {
                isListVisible && <Suspense  fallback={<div>Loading...</div>}>
                    <Form item="" buttonValue="Add" />
                </Suspense>
            }

        </div>
    )
}