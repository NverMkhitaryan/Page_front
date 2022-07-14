import './App.sass';
import Author from './components/Author';
import Books from './components/Books';
import Header from './components/Header';
import Partners from './components/Partners';
import Promo from './components/Promo';
import GetBookCopy from './components/GetBookCopy';
import Learnings from './components/Learnings';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo />
      <Books />
      <Author />
      <Partners />
      <GetBookCopy />
      <Learnings />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
