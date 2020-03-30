import React, {Component} from 'react';
import './styles/flowstyles.css';
import FlowChartBox from './flowchartbox';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom';


class SearchForClasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: [false, false, false, false, false, false, false, false, 
                false, false, false, false, false, false, false, false, false, false, false, false],
            courseNames: ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Systems Programming", "Operating Systems", "Senior Project"]
        }
    }

    handleClick(index){
        this.state.selected[index] = !this.state.selected[index];
    
    }

    checkColor(index){
        if (this.state.selected[index] === true) {
            return '';
        } else {
            return 'green';
        }
    }

    search(){
        let string = 'Classes Selected: ';
        for (let i = 0; i < 20; i++){
            if (this.state.selected[i] === true){
                string += this.state.courseNames[i] + ", ";
            }
        }



        console.log(string);
    }

  

    render() {
        return (
            <div>
                <div style={{padding: '30px', position: 'relative'}}>
                    <FlowChartBox action={this.handleClick.bind(this,0)} t={44} l={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,1)}  t={44} l={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,2)}  t={44} l={308} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,3)}  t={44} l={690} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,4)} t={44} l={840} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,5)}  t={44} l={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,6)}  t={177} l={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,7)}  t={177} l={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,8)}  t={188} l={328} width={101} height={60}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,9)}  t={188} l={469} width={93} height={58}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,10)}  t={177} l={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,11)}  t={177} l={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,12)}  t={310} l={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,13)}  t={310} l={424} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,14)}  t={310} l={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,15)}  t={310} l={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,16)}  t={475} l={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,17)}  t={426} l={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,18)}  t={475} l={424} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,19)} t={475} l={974} width={116} height={84}></FlowChartBox>
                    <img src={ require('../img/flowchart.png') } />
                </div>
                
                <Link to={{pathname: '/searchresults',state: {query: this.state.selected}}}><Button onClick={() => console.log(this.state.selected)}color="success" style={{float: 'right', marginRight: '30%', paddingLeft: '60px', paddingRight: '60px'}}>Search</Button></Link>
             </div> 
        );
    }
}

export default SearchForClasses;