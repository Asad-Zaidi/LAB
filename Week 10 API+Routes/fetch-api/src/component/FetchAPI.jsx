import { useState, useEffect } from 'react'
import Home from './Home';

const ApiFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const apiData = await fetch('https://jsonplaceholder.typicode.com/todos');
            const jsonData = await apiData.json();
            setData(jsonData);
        }
        fetchData();
    }, [setData])

    return (

        <>
        <Home/>      

            <h1>calling from apifetch</h1>
            <ul>
                {data.map((item) => (
                    <li  >{item.title}</li>
                )
                )}

            </ul>
        </>
    )
}

export default ApiFetch