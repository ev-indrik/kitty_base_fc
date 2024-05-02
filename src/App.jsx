import { useState } from "react";
import "./App.css";

function App() {

  const [searchField, setSearchField] = useState('')

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)

 
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
}

export default App;
