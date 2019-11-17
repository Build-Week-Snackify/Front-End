import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithLoginAuth } from '../Utils/axiosWithLoginAuth';
import styled from 'styled-components';


const CompanyData = (props) => {
console.log(props.suggestions)
return (
    props.suggestions.map()
    <div>

    </div>
)

}

const mapStateToProps = state => {
     console.log(state)
    return (
        state
    );
}

export default connect(mapStateToProps, {})(CompanyData);