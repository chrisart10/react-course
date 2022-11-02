import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, SetData] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        setError(res.message)
                        throw Error('Could not fetch data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    SetData(data)
                    SetIsPending(false)
                })
                .catch((err) => {
                    SetIsPending(false)
                    setError(err.message)
                    console.log(err.message)
                })
        }, 1000)
    }, [url])
    return { data, isPending, error }
}
export default useFetch