import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  resetFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
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
        <button type="button" onClick={handleResetFilters}>
          Reset filter
        </button>
      </div>
    </div>
  )
}
export default Filter
