import "bootstrap/dist/css/bootstrap.min.css";
import Scifi from "./data/scifi.json";
import BookList from "./components/BookList";
function App() {
  return (
    <>
      <BookList libri={Scifi} />
      {/* <SingleBook
        title={Scifi[0].title}
        img={Scifi[0].img}
        price={Scifi[0].price}
      /> */}
    </>
  );
}

export default App;
