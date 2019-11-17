import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Snack = (props) => {

}

const mapStateToProps = state => {
    console.log(state)
   return (
       state
   );
}

export default connect(mapStateToProps, {})(Snack);