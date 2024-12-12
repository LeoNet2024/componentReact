import "./app.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Book from "../components/book/Book";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Book />
      <Footer />
    </div>
  );
}
