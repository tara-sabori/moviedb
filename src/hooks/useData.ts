import axios from "axios";
import { useEffect, useState } from "react";

export interface Data {
    id: number;
    title: string;
    poster: string;
    year: string;
    country: string;
    imdb_rating: string;
    genres: string[];
}

interface Metadata {
    page_count: number;
}

export interface FetchData {
    data: Data[];
    metadata: Metadata;
}

const UseData = (page: number, genre: number) => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [total, setTotal] = useState({} as Metadata);
    const url = genre == 0 ? `https://moviesapi.ir/api/v1/movies?page=${page}` :
        `https://moviesapi.ir/api/v1/genres/${genre}/movies?page=${page}`
    useEffect(() => {
        axios.get<FetchData>(url)
            .then(res => {
                setData(res.data.data);
                setTotal(res.data.metadata);
                setLoading(false);
            })
    }, [page,genre])

    return { data, loading, total };
}

export default UseData;
