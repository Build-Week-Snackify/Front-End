import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Snacks from './Snack'

const EmployeeSnack = (props) => {

    return (
        <div>
            {props.snacks.map(snack => (
                <Snacks snack={snack} />
            ))}
        </div>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return (
        state
    );
}

export default connect(mapStateToProps, {})(EmployeeSnack);