import React, {Component} from 'react';
import './styles/flowstyles.css';

class FlowChartBox extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            selected: true,
            selectionColor: {  
                position: 'absolute', 
                top: this.props.top, 
                left: this.props.left, 
                width: this.props.width, 
                height: this.props.height}
        }
    }

    

    handleClick(){
        this.setState({selected: !this.state.selected})
        
        

        if (this.state.selected === true){
            this.setState({
                selectionColor: {  
                    position: 'absolute', 
                    top: this.props.top, 
                    left: this.props.left, 
                    width: this.props.width, 
                    height: this.props.height, 
                    backgroundColor: '#55ff77',
                    opacity: '0.5'}
            });
        } else {
            this.setState({
                selectionColor: {  
                    position: 'absolute', 
                    top: this.props.top, 
                    left: this.props.left, 
                    width: this.props.width, 
                    height: this.props.height
                }
            });
        }
        
    }

    render() {
        
        return (
            <div className="class1" onClick={() => {this.handleClick(); this.props.action();}} 
                style={this.state.selectionColor} >                
             </div>
        );
        
        
    }
}

export default FlowChartBox;