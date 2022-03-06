import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/Search-box/search-box.components'; 
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField:'',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          ()=>{
            return {monsters: users };
          },
          () =>{
            console.log(this.state);
          } 
        )
      );
  }

  onSearchChange=(event)=>{
    
    const searchField=event.target.value.toLocaleLowerCase();
  
    this.setState(()=>{
     return{searchField};
    });
  };

  render() { 
    console.log('render');

    const {monsters,searchField}=this.state;
    const{onSearchChange}=this;

    const filteredMonsters = monsters.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
          <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className='monster-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monster'
        />
      
        <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}
  

export default App;
