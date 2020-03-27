import React, {Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';

const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
                        "Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
                        "Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
                        "Statistics", "Operating Systems", "Systems Programming", "Senior Project"]

class BrowseCatalog extends Component {
        
    
    render() {
        return (
            <div style={{width: '90%', margin: '1%'}}>
                 <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Course Catalog and Degree Info</h2>
                 <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>[======Progress======]</h1>
                 <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Completion of Computer Science Degree</h3>
                 {courseNames.map(function(item, index) {
                     return <Card body style={{float: 'left', margin: '2%', width: '275px', height: '150px', padding: '10px'}}>
                                <CardTitle><strong>{item}</strong></CardTitle>
                                <CardText>Supporting details.</CardText>
                                <Button color="info" style={{width: '80px'}}>Info</Button>
                            </Card>
                     
        
                 })};
             </div>
        );
        
        
    }
}

export default BrowseCatalog;