import "bootstrap/dist/css/bootstrap.min.css";
import Scifi from "./data/scifi.json";
import BookList from "./components/BookList";
function App() {
  return (
    <>
      <BookList libri={Scifi} />
    </>
  );
}

export default App;
