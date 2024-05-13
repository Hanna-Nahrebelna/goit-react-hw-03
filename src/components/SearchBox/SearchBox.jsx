import css from './SearchBox.module.css'

const SearchBox = ({value, onFilter}) => {

  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Finde contacts by name</p>
      <input
        type="search"
        className={css.searchInput}
        placeholder="Search for..."
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
        
    </div>
  );
}

export default SearchBox

