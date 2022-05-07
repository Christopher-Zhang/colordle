import React, { Component } from 'react';
const GRAY = "lightslategrey";
const YELLOW = "yellow";
const GREEN = "green";
const COLORS = [GRAY, YELLOW, GREEN];

class Tile extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: props.color,
            value: props.value
        }
    }
    render(){
        let css = {
            height: "40px", 
            width: "40px", 
            backgroundColor: this.state.color,
            margin: "2px",
            borderStyle: "solid",
            borderColor: "black",
            color: "black",
            textAlign: "center"
        };
        return(
        // <div className={this.props.className} style={css}>
        //     <p>{this.state.value}</p> 
        //     {/* <input value={this.state.value} type="text"></input> */}
        // </div>
            <input style={css} className={this.props.className} value={this.state.value} type="text"></input>
        );
    }
    componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value || prevProps.color !== this.props.color){
            this.setState({value: this.props.value, color: this.props.color});
        }        
    }
}
export default Tile;