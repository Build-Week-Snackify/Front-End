import React, { useState } from 'react';
import { connect } from 'react-redux';

const Register = (props) => {
    const [count, setCount] = useState(0);
    const [goodRegister, setGoodRegister] = useState(false);
    const [company, setCompany] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        code: '',
        companyName: '',
        companyPhone: '',
        companyLocationCity: '',
        companyLocationState: '',
        companyTeamSize: ''
    });


    return(
        <form>
            <h1>hi</h1>

        </form>
    )
}
    const mapStateToProps = state => {
        return {

        };
    }

    export default connect(mapStateToProps, {})(Register);