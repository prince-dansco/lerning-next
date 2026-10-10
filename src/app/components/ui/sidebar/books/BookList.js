import BookCard from "./bookCard";


const BookList = ({books}) => {
  return(
    <>
      {
        books.map((book) => {
          return(
            <BookCard key={book.id} book={book} />
          )
        })
      }
    </>
  )
}
export default BookList;
