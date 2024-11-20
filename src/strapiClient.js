import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data,setData]= useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            console.log('Fetching URL:', url); // Log URL
            const res = await fetch(url);
            const json = await res.json();
            console.log('Fetched Data:', json); // Log respons
            setData(json);
          } catch (error) {
            console.error('Error fetching data:', error); // Log error
            setError(error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, [url]);
      

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
                
            } catch (error) {
                setError(error)
                setLoading(false)
                
            }
        }

        fetchData()
    
    },[url])

    return {loading, error, data}
}

export default useFetch