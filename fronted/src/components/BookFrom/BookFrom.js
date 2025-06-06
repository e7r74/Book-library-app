import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import { setError } from '../../redux/slices/errorSlice'
// import { addBook } from '../../redux/books/actionCreators'
import { addBook, fetchBook } from '../../redux/slices/bookSlice'
import createBookWithId from '../../utils/createBookWithId'
import booksData from '../../data/books.json'

import './BookFrom.css'
const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    dispatch(addBook(createBookWithId(randomBook, 'random')))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('You must fill title and author'))
    }
  }

  const handleAddRandomBookViaApi = async () => {
    try {
      setIsLoading(true)
      await dispatch(fetchBook())
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>

        <button
          type="button"
          onClick={handleAddRandomBookViaApi}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  )
}
export default BookForm
