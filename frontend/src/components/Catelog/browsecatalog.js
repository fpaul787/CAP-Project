import React, {Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';
import {ProgressBar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Technical Writing", "Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]
                    
const courses = [{name: "Calculus I",
                    id: "MAC2311"
                    },
                {name: "Natural Science I",
                   id: "NSE1"
                  },
                {name: "Natural Science II",
                  id: "NSE2"
                 },
                {name: "Programming I",
                 id: "COP2210"
                },
                {name: "Introduction to Computing",
                  id: "CGS1920"
                 },
                {name: "Technical Writing",
                 id: "ENC3214"
                },
                {name: "Calculus II",
                  id: "MAC2312"
                 },
                 {name: "Physics I",
                  id: "PHY2048"
                 },
                {name: "Discrete Math",
                 id: "MAD2104"
                },
                {name: "Discrete Structures",
                  id: "COT3100"
                 },
                {name: "Programming II",
                 id: "COP3337"
                },
                {name: "Technology Global Arena",
                  id: "CGS3095"
                 },
                 {name: "Physics II",
                 id: "PHY2049"
                },
                {name: "Computer Architecture",
                    id: "CDA3102"
                    },
                {name: "Data Structures",
                   id: "COP3530"
                  },
                {name: "Software Engineering I",
                  id: "CEN4010"
                 },
                {name: "Statistics",
                 id: "STA3033"
                },
                {name: "Operating Systems",
                    id: "COP4610"
                    },
                {name: "Systems Programming",
                   id: "COP4338"
                  },
                {name: "Senior Project",
                  id: "CIS4911"
                 }
                ]

class BrowseCatalog extends Component {
        

    constructor(props){
        super(props);
        this.state = {
            completedCourses: [],
            completedCount: 0,
            loaded: false,
            courses: [
                {
                    name: "Calculus I",
                    numbr: 2311,
                    selected: true
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
                    name: "Operating Systems",
                    numbr: 4610,
                    selected: false
                },
                {
                    name: "Systems Programming", 
                    numbr: 4338,
                    selected: false
                },
                {
                    name: "Senior Project",
                    numbr: 4911,
                    selected: false
                }
                
            ],
        }
    }

    componentDidMount(){
        
            fetch('http://localhost:5000/api/completed')
            .then(results => results.json())
            .then(results => this.setState({'completedCourses': results.data[0], loaded: true})); 
        
        
    }
    
    render() {

        if (this.state.loaded === true){
            let obj = this.state.completedCourses;
            this.state.completedCount = 0;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                  if (obj[key] === true){
                    this.state.completedCount = this.state.completedCount +1;
                    //this.setState({completedCount: this.state.completedCount+1});    
                    }
                }
              }
            
            let completionPercentage = (this.state.completedCount / 20)*100;
              
            
            return (
                <div style={{width: '90%', margin: '1%'}}>
                     <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Course Catalog and Degree Info</h2>
                     <ProgressBar animated now={completionPercentage} />
                                      <h3 style={{margin: '10px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>{completionPercentage}% of Computer Science Degree Complete! </h3>
                                      <h4 style={{margin: '10px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>{(100-completionPercentage)/5} Classes Remaining. </h4>
                     {courses.map(function(item, index) {
                         let personalArr = [];
                         personalArr.push(this.state.courses[index]);
                         
                         return <Card body style={{float: 'left', margin: '2%', width: '200px', height: '150px', padding: '10px'}}>
                                    <CardTitle><strong>{item.name}</strong></CardTitle>
                                    <CardText>Supporting details.</CardText>
                                    <Link to={{pathname: '/searchresults', state: {query: personalArr}}}>
                                        <Button 
                                    
                                        color="info" 
                                        style={
                                            {width: 'auto'}}>
                                        Search All {item.id}
                                        </Button>
                                    </Link>
                                </Card>
                         
            
                     }, this)}
                 </div>
            )
        } else {
            return (<div>Loading...</div>);
        }
        
    
        
        
    }
}

export default BrowseCatalog;