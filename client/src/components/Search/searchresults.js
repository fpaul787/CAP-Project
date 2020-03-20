import React, {Component} from 'react';
import { Button } from 'reactstrap';

const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]

class SearchResults extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            'courses': [],
            'query': []
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
    
    render() {
        return (
            <div style={{padding: '30px'}}>
                {this.state.courses.map(function(item, index) {
                    for (let i = 0; i < 20; i++){
                        if (item.name === this.state.query[i]){
                            return <div style={{float: 'left', width: '30%', padding: '20px', margin: '10px', backgroundColor: '#ddd', border: '1px solid black'}}>{item.name} {item.hour}</div>
                        }
                    }
            }, this)}
             </div>
        );
        
        
    }
}

export default SearchResults;