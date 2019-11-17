import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props){
	const {
		component: Component,
		...rest
	} = props
	return(
		<Route {...rest} render ={(renderProps)=>{
			if (localStorage.getItem('SnackToken')) {
				return <Component {...renderProps} />
			} else {
				return  <Redirect to='/CompanyOrEmployee' />
			}
		}} />
	)
}

export default PrivateRoute;