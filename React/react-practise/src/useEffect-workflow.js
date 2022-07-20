import { useEffect, useState } from "react"





export default function UseEffectEorkFlow() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

    const renderData = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (page === 1) {
                setData([1, 2, 3, 4, 5]);
            }
            else if(page === 2){
                setData([11, 21, 31, 41, 51]);
            }
            else{
                setData(null);
            }
        }, 1000)
    }

    useEffect(renderData, [page]);

    const handleClickPageChange = ()=>{
        setPage((prevState)=>prevState+1);
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
            <p>Current Page:{page}</p>
            <button onClick={handleClickPageChange}>Next</button>
        </>
    )
}