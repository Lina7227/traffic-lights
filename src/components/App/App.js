import "./App.css";
import Card from "../Card/Card";

function App() {
  return (
    <div className="page">
      <header className="header">
        <p className="header__title">Traffic-lights</p>
      </header>
      <main className="content">
        <ul className="content__table">
          <Card />
        </ul>
      </main>
    </div>
  );
}

export default App;
