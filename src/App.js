//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      books:[
        {id:0, rating: 5, title: 'Harry el sucio', image: 'libro01.jpg'}, 
        {id:1, rating: 1, title: 'The shining', image: 'libro02.jpg'}, 
        {id:2, rating: 2, title: 'Codigo vergo', image: 'libro03.jpg'}, 
        {id:3, rating: 3, title: 'El marditico', image: 'libro04.jpg'}, 
        {id:4, rating: 4, title: 'Sobrenatural', image: 'libro05.jpg'}
      ]
    };
  }

  render(){
    return (
      <div className='app'>
        <Menu title="Libros de terror"/>
        <List items={this.state.books} />
      </div>
    );
  }

}

export default App;
