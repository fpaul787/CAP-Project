import React, {Component} from 'react';
<<<<<<< HEAD

class DropClasses extends Component {
        
    
    render() {
        return (
            <div>
                <h1>DropClasses</h1>
=======
import {Card} from 'react-bootstrap';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Checkbox = props => (
    <input type="checkbox" {...props} />
  );


class DropClasses extends Component {
        
    constructor(props){
        super(props);

        this.state = {
            'totalCourses': [],
            'enrolledCourses': [],
            'checkedCourses': []
            
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
        .then(results => this.setState({'enrolledCourses': results.data}));


    }

    handleCheckboxChange(course){
        if (this.state.checkedCourses.includes(course)){
            var index = this.state.checkedCourses.indexOf(course);
            if (index > -1) {
                this.state.checkedCourses.splice(index, 1);
             }
             
        } else {
            this.state.checkedCourses.push(course);
            
        }

        console.log(this.state.checkedCourses);
    }

    dropCourses(){
        for (let i = 0; i < this.state.checkedCourses.length; i++){
            axios.delete(`http://localhost:5000/api/enrolled/` + this.state.checkedCourses[i])
            .then(res => {
              console.log(res);
              console.log(res.data);
            });

        }
    }

    render() {
        return (
            <div>
            <div>
                <h1>Select Classes to Drop</h1>
                {this.state.totalCourses.map(function(item, index) {
                    for (let i = 0; i < this.state.enrolledCourses.length; i++){
                        if (item._id === this.state.enrolledCourses[i].courseID){
                            return <Card
                            border="secondary"
                    
                            style={{ width: '30%', margin: '15px',float: 'left'}}
                          >
                            <Card.Header><Card.Title>{item.name}</Card.Title></Card.Header>
                            <Card.Body>
                              
                              <Card.Text>
                                <p style={{textIndent: '30px', float: 'left'}}>{item.hour}</p>
                                <label>
                                    <Checkbox style={{float: 'right', position: 'absolute', right: '0', marginRight: '30px', width: '25px', height: '25px'}}
                                        
                                        onClick={this.handleCheckboxChange.bind(this, this.state.enrolledCourses[i]._id)}
                                    />
                                    
                                    </label>
                              </Card.Text>
                              
                              
                            </Card.Body>
                            
                          </Card>
                         }
                    }
            }, this)}
             </div>
             <div>
                 <Link to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Schedule"}}}>
                <Button 
                    onClick={this.dropCourses.bind(this)}
                    color="danger" 
                    style={
                        {
                            paddingLeft: '60px', 
                            paddingRight: '60px',
                            marginLeft: '40%'}}>
                    Drop Courses
                </Button>
            </Link>
             </div>
>>>>>>> origin/manny
             </div>
        );
        
        
    }
}

export default DropClasses;