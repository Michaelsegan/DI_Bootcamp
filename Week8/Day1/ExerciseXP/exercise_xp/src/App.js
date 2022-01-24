import logo from './logo.svg';
import './App.css';
const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <h2>{myelement}</h2>
        <h2>React is {sum} times better with JSX</h2>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        
      </header>
    </div>
  );
}

export default App;
