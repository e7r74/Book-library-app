import { v4 as uuidv4 } from 'uuid'
const createBookWithId = (book, sours) => {
  return {
    ...book,
    sours,
    isFavorite: false,
    id: uuidv4(),
  }
}
export default createBookWithId
