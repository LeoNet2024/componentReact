// function get nothing and return JSX files
import "./book.css";

import BookLink from "./BookLink";

export default function MainBook() {
  return (
    <div className="book">
      <BookLink />
      <img
        src="https://bytearcher.com/products/finish-your-node-app/images/hero-image.png"
        alt=""
      />
      <img src="https://itbook.store/img/books/9781788393935.png" alt="" />

      <img
        src="https://www.webcodegeeks.com/wp-content/uploads/2014/10/nodejs_book.png"
        alt=""
      />
    </div>
  );
}
