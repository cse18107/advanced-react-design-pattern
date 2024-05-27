import axios from "axios";
import { useEffect, useState } from "react"

export const includeUser = (Component, userId) => {
    return (props) => {
        const [books, setBooks] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/books');
                console.log(response)
                setBooks(response.data[0]);
            })()
        }, []);

        return <Component {...props} books={books} />;
    }
} 