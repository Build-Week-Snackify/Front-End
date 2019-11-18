import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Snack = (props) => {
    console.log(props.snack)

    return (
        <>
        <img src={props.snack.Image} />
        <div>{props.snack.Name}</div>
        <div>{props.snack.Calories}</div>
        <div>{props.snack.Fat}</div>
        <div>{props.snack.Sugar}</div>
        <div>{props.snack.Protien}</div>
        <div>{props.snack.Allergens}</div>
        <div>{props.snack.Carbs}</div>
        <div>{props.snack.Price}</div>
        <div>{props.snack.Weight}</div>
        </>
    )

}


const mapStateToProps = state => {
    console.log(state)
    return (
        state
    );
}

export default connect(mapStateToProps, {})(Snack);
