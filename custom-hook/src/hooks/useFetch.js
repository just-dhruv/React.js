import { useState, useEffect } from 'react'

export default function useFetch(url){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(url);
                const json = await result.json()
                setData(json);
                
            } catch (err) {
                setError(err);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, error, loading }
}