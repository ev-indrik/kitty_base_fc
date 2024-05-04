import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);

    const filteredMonsters = monsters.filter((it) => {
      return it.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Furry Kitty Monsters</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="🐈 search fur monsters"
          className="monster_search-box"
        />

        <CardsList monsters={filteredMonsters} />
      </div>
    );
  };
}

export default App;
