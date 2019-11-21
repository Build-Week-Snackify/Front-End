import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

function HomePage(props){
    console.log(props)
    // useEffect(() => {
    //     console.log("The component has mounted.");
    //   }, [props.match.params]);


    return(
        <h1>WELCOME TO SNACKIFY!</h1>

    )
}

const mapStateToProps = state => {
    console.log(state)
    return {

    };
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);