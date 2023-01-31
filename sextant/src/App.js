function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>, 
    <div class="header">
      <a class="logo" href="#logo">logo</a>
      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Who we are</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
      <div class="header-right">
        <a class="active" href="#contact">Contact us</a>
      </div>
    </div>
  );
}
export default App;



