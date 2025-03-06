import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import classes from './app.module.css';

export default function App() {
  return (
    <section className={classes.app}>
      <Header />

      <main></main>

      <Footer />
    </section>
  );
}
