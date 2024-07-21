import axios from "axios";
import { useEffect, useState } from "react";
import { Data, FetchData } from "../../hooks/useData";
import SearchList from "../searchlist/SearchList";
import './searchbox.css'

const SearchBox = () => {

    const [search, setSearch] = useState<string>('');
    const [result, setSResult] = useState<Data[]>([]);

    useEffect(() => {
        axios.get<FetchData>(`https://moviesapi.ir/api/v1/movies?q=${search}`)
            .then(res => setSResult(res.data.data))
    }, [search]);
    return (
        <div className="searchBox p-3 col-12 col-md-9">
            <input type="text"
                className="form-control"
                placeholder='search...'
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="result">
                {
                    search.length > 0 &&
                    result.map(item => <SearchList key={item.id} {...item} />)
                }
            </div>
        </div>

    );
}

export default SearchBox;
