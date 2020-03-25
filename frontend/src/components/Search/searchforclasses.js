import React, {Component} from 'react';
import '../styles/flowstyles.css';
import FlowChartBox from '../flowchartbox';
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom';


class SearchForClasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            
            courses: [
                {
                    name: "Calculus I",
                    numbr: 2311,
                    selected: false
                },
                {
                    name: "Natural Science I",
                    numbr: 0,
                    selected: false
                },
                {
                    name: "Natural Science II",
                    numbr: 1,
                    selected: false
                },
                {
                    name: "Programming I",
                    numbr: 3337,
                    selected: false
                },
                {
                    name: "Introduction to Computing",
                    numbr: 1920,
                    selected: false
                }, 
                {
                    name: "Professional and Technical Writing",
                    numbr: 3249,
                    selected: false
                },
                {
                    name: "Calculus II",
                    numbr: 2312,
                    selected: false
                }, 
                {
                    name: "Physics I",
                    numbr: 2048,
                    selected: false
                },
                {
                    name: "Discrete Math",
                    numbr: 2104,
                    selected: false
                },
                {
                    name: "Discrete Structures",  
                    numbr: 3100,
                    selected: false
                },
                {
                    name: "Programming II",
                    numbr: 3337,
                    selected: false
                },
                {
                    name: "Technology in the Global Arena",
                    numbr: 3095,
                    selected: false
                },
                {
                    name: "Physics II", 
                    numbr: 2049,
                    selected: false
                },
                {
                    name:"Computer Architecture", 
                    numbr: 3102,
                    selected: false
                },
                {
                    name:"Data Structures",  
                    numbr: 3530,
                    selected: false
                },
                {
                    name:"Software Engineering I",
                    numbr: 4010,
                    selected: false
                },
                {
                    name: "Statistics", 
                    numbr: 3033,
                    selected: false
                },
                {
                    name: "Systems Programming",
                    numbr: 4338,
                    selected: false
                },
                {
                    name: "Operating Systems", 
                    numbr: 4610,
                    selected: false
                },
                {
                    name: "Senior Project",
                    numbr: 4911,
                    selected: false
                }
                
            ],
            queryCourses: []
        }
    }

    remove

    handleClick(index){
        
        // We might need to change data so that each course object
        // can have a unique number. That way, we can have an array
        // of course numbers and remove them when necessary.
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