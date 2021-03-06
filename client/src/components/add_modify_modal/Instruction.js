import React from 'react';

export default class Instruction extends React.Component{
    constructor(props){
        super(props);
        this.instruction = React.createRef();
        this.amount = React.createRef()
    }
    state = {
        instruction: ''
    }

    handleInstructionChange = (e) => {
        this.setState({
            instruction: e.target.value
        })
    }


    handleAddInstruction = () => {
        if(this.instruction.current.value.trim() !== ""){
            this.props.add();
        }
    }

    render(){
        return(
            <div className="add-instruction-wrapper" data-id={this.props.dataId}>
                <input 
                    tabIndex={this.props.tabIndex} 
                    type="text" 
                    className="inp-instruction add-edit-recipe-input" 
                    placeholder="Type Instruction"
                    value={this.state.instruction}
                    onChange={this.handleInstructionChange}
                    ref={this.instruction}
                    required 
                />
                <button 
                    type="button" 
                    className="btn-add-ingredient"
                    onClick={this.handleAddInstruction}
                    >+</button>
                <button 
                    type="button" 
                    className="btn-add-ingredient"
                    onClick={this.props.remove}
                    >-</button>
            </div>
        )
    }
}