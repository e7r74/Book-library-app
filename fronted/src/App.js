import BookList from './components/BookList/Booklist'
import BookFrom from './components/BookFrom/BookFrom'
import Filter from './components/Filter/Filter'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book library app</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookFrom />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  )
}

export default App
