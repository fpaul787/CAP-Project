import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


class Success extends Component {
        

    render() {

        let link; 
        let message;

        if (this.props.location.state.type === "Shopping Cart"){
            message = "Successfully added to cart.";
            link = <div>
                <Link to="/shoppingcart">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '20%'}}>
                    View Shopping Cart
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
                        marginLeft: '20%'}}>
                    View Schedule
                </Button>
            </Link>
            </div>
        } else if (this.props.location.state.type === "Removed from Cart"){
            message = "Courses successfully removed from cart.";
            link = <div>
                <Link to="/shoppingcart">
                <Button 
                    color="primary" 
                    style={
                        {
                        paddingLeft: '60px', 
                        paddingRight: '60px',
                        marginLeft: '20%'}}>
                    View Shopping Cart
                </Button>
            </Link>
            </div>
        }


        return (
            <div style={{margin: '20%'}}>
                <h3>{message}</h3>
                {link}
             </div>
        );
        
        
    }
}

export default Success;