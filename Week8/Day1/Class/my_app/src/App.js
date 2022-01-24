import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Card from './components/Card'
import 'tachyons';
const robots = [
  {id:1,name:'Yotam', email='y@gmail.com', username='yotamh'}
]

function App() {
  return (
    <div>
 

      <Card name={'Yotam'} email={'y@gmail.com'} username={'yotamh'}/>
      <Card name={'michael'} email={'miki@gmail.com'} username={'mikush'}/>
      <Card name={'kiki'} email={'kiko@gmail.com'} username={'shimcha'}/>


     
    </div>
  );
}

export default App;
 qa                                               rta                                                                                