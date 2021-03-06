import React, { Component } from 'react'

export default class AddGeneralInfo extends Component {
    constructor(props){
        super(props);
        this.recipeName = React.createRef();
        this.recipeDescription = React.createRef();
    }

    state = {
        formError: ''
    }

    handleTransition = (e) => {
        if((this.recipeName.current.value.trim() !== "") && (this.recipeDescription.current.value.trim() !== "")){
            this.setState({formError: ""})
            this.props.transition(e);
        } 
        else {
            this.setState({formError: "Please fill out all fields."})
        }
    }

    render() {
        // Set tabIndex
        const sectionClass = this.props.currentTransition === "0" ? "add-edit-recipe-view general-info" : "add-edit-recipe-view general-info hidden";
        let formError = this.state.formError;

        return (
            <section className={sectionClass}>
                <div className="add-edit-recipe-label modal-label">Recipe General Info</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-input" 
                        type="text" 
                        placeholder="RECIPE NAME" 
                        onChange={this.props.handleNameChange} 
                        value={this.props.nameVal}
                        ref={this.recipeName}
                        required/>
                    <textarea name="recipe-description" 
                        id="recipe-description" 
                        cols="30" 
                        rows="60" 
                        placeholder="Description..."
                        onChange={this.props.handleDescriptionChange}
                        value={this.props.descriptionVal}
                        ref={this.recipeDescription}
                        required>
                    </textarea>
                    
                    <div className="add-recipe-btn-wrapper" id="add-recipe-btn-prime">
                    <p className="form-error">{formError}</p>
                        <button
                            className="add-recipe"
                            id="generalNext" 
                            type="button" 
                            data-transition="-100" 
                            onClick={this.handleTransition.bind(this)}
                            >Next
                        </button>    
                    </div>
                    
                </div>
            </section>
        )
    }
}
