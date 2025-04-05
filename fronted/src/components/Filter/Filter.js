import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  resetFilter,
  setTitleFilter,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  /////////title filter//////////////
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  ///////////author filter///////////////
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }
  const handleOnlyFacoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter())
  }
  //////////reset filter////////////
  const handleResetFilters = () => {
    dispatch(resetFilter())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            value={titleFilter}
            type="text"
            placeholder=" Filter by title ..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            value={authorFilter}
            type="text"
            placeholder="Filter by author ..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFacoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filter
        </button>
      </div>
    </div>
  )
}
export default Filter
