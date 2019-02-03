import React, { Component } from 'react';

class Ingrmethod extends Component{
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      text: 'click for ingredients or method',
      ingredients: [],
    }        
  }
  
  getIngredients() {
    const ingreArray = [];
    const entries = Object.entries(this.state.item)
    for (const [k, v] of entries) {
      if ((k.indexOf('strIngredient') > -1) && v!== '') ingreArray.push(v);
    }
    const ingredients = ingreArray.join(',   ')
    this.setState({ text: ingredients});
  }

  clicked(text) {
    this.setState({ text: text });
  }
  
  render() {

    return(
      <div>
        <button onClick = { (e) => { this.getIngredients(); } }> 
        Ingredients
        </button>

        <button onClick = { (e) => { this.clicked(this.state.item.strInstructions); } }> 
        Method
          </button>          
          <a target="_blank" href={this.state.item.strYoutube}>Video</a>

        <p> {this.state.text} </p>
        
        <footer>Source: {this.state.item.strSource}</footer>
      </div>
    )
  }

}

export default Ingrmethod;