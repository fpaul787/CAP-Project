import React, {Component} from 'react';
<<<<<<< HEAD

class ShoppingCart extends Component {
        
    
    render() {
        return (
            <div>
                <h1>ShoppingCart</h1>
=======
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import axios from 'axios';

const Checkbox = props => (
    <input type="checkbox" {...props} />
  );


class ShoppingCart extends Component {
        
    constructor(props){
        super(props);

        this.state = {
            'totalCourses': [],
            'chosenCourses': [],
            'checkedCoursesID': [],
            'checkedCoursesObjects': []
            
        }
    }

    componentDidMount () {
        this.getCourses();
    }


    getCourses(){
        
        fetch('/api/courses')
        .then(results => results.json())
        .then(results => this.setState({'totalCourses': results.data}));
        
        fetch('/api/cart')
        .then(results => results.json())
        .then(results => this.setState({'chosenCourses': results.data}));


    }

    handleCheckboxChange(courseID){
        // remove if exists
       
        if (this.state.checkedCoursesID.includes(courseID._id)){
            var index = this.state.checkedCoursesID.indexOf(courseID._id);
            if (index > -1) {
                this.state.checkedCoursesID.splice(index, 1);
                this.state.checkedCoursesObjects.splice(index,1);
             }
             
        } else {
            this.state.checkedCoursesID.push(courseID._id);
            this.state.checkedCoursesObjects.push(courseID);
        }

        console.log(this.state.checkedCourses);

    }


    removeCourses(){
        for (let i = 0; i < this.state.checkedCoursesID.length; i++){
            axios.delete(`http://localhost:5000/api/cart/` + this.state.checkedCoursesID[i])
            .then(res => {
              console.log(res);
              console.log(res.data);
            });


        }
    }

    enrollInCourses(){

        for (let i = 0; i < this.state.checkedCoursesObjects.length; i++){
            let submissiondata = ({
                "courseID" : this.state.checkedCoursesObjects[i].courseID
            });

            fetch('/api/enrolled', {
                method: 'POST',
                body: JSON.stringify(submissiondata),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => console.log(data));  

        }

        this.removeCourses();
        
    }


    render() {
        return (
            <div>
                <div>
                    <h1>ShoppingCart</h1>
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
                                    <label>
                                        <Checkbox style={{float: 'right', position: 'absolute', right: '0', marginRight: '30px', width: '25px', height: '25px'}}
                                            
                                            onClick={this.handleCheckboxChange.bind(this,this.state.chosenCourses[i])}
                                        />
                                        
                                        </label>
                                </Card.Text>
                                
                                
                                </Card.Body>
                                
                            </Card>
                            }
                        }
                }, this)}
                </div>
                <br />
                <div>
                    <Link to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Removed from Cart"}}}>
                        <Button 
                            
                            onClick={this.removeCourses.bind(this)}
                            color="danger" 
                            style={
                                {
                                    paddingLeft: '60px', 
                                    paddingRight: '60px',
                                    marginLeft: '40%'}}>
                            Remove From Cart
                        </Button>
                    </Link>
                    <Link to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Schedule"}}}>
                        <Button 
                            
                            onClick={this.enrollInCourses.bind(this)}
                            color="success" 
                            style={
                                {
                                    paddingLeft: '60px', 
                                    paddingRight: '60px',
                                    marginLeft: '40%'}}>
                            Enroll
                        </Button>
                    </Link>
                </div>
>>>>>>> origin/manny
             </div>
        );
        
        
    }
}

export default ShoppingCart;