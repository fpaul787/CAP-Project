import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import './styles/searchstyles.css'

// We can inject some CSS into the DOM.
const styles = {
  root: {
    flexGrow: 1,
  },

  cards: {
    background: 'lightgray',
    marginTop: 20,
    marginRight: 20,
    width: 300,
    height: 175,
    paddingLeft: 1,
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
    width: 300,
    height: 175,
  },

  clickedCard: {
    background: '#d59f00',

    display: 'block',
    textAlign: 'initial',
    width: 300,
    height: 175,
  },

  regularCard: {
    display: 'block',
    textAlign: 'initial',
    width: 300,
    height: 175,
  },
}

class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [],
      query: [],
      chosenClasses: [],
      chosenClassNames: [],
      courseCount: 0,
      selected: [],
      courseOptions: [],
    }
  }

  componentDidMount() {
    this.getCourses() // fetch our courses
  }

  async getCourses() {
    await fetch('http://localhost:5000/api/courses')
      .then(results => results.json())
      .then(results => this.setState({ courses: results.data }))
  }

  handleCheckboxChange(course, itemIndex, className) {

    
    let tempArray = this.state.chosenClassNames;
    let selectedCards = this.state.selected

    

    // remove if exists
    if (this.state.chosenClasses.includes(course._id)) {
      var index = this.state.chosenClasses.indexOf(course._id)
      if (index > -1) {
        this.state.chosenClasses.splice(index, 1)
      }

      let nameIndex = tempArray.indexOf(className);
      if (nameIndex > -1){
        tempArray.splice(nameIndex, 1);
      }
      selectedCards[itemIndex] = !selectedCards[itemIndex]
    for(let i = 0; i< selectedCards.length; i++){

      if(i != itemIndex){
        selectedCards[i] = false
      }
      
    }
      this.setState({ courseCount: this.state.courseCount  })
    } else {
      
      // remove classes from cards to delected them
      // kinda inefficient, but we'll use for now
      for(let i = 0; i< selectedCards.length; i++){

        if(i != itemIndex){
          selectedCards[i] = false
        }
        
      }
      selectedCards[itemIndex] = !selectedCards[itemIndex]


      this.state.chosenClasses.push(course._id)

      // clear list, then add name
      tempArray = []
      
      tempArray.push(className);

      
      this.setState({ courseCount: tempArray.length  })
    }

    

    this.setState({selected: selectedCards})
    //this.state.selected[itemIndex] = !this.state.selected[itemIndex]

    this.setState({chosenClassNames: tempArray});
    console.log(this.state.chosenClasses)


  }

  addToCart() {
    for (let i = 0; i < this.state.courseCount; i++) {
      let submissiondata = {
        courseID: this.state.chosenClasses[i],
      }

      fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        body: JSON.stringify(submissiondata),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        // .then(data => console.log(data))
    }
  }

  addToEnrolled() {
    for (let i = 0; i < this.state.courseCount; i++) {
      let submissiondata = {
        courseID: this.state.chosenClasses[i],
      }

      fetch('http://localhost:5000/api/enrolled', {
        method: 'POST',
        body: JSON.stringify(submissiondata),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        // .then(data => console.log(data))
    }
  }

  render() {
    
    let addButtons;

    if (this.state.courseCount < 1) {
      addButtons =<div>
       
          <Button

            color="primary"
            style={{
              opacity: '50%',
              paddingLeft: '60px',
              paddingRight: '60px',
            }}
          >
            Add to Cart
          </Button>
   

       
            <Button
              
              color="success"
              style={{
                opacity: '50%',
                paddingLeft: '60px',
                paddingRight: '60px',
                marginLeft: '15px',
              }}
            >
              Enroll
            </Button>
        
    </div>
    } else {
      addButtons =<div><Link
      to={{
        pathname: '/success',
        state: {
          selected: this.state.chosenClassNames,
          type: 'Shopping Cart',
        },
      }}
      >
      <Button
        onClick={this.addToCart.bind(this)}
        color="primary"
        style={{
          paddingLeft: '60px',
          paddingRight: '60px',
        }}
      >
        Add to Cart
      </Button>
    </Link>

    <Link
      to={{
        pathname: '/success',
        state: { selected: this.state.chosenClassNames, type: 'Schedule' },
      }}
    >
      <Button
        onClick={this.addToEnrolled.bind(this)}
        color="success"
        style={{
          paddingLeft: '60px',
          paddingRight: '60px',
          marginLeft: '15px',
        }}
      >
        Enroll
      </Button>
    </Link>
    </div>
    }


    const { classes } = this.props // styles object

    // courses user choose in searchforclasses
    const userCourses = this.props.location.state.query

    
    // populate course options to show user
    // if it is unfilled, populate based on
    // if the name of the course item in
    // userCourses matches a name in big
    // list of courses.
    if (this.state.courseOptions.length == 0) {
      this.state.courses.map(item => {
        for (let i = 0; i < userCourses.length; i++) {
          if (item.name === userCourses[i].name) {
           
          
            
            this.state.courseOptions.push(item)
          }
        }
      })
    }

    
    return (

      
      <div className={classes.root}>
        <div className="courseOptionsArea">
          <h1>Click on Course to Select</h1>
          <Grid container direction={'row'} spacing={3}>

            {this.state.courseOptions.map((courseItem, index) => {

				// determines class of card based on if
				// if was selected.
				// if not selected, class of card is regularCard
				// if selected, class of card is clickedCard
              let cardClassName = !this.state.selected[index]
                ? classes.regularCard 
                : classes.clickedCard
               
               
              return (
                <Card key={index} className={classes.cards}>
                  <ButtonBase
                    onClick={this.handleCheckboxChange.bind(this, courseItem, index, courseItem.name)}
                    className={cardClassName}
                  >
                    <CardContent>
                      <Typography className={classes.title} variant="h4">
                        {courseItem.name}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {courseItem.hour}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Course Number: {courseItem.course_number}
                      </Typography>
                    </CardContent>
                  </ButtonBase>
                </Card>
              )
            })}
          </Grid>
        </div>

            <span className="previousPageButton">
            <Link to="/searchforclasses">
                
                <Button 
               
                color="warning" 
                style={
                    {float: 'left', 
                    marginRight: '50%', 
                    marginLeft: '50px',
                    marginTop: '35px',
                    paddingLeft: '60px', 
                    paddingRight: '60px'}}>
                Back
                </Button>
            </Link>
            </span>
        <span className="selectionArea">
          <strong style={{ marginRight: '50px' }}>
            {this.state.courseCount} Classes Selected.
          </strong>
          
          {addButtons}
          
        </span>
      </div>
    )
  }
}

// withStyles, higher order component that
// allows us to style react
// From react.js: a higher-order component is a
// function that takes a componenet and returns a new
// component.
export default withStyles(styles)(SearchResults)
