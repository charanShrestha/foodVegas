import React, { Component } from 'react';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rec: null,
    }
 }

 render() {
  // console.log(this.props)
  return (
    <div >
    { this.props.recipes.map((recipe) => {
          return (
            <div key={recipe.title}  >
              <img src={recipe.image_url} alt={recipe.title}/>
                  <h4 className="description" >
                    { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }                   
                  </h4>   
                  <a className="description" href={ recipe.source_url }>Show more</a> 
                    
            </div>
          );
      })
  
    }
    </div>
    )
  }
}

export default Recipes;