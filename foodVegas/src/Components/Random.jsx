import React, { Component } from 'react';
//import data from '../mockData.json';
import Ingrmethod from './Ingrmethod.jsx';


class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item : [],
      isLoaded: false,
    }

  }
  componentDidMount() {
    fetch('http://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(json => {
          this.setState({
              isLoaded: true,
              item: json.meals[0],
            })
          });
        // for mockData to limit APIs fetching
        // this.setState({
        //   isLoaded: true,
        //   item: data.meals[0],
        // })
      }       
      
      
  render() {
    const { item,isLoaded } = this.state;

    if(!isLoaded) {
      return <div>Loading... </div>
    }
    
    else {
      return (
        <div>
          <h1 align="center">{item.strMeal}</h1>
          <img className="recpicture" src={item.strMealThumb} alt="img" style={{width: 350, height: 350}}></img> 
          <Ingrmethod item = {item} />
        
        </div>  
      ) 
    }   
  }
}
 
export default Random;