import React, {Component} from 'react';
import {Button} from 'reactstrap'
import './classes.css'

class ViewMyClasses extends Component {
        
    
    render() {
        return (
            <div style={{width:'70%', margin: '8%'}}>
                <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Select a Semester</h2>
                <div style={{marginLeft: '1%', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Button color="warning" style={{width: '350px', height: '100px', margin: '1%'}}>Fall 2019</Button>
                    <Button color="info" style={{width: '350px', height: '100px', margin: '1%'}}>Spring 2020</Button>
                    <Button color="success" style={{width: '350px', height: '100px', margin: '1%'}}>Summer 2020</Button>
                </div>
            </div>
            
        );
        
        
    }
}

export default ViewMyClasses;