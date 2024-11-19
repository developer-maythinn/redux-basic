import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";

function BooksList() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (name && author) {
      dispatch(addBook({ name, author }));
      setName("");
      setAuthor("");
    }
  };
  return (
    <>
      <h1>Books</h1>
      <input
        type="text"
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Please add a book name"
        value={name}
      />
      <br />
      <input
        type="text"
        required
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Please add author name"
        value={author}
      />
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.name}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BooksList;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../redux/booksSlice';

// export default function BooksList() {
//   const [name, setName] = useState('');
//   const [author, setAuthor] = useState('');
//   const books = useSelector((state) => state.books);
//   const dispatch = useDispatch();

//   const handleAddBook = () => {
//     if (name.trim() && author.trim()) {
//       dispatch(addBook({ name, author })); // Dispatch book object
//       setName('');
//       setAuthor('');
//     }
//   };

//   return (
//     <div>
//       <h1>Books List</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Book Name"
//       />
//       <input
//         type="text"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         placeholder="Author Name"
//       />
//       <button onClick={handleAddBook}>Add Book</button>
//       <ul>
//         {books.map((book, index) => (
//           <li key={index}>
//             <strong>{book.name}</strong> by {book.author}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
