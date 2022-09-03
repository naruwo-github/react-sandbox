import { useEffect, useState } from "react"
import SERVER_PORT from '../config'
const ENDPOINT = `http://localhost:${SERVER_PORT}`

export const useFetch = () => {
    const [data, setData] = useState<string[]>([])
    useEffect(() => {
        fetch(`${ENDPOINT}/users`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return data
}
