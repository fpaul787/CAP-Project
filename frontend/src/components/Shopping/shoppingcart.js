import React, {Component} from 'react';
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
            'checkedCoursesObjects': [],
            loaded: null
            
        }
    }

    componentDidMount () {
        this.getCourses();
        
    }


    getCourses(){
        
        fetch('http://localhost:5000/api/courses')
        .then(results => results.json())
        .then(results => this.setState({'totalCourses': results.data}));
        
        fetch('http://localhost:5000/api/cart')
        .then(results => results.json())
        .then(results => this.setState({'chosenCourses': results.data, loaded: true}));

      

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

            fetch('http://localhost:5000/api/enrolled', {
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
        if (this.state.loaded !== true){
            return <div style={{marginLeft: '35%', marginTop: '10%'}}>Loading...</div>
        }

        if (this.state.chosenCourses.length === 0){
            return <div style={{marginLeft: '25%', marginTop: '10%', width:'550px'}}>
                    <div style={{marginLeft: '140px'}}><h2>Shopping Cart</h2></div>
                    <div><strong>No courses in shopping cart, search and add courses to your schedule</strong></div>
                    <div>
                        <Link to="/searchforclasses">
                        <Button 
                            color="success" 
                            style={
                                {
                                    paddingLeft: '60px', 
                                    paddingRight: '60px',
                                    marginLeft: '130px',
                                    marginTop: '20px'}}>
                            Search for classes
                        </Button>
                    </Link>
                </div>
                </div>
        } else {

        return (
            <div style={{margin: '1%'}}>
                <div style={{overflowY: 'scroll', height: '620px'}}> 
                    <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Shopping Cart</h2>
                    {this.state.totalCourses.map(function(item, index) {
                        for (let i = 0; i < this.state.chosenCourses.length; i++){
                            if (item._id === this.state.chosenCourses[i].courseID){
                                return <Card
                                border="secondary"                        
                                style={{ width: '30%', float: 'left', margin: '15px'}}>
                                <Card.Header>
                                    <Card.Title>{item.name}
                                        </Card.Title>
                                </Card.Header>
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
                            else{
                                return <h1>Fix shopping cart later</h1>
                            }
                        }
                        return <h1>Another Day</h1>
                }, this)}
                </div>
                
                <div style={{marginLeft: '25%'}}>
                    <Link style={{float:'left'}} to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Removed from Cart"}}}>
                        <Button 
                            
                            onClick={this.removeCourses.bind(this)}
                            color="danger" 
                            style={
                                {
                                    paddingLeft: '60px', 
                                    paddingRight: '60px',
                                    height: '60px',
                                    width: '220px',
                                    marginLeft: '40%',
                                    }}>
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
                                    height: '60px',
                                    width: '220px',
                                    marginLeft: '10%',
                                }}>
                            Enroll
                        </Button>
                    </Link>
                </div>
             </div>
        );
        
                                }
    }
}

export default ShoppingCart;