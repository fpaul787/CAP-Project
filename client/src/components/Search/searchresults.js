import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import {Button} from 'reactstrap'

import '../styles/flowstyles.css';


const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]

const Checkbox = props => (
                            <input type="checkbox" {...props} />
                          );

class SearchResults extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            'courses': [],
            'query': [],
            'chosenClasses': [],
            courseCount: 0
        }
    }

    componentDidMount () {
        this.getCourses();
        
        const handle = this.props.location.state.query;
      
        
        
        for (let i = 0; i < handle.length; i++){
            if (handle[i].selected === true){
                this.state.query.push(handle[i].name);
            }
        }            
      }


    getCourses(){
        

        fetch('/api/courses')
        .then(results => results.json())
        .then(results => this.setState({'courses': results.data}));
    
    }

    handleCheckboxChange(course){
        // remove if exists
        if (this.state.chosenClasses.includes(course._id)){
            var index = this.state.chosenClasses.indexOf(course._id);
            if (index > -1) {
                this.state.chosenClasses.splice(index, 1);
             }
             this.setState({courseCount: this.state.courseCount-1});
        } else {
            this.state.chosenClasses.push(course._id);
            this.setState({courseCount: this.state.courseCount+1});
        }

        console.log(this.state.chosenClasses);

    }
    
    render() {
        return (
            <div>
            <div style={{border: '1px solid grey', padding: '30px', overflowY: 'scroll', height: '720px', padding: '20px', marginLeft: '50px', marginRight: '50px', marginTop: '20px'}}>,
                {this.state.courses.map(function(item, index) {
                    for (let i = 0; i < 20; i++){
                        if (item.name === this.state.query[i]){
                            return <Card
                            border="secondary"
                    
                            style={{ width: '30%', float: 'left', margin: '15px'}}
                          >
                            <Card.Header><Card.Title>{item.name}</Card.Title></Card.Header>
                            <Card.Body>
                              
                              <Card.Text>
                                <p style={{textIndent: '30px', float: 'left'}}>{item.hour}</p>
                                <label>
                                    <Checkbox style={{float: 'right', position: 'absolute', right: '0', marginRight: '30px', width: '25px', height: '25px'}}
                                        
                                        onClick={this.handleCheckboxChange.bind(this, item)}
                                    />
                                    
                                    </label>
                              </Card.Text>
                              
                              
                            </Card.Body>
                            
                          </Card>
                         }
                    }
            }, this)}
            
             </div>
             
             <span style={{float: 'right', marginTop: '20px', marginRight: '50px'}}>
             <strong style={{marginRight: '50px'}}>{this.state.courseCount} Classes Selected.</strong>
                <Button 
                    onClick={() => console.log(this.state.selected)}
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px'}}>
                    Add to Cart
                </Button>
                <Button 
                    onClick={() => console.log(this.state.selected)}
                    color="success" 
                    style={
                        {
                            paddingLeft: '60px', 
                            paddingRight: '60px',
                            marginLeft: '15px'}}>
                    Enroll
                </Button>
            </span>
             </div>
        );
        
        
    }
}

export default SearchResults;