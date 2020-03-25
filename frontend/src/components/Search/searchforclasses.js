import React, {Component} from 'react';
import '../styles/flowstyles.css';
import FlowChartBox from '../flowchartbox';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom';


class SearchForClasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: [
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false, 
                false],
            courseNames: ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Systems Programming", "Operating Systems", "Senior Project"],
            courses: [
                {
                    name: "Calculus I",
                    selected: false
                },
                {
                    name: "Natural Science I",
                    selected: false
                },
                {
                    name: "Natural Science II",
                    selected: false
                },
                {
                    name: "Programming I",
                    selected: false
                },
                {
                    name: "Introduction to Computing",
                    selected: false
                }, 
                {
                    name: "Professional and Technical Writing",
                    selected: false
                },
                {
                    name: "Calculus II",
                    selected: false
                }, 
                {
                    name: "Physics I",
                    selected: false
                },
                {
                    name: "Discrete Math",
                    selected: false
                },
                {
                    name: "Discrete Structures",  
                    selected: false
                },
                {
                    name: "Programming II",
                    selected: false
                },
                {
                    name: "Technology in the Global Arena",
                    selected: false
                },
                {
                    name: "Physics II", 
                    selected: false
                },
                {
                    name:"Computer Architecture", 
                    selected: false
                },
                {
                    name:"Data Structures",  
                    selected: false
                },
                {
                    name:"Software Engineering I",
                    selected: false
                },
                {
                    name: "Statistics", 
                    selected: false
                },
                {
                    name: "Systems Programming",
                    selected: false
                },
                {
                    name: "Operating Systems", 
                    selected: false
                },
                {
                    name: "Senior Project",
                    selected: false
                }
                
            ],
            queryCourses: []
        }
    }

    handleClick(index){
        this.state.courses[index].selected = !this.state.courses[index].selected;
        this.state.queryCourses.push(this.state.courses[index])
        
    }

    checkColor(index){
        if (this.state.selected[index] === true) {
            return '';
        } else {
            return 'green';
        }
    }

    // Not needed
    // search(){
        
    //     for (let i = 0; i < this.state.selected.length; i++){
    //         if (this.state.selected[i] === true){
    //             string += this.state.courseNames[i] + ", ";
    //         }
    //     }        
    // }

  

    render() {
        return (
            <div>
                <div style={{padding: '30px', position: 'relative'}}>
                    <FlowChartBox action={this.handleClick.bind(this,0)}   top={44}  left={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,1)}   top={44}  left={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,2)}   top={44}  left={308} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,3)}   top={44}  left={690} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,4)}   top={44}  left={840} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,5)}   top={44}  left={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,6)}   top={177} left={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,7)}   top={177} left={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,8)}   top={188} left={328} width={101} height={60}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,9)}   top={188} left={469} width={93} height={58}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,10)}  top={177} left={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,11)}  top={177} left={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,12)}  top={310} left={175} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,13)}  top={310} left={424} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,14)}  top={310} left={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,15)}  top={310} left={974} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,16)}  top={475} left={41} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,17)}  top={426} left={692} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,18)}  top={475} left={424} width={116} height={84}></FlowChartBox>
                    <FlowChartBox action={this.handleClick.bind(this,19)}  top={475} left={974} width={116} height={84}></FlowChartBox> 
                    <img src={ require('../../img/flowchart.png') } alt="Flow Chart" />
                </div>
                
                <Link to={{pathname: '/searchresults', state: {query: this.state.queryCourses}}}>
                    <Button 
                   
                    color="success" 
                    style={
                        {float: 'right', 
                        marginRight: '30%', 
                        paddingLeft: '60px', 
                        paddingRight: '60px'}}>
                    Search
                    </Button>
                </Link>
            </div> 
        );
    }
}

export default SearchForClasses;