import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
// import BookListHooks from "./components/BookListHooks";
import BookListClass from "./components/BookListClass";

class App extends Component {
  state = {
    selectedBook: null,
  };

  handleSelectedBook = (asin) => {
    this.setState({ selectedBook: asin });
    // console.log(this.state.selectedBook);
  };

  render() {
    return (
      <div className="App">
        <header className="bg-dark">
          <MyNavbar />
        </header>
        <main className="bg-dark">
          <MyHero />
          {/* <BookListHooks /> */}
          <BookListClass onSelectBook={this.handleSelectedBook} />
        </main>
        <footer className="bg-dark">
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
