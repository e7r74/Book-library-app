import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RxBookmark, RxBookmarkFilled } from 'react-icons/rx'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'

import {
  selectTitleFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice'
import './BookList.css'

const Booklist = () => {
  const books = useSelector((state) => state.books)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

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
    console.log({ title: book.title, matchesTitle })
    return matchesTitle && matchesAuthor
  })

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
                {++i}. {book.title} by <strong>{book.author}</strong>
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
