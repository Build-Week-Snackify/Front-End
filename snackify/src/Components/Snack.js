import React, { useState, useEffect } from 'react';
import { addSnackToSuggestions } from '../Store/Actions'
import { connect } from 'react-redux';
import styled from 'styled-components';

const SnackDisplay = styled.div`
width: 50%;
border: solid black 1px;
margin: auto;
margin-top: 15px;
`
const Picture = styled.img`
width: 70%;
height: auto;
`

const Snack = (props) => {
    console.log(props)
    const [details, setDetails] = useState(false);
    const [suggested, setSuggested] = useState(false);
    console.log(suggested)
    return (
        <SnackDisplay>
            <Picture src={props.snack.Image} />
            <h1>{props.snack.Name}</h1>
            {details ? <div>
                <div>Calories: {props.snack.Calories}</div>
                <div>Fat: {props.snack.Fat}</div>
                <div>Sugar: {props.snack.Sugar}</div>
                <div>Protien: {props.snack.Protien}</div>
                <div>Allergens: {props.snack.Allergens}</div>
                <div>Carbs: {props.snack.Carbs}</div>
                <div>Price: {props.snack.Price}</div>
                <div>Weight: {props.snack.Weight}</div>
            </div> : null}
            <button onClick={() => setDetails(!details)} >{details ? "Show Less" : "Show Details"}</button>
            {!suggested ?
                <button onClick={() => props.addSnackToSuggestions(props.user.name) && setSuggested(!suggested)}> Request </button> :
                <button onClick={() => props.suggestions.splice(props.suggestions.indexOf(props.snack.Name), 1) && setSuggested(!suggested)}> Cancel Request </button>
            }
        </SnackDisplay >
    )

}


const mapStateToProps = state => {
    console.log(state)
    return {
        suggestions: state.suggestions,
        user: state.user
    };
}
const mapDispatchToProps = {
    addSnackToSuggestions
}
export default connect(mapStateToProps, mapDispatchToProps)(Snack);
