import './styles.css'

export const SearchInput = ({ handleChange ,searchValue }) =>{
    return(
        <input 
        className="search-input"
        type="search" 
        onChange={handleChange}
        value={searchValue} />
    )
}