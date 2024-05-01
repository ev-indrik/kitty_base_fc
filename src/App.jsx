import "./App.css";

function App() {
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
