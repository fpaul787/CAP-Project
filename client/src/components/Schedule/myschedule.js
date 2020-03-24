import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class MySchedule extends Component {
        
    constructor(props){
        super(props);

        this.state = {
            'totalCourses': [],
            'chosenCourses': []
            
        }
    }

    componentDidMount () {
        this.getCourses();
    }


    getCourses(){
        
        fetch('/api/courses')
        .then(results => results.json())
        .then(results => this.setState({'totalCourses': results.data}));
        
        fetch('/api/enrolled')
        .then(results => results.json())
        .then(results => this.setState({'chosenCourses': results.data}));


    }

    render() {
        return (
            <div>
                <h1>Schedule</h1>
                {this.state.totalCourses.map(function(item, index) {
                    for (let i = 0; i < this.state.chosenCourses.length; i++){
                        if (item._id === this.state.chosenCourses[i].courseID){
                            return <Card
                            border="secondary"
                    
                            style={{ width: '30%', float: 'left', margin: '15px'}}
                          >
                            <Card.Header><Card.Title>{item.name}</Card.Title></Card.Header>
                            <Card.Body>
                              
                              <Card.Text>
                                <p style={{textIndent: '30px', float: 'left'}}>{item.hour}</p>
                            
                              </Card.Text>
                              
                              
                            </Card.Body>
                            
                          </Card>
                         }
                    }
            }, this)}
             </div>
        );
        
        
    }
}

export default MySchedule;