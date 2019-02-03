import React, { Component } from 'react';
import Recipes from './Recipes';

const API_KEY = '107187fb1b02e15d8242454e903fccd7';

class Hitme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      }
    this.getRecipe = this.getRecipe.bind(this);
    }

    getRecipe = async (e) => {
      const recipeName = e.target.elements.recipeName.value; 
      e.preventDefault();
      const call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
      const json = await call.json();
       this.setState({
          recipes: json.recipes,
          })
  
    }
  
    componentDidMount = () => {
      const json = localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({ recipes });
    }

    componentDidUpdate = () => {
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem("recipes", recipes);
  }

  render() {
    return ( 
      <div>
        <h1 className="maintitle">What are you in mood for..</h1>
        <form className="description" onSubmit={ this.getRecipe}> 
            <input className="theinput" type="text" name="recipeName"/>
            <button>Hit me</button>
        </form>
        <Recipes recipes={this.state.recipes} />
      </div>

    );
  }
}

export default Hitme;