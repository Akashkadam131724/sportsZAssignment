import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';
const url = "https://api.npoint.io/20c1afef1661881ddc9c";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const fetchMyData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json()
      setData(data.playerList)
      console.log(data.playerList);
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err);
    }
  }
  const searchPlayer = (e) => {
    setSearch(e.target.value);
  }
  const filteredCards = data.filter((player) => {
    return (
      player.TName.toLowerCase().includes(search.toLocaleLowerCase()) ||
      player.PFName.toLowerCase().includes(search.toLocaleLowerCase())
    )
  })
  useEffect(() => {
    fetchMyData()
  }, [])

  return (<div className="App">
    
    <div className='input_container'>
      <input
      onChange={searchPlayer}
        type="text" className='search_input'
        placeholder="Type to player name / team name..."
      />
    </div>
    <div className='info_assignment'>
      <h2>SportZ assignment</h2>
      <hr/>
      <ol>
        <li>Functionalities : </li>
        <li>Initial render with ascending order of Value</li>
        <li>Serch with player or Team name</li>
      </ol>
      <hr/>
    </div>
    {
      isLoading ? <h1>Loading...</h1> : <Card renderData={filteredCards} />
    }
    
    
  </div>
  )
}

export default App;










 