import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


class Success extends Component {
        

    render() {

        let link; 
        let message;
        let courses
        if(this.props.location.state.selected != undefined){
            courses = this.props.location.state.selected.map(course => {
                return <h4 style={{marginLeft: '5%'}}>Course: {course}</h4>
             })
        }else{
            courses = ( <h1></h1>)
        }
        
        
        if (this.props.location.state.type === "Shopping Cart"){
        {/** Fix #28 */}
            message = "Courses successfully added to your shopping cart.";
            link = <div>
                <Link to="/shoppingcart">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '3%'}}>
                    View Shopping Cart
                </Button>
                 </Link>

                {/** Fix #29 */}
                 <Link to="/searchforclasses" style={{marginLeft: '10px'}}>
                    <Button 
                        color="success" 
                        style={
                            {
                            paddingLeft: '60px', 
                            paddingRight: '60px'
                        }}>
                        Search for More Classes
                    </Button>
                 </Link>
            </div>
        } else if (this.props.location.state.type === "Schedule"){
            message = "Courses successfully added to your schedule.";
            link = <div>
                <Link to="/myschedule">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '3%'}}>
                    View Schedule
                </Button>
            </Link>
            {/** Fix #29 */}
            <Link to="/searchforclasses" style={{marginLeft: '10px'}}>
                    <Button 
                        color="success" 
                        style={
                            {
                            paddingLeft: '60px', 
                            paddingRight: '60px'
                        }}>
                        Search for More Classes
                    </Button>
                 </Link>
            </div>
        } else if (this.props.location.state.type === "Removed from Cart"){
            message = "Courses successfully removed from Shopping Cart.";
            link = <div>
                <Link to="/shoppingcart">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '3%'}}>
                    View Shopping Cart
                </Button>
            </Link>
            {/** Fix #29 */}
            <Link to="/searchforclasses" style={{marginLeft: '10px'}}>
                    <Button 
                        color="success" 
                        style={
                            {
                            paddingLeft: '60px', 
                            paddingRight: '60px'
                        }}>
                        Search for More Classes
                    </Button>
                 </Link>
            </div>
        } else if (this.props.location.state.type === "Dropped"){
            message = "Courses successfully removed from your schedule.";
            link = <div>
                <Link to="/myschedule">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '3%'}}>
                    View Schedule
                </Button>
            </Link>
            {/** Fix #29 */}
            <Link to="/dropclasses" style={{marginLeft: '10px'}}>
                    <Button 
                        color="danger" 
                        style={
                            {
                            paddingLeft: '60px', 
                            paddingRight: '60px'
                        }}>
                        Drop More Classes
                    </Button>
                 </Link>
            </div>
        } else if (this.props.location.state.type === "Initialized"){
            message = "Courses successfully Initialized, you may now select classes.";
            link = <div>
                <Link to="/searchforclasses">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '20%'}}>
                    Search My Major Track
                </Button>
            </Link>
            </div>
        }

        return (
            <div style={{marginLeft: '20%', marginTop: '10%'}}>
                <h3>{message}</h3>
                {courses}
                {link}                
             </div>
        );
        
        
    }
}


export default Success;