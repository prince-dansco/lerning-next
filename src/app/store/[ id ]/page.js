import BookDetails from '@/app/components/ui/sidebar/books/bookDetails';
import { getBookById } from '@/app/fakeData/fake-data';
import React from 'react'

const BookDetailsPage = ({params : {id}}) =>
   {
    const book = getBookById(id);
  return (
    <div>
     <BookDetails book={book}/>
    </div>
  )
}

export default BookDetailsPage;