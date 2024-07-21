import { Container, Row } from 'react-bootstrap';
import MovieCard from '../../components/moviecard/MovieCard';
import UseData from '../../hooks/useData';
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import GenreList from '../../components/genrelist/GenreList';
import SearchBox from '../../components/searchbox/SearchBox';
import DarkMode from '../../components/darkmode/DarkMode';
import Loader from '../../components/loader/Loader';

const Home = () => {
    const [page, setPage] = useState<number>(1);
    const [genre, setGenre] = useState<number>(0)
    const { data, loading, total } = UseData(page, genre);

    const handlePageClick = (event: any) => {
        setPage(event.selected + 1)
        window.scrollTo({ top: 0 });
    }

    const selectedGenre = (id: number) => {
        setPage(1);
        setGenre(id);
    }

    return (
        <Container>
            <div className="row justify-content-between">
                <SearchBox />
                <DarkMode />
            </div>

            {
                loading ? <Loader/> : <GenreList genre={genre} selectedGenre={selectedGenre} />
            }

            <Row className='gy-4' lg={3} md={2} xs={1}>
                {
                    data.map(item => <MovieCard key={item.id} {...item} />)
                }
            </Row>

            <footer className='py-5'>
                <ReactPaginate
                    className='pagination justify-content-center'
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={total.page_count}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    activeClassName='active'
                />
            </footer>
        </Container>
    );
}

export default Home;
