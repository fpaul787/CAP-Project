import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Card  from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import '../styles/flowstyles.css';



const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]

// const Checkbox = props => (
//                             <input type="checkbox" {...props} />
//                           );

// We can inject some CSS into the DOM.
const styles = {
    root: {           
        flexGrow: 1
      },
    
    cards: {
        background: "lightgray",
        marginTop: 20 ,
        marginRight: 20,        
        width: 400,
        height: 175,
        paddingLeft: 1
        
    },
      
      title: {
        fontSize: 30,
      },

      checkbox: {
          paddingLeft: 1,
         
      },
      cardAction: {
        display: 'block',
        textAlign: 'initial',
        width: 400,
        height: 175,
      },

      clickedCard : {
        background: "red",
        
        display: 'block',
        textAlign: 'initial',
        width: 400,
        height: 175,
      },
      
      regularCard: {
        
        display: 'block',
        textAlign: 'initial',
        width: 400,
        height: 175,
      }
      
  };

class SearchResults extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            'courses': [],
            'query': [],
            'chosenClasses': [],
            courseCount: 0,
            'selected': [],
            'shownCourse': []
        }
    }

    componentDidMount () {
        
        this.getCourses()
        
        
        const coursesSelected = this.props.location.state.query       
        
        
        for (let i = 0; i < coursesSelected.length; i++){
            
                this.state.query.push(coursesSelected[i])                    
            
        }       
        
      }


    getCourses(){  

        fetch('http://localhost:5000/api/courses')
        .then(results => results.json())
        .then(results => this.setState({'courses': results.data}) )
        .then(_ => {
            this.state.courses.map((item, index) => {

                for (let i = 0; i < this.state.query.length; i++){
                    if (item.name === this.state.query[i].name){
                        this.state.shownCourse.push(item)
                        this.state.selected[index] = false
                    }
                }
                
            })
        })
                
    
        
    }

    handleCheckboxChange(course, itemIndex){
        
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

        
       this.state.selected[itemIndex] = !this.state.selected[itemIndex]
        
        
    }
    
    addToCart(){
        
        for (let i = 0; i < this.state.courseCount; i++){
            let submissiondata = ({
                "courseID" : this.state.chosenClasses[i]
            });

            fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                body: JSON.stringify(submissiondata),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => console.log(data));  


        }
        

    }

    addToEnrolled(){
        for (let i = 0; i < this.state.courseCount; i++){
            let submissiondata = ({
                "courseID" : this.state.chosenClasses[i]
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
    }
    
    render() {

        const {classes} = this.props
        
        
        return (
            <div className={classes.root}>
            <div style={
                {border: '1px solid grey', 
                padding: '30px', 
                overflowY: 'scroll', 
                height: '720px', 
                padding: '20px', 
                marginLeft: '50px', 
                marginRight: '50px', 
                marginTop: '20px'}}>,
                <Grid container direction={'row'} spacing={3} >
                {this.state.courses.map(function(item, index) {
                   
                    for (let i = 0; i < this.state.query.length; i++){
                        if (item.name === this.state.query[i].name){


                            let cardClassName = !this.state.selected[index] ? classes.regularCard : classes.clickedCard
                            
                            return (
                                <Card className={classes.cards}>
                                <ButtonBase 
                                onClick={this.handleCheckboxChange.bind(this, item, index )} 
                                className={cardClassName}>


                                <CardContent>
                                    <Typography className={classes.title}  variant="h4">
                                        {item.name}
                                    </Typography>   
                                    <Typography variant="body2" component="p">
                                        {item.hour}
                                    </Typography> 
                                                                                             
                                </CardContent>   
                                </ButtonBase>                         
                          </Card>)
                         }
                    }
            }, this)}
            </Grid>
             </div>
             
             <span style={{float: 'right', marginTop: '20px', marginRight: '50px'}}>
             
             <strong style={{marginRight: '50px'}}>{this.state.courseCount} Classes Selected.</strong>

             <Link to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Shopping Cart"}}}>
                <Button 
                    onClick={this.addToCart.bind(this)}
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px'}}>
                    Add to Cart
                </Button>
            </Link>


            <Link to={{pathname: '/success', state: {selected: this.state.chosenClasses, type: "Schedule"}}}>
                <Button 
                    onClick={this.addToEnrolled.bind(this)}
                    color="success" 
                    style={
                        {
                            paddingLeft: '60px', 
                            paddingRight: '60px',
                            marginLeft: '15px'}}>
                    Enroll
                </Button>
            </Link>
            </span>
             </div>
        );
        
        
    }
}

export default withStyles(styles) (SearchResults)