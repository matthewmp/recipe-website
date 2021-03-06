
import React, { Component } from 'react'
import './recipe.css';

export default class RecipeInfoCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showHoverInfo: false
    }
    this.currentCard = React.createRef();
  }
  

  toggleHoverInfo = (e) => {
    this.setState({
      showHoverInfo: !this.state.showHoverInfo
    });
  }

  showHoverState = (e) => {
    this.setState({
      showHoverInfo: true
    })
  }

  clickEvent = (e) => {
    this.props.toggleModal(e, this.currentCard.current.dataset.recipeId);
  }

  render() {
    const hoverClass = this.state.showHoverInfo ? 'recipe-card-hover show' : 'recipe-card-hover hide';
    let recipeDescription = this.props.data.description.length > 40 ? `${this.props.data.description.slice(0,40)}...` : this.props.data.description; 
    
    return (
      <div className="col s12 m4">
        <div className="card" onMouseEnter={this.toggleHoverInfo} onClick={this.clickEvent} data-recipe-id={this.props.data._id} ref={this.currentCard}>
          <div className="card-image">
              <img src="./images/bread.png" alt="bread"/>
            
          </div>
          <span className="card-title">{this.props.data.name}</span>
          <div className="card-content">
              {recipeDescription}
              <p className="card-votes">Votes: {this.props.data.votes}</p>
          </div>
        
          <div className={hoverClass} onMouseLeave={this.toggleHoverInfo} onClick={this.props.toggleModal}>
            <div className="hover-title">
              {this.props.data.name}
            </div>
            <div className="hover-info">
              <span>Serving Amount: {this.props.data.servings}</span>
              <span>Calories: {this.props.data.calories}</span>
              <span>Prep Time: {this.props.data.prepTime1}hrs {this.props.data.prepTime2} mins</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
