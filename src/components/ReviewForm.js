import React from "react";

let e = React.createElement;
export default class ReviewForm extends React.Component{
    render(){
        return (
            <form>
                <p>Your star rating:</p>
                <input type="radio" name="1-star" value="1">1 Star</input>
                <input type="radio" name="2-stars" value="2">2 Stars</input>
                <input type="radio" name="3-stars" value="3">3 Stars</input>
                <input type="radio" name="4-stars" value="1">4 Stars</input>
                <input type="radio" name="5-stars" value="1">5 Stars</input>
                <p>Your review:</p>
                <input type="text" name="review" placeholder="What did you think?"></input>
            </form>
        )
    }
}