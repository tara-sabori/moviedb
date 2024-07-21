import { Link } from "react-router-dom";

interface Props {
    id: number;
    title: string;
    poster: string;
}
const SearchList = ({ id, title, poster }: Props) => {
    return (
        <div className="d-flex align-items-center border-bottom my-2 overflow-hidden">
            <img src={poster} alt={title} width={100} height={100} className="rounded" />
            <p style={{ marginLeft: "10px" }}>
                <Link className='title' to={`/${id}`}>{title}</Link>
            </p>
        </div>
    );
}

export default SearchList;
