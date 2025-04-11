import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RxBookmark, RxBookmarkFilled } from 'react-icons/rx'
// import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from '../../redux/slices/bookSlice'

import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './BookList.css'

const Booklist = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }
  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesOnlyFavorite = onlyFavoriteFilter ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matchesOnlyFavorite
  })
  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, 'gi')
    console.log(text.split(regex))
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.title, titleFilter)} by{' '}
                <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                {book.sours})
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <RxBookmarkFilled className="star-icon" />
                  ) : (
                    <RxBookmark className="star-icon" />
                  )}
                </span>

                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Booklist
