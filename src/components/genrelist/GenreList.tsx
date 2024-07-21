import UseGenre from "../../hooks/useGenre";
import './genrelist.css'

interface Props {
    genre: number;
    selectedGenre: (id: number) => void
}

const GenreList = ({ genre, selectedGenre }: Props) => {
    const { list } = UseGenre();
    return (
        <>
            <ul className="list">
                <li onClick={()=>selectedGenre(0)} className={genre==0 ? "fw-bold text-warning" :" "}>All Genre</li>
                {
                    list.map(item => <li onClick={()=>selectedGenre(item.id)} className={genre==item.id ? "fw-bold text-warning" :" "} key={item.id}>{item.name}</li>)
                }
            </ul>
        </>
    );
}

export default GenreList;
