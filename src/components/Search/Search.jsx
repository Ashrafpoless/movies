
import './Search.css'

const Search = ({setMovies, loading, setLoading, setError, search, setSearch, searchFun}) => {
    

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!search.trim()) return;
        if(loading) return;
        setLoading(true);
        try {
            const searchResult = await searchFun(search);
            setMovies(searchResult);
            setError(null);
        } catch (err) {
          console.log(err.message)
          setError(err.message);

        }finally{
          setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ..."
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    )
}

export default Search