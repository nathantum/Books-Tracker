import { useEffect } from "react"
import BookDetails from "../components/BookDetails"
import BookForm from "../components/BookForm"
import { useBooksContext} from "../hooks/useBooksContext"
import {usAuthContext, useAuthContext} from "../hooks/useAuthContext"

const Home = () => {
  const {books, dispatch} = useBooksContext()
  const {user} = useAuthContext()

  useEffect(() => {
      const fetchBooks = async () => {
      const response = await fetch('/api/books', {
        headers : {
          'Authorization' : `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok){
        dispatch({type:'SET_BOOKS', payload: json})
      }
    }

    if(user){
      fetchBooks()
    }
    
  }, [dispatch, user])
  return (
    <div className="home">
      <div className="books">
          {books && books.map((book) => (
            <BookDetails key={book._id} book = {book}/>
          ))}
      </div>
      <BookForm />
    </div>
  )
}

export default Home