import React from 'react'
import { getAllBooks } from '../fakeData/fake-data'
import BookLists from '../components/ui/sidebar/books/BookList';


const StoreList = () => {
  const books = getAllBooks();

  return (
    <BookLists books={books} />
  )
}

export default StoreList