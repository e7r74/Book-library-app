import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

const Booklist = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const delete_books = useSelector((state) => state.delete_books)
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }
  return (
    <div className="app-block book-list">
      <h2>book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
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
