import React from 'react';
import Header from '../header/Header';
// import Books from '../books/Books';
// import Footer from '../footer/Footer';
import Bookroom from './Bookroom.styled';
// import Signup from '../signup/Signup';

export const BookRoom: React.FC = () => {
  return (

      <Bookroom className="bookroom">
      <Header />
   
        {/* <Books />
        <Footer />             */}
      </Bookroom>
 
  );
}

export default BookRoom;