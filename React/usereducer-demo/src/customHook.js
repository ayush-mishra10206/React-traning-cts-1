import { useFetch } from "./customHooks/useFetch"




export default function CustomHook(){

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return(
        <>
            {
                data && data.map((item)=>{
                return <p>
                    {item.title}
                </p>
                })
            }
        </>
    )
}