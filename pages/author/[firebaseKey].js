/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';
import { useAuth } from '../../utils/context/authContext';
import { getAuthorBooks } from '../../api/authorData';

export default function ViewBook() {
  const [authorDetails, setAuthorDetails] = useState({});
  const [, setBooks] = useState([]);

  const router = useRouter();

  const { user } = useAuth();

  const getAllAuthorBooks = () => {
    getAuthorBooks(user.uid).then(setBooks);
  };

  useEffect(() => {
    getAllAuthorBooks();
  }, []);

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        <p> Author Email: {authorDetails.email}</p>
        <hr />
        <div>
          {authorDetails.books?.map((book) => (
            <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllAuthorBooks} />
          ))}
        </div>
      </div>
    </div>
  );
}
