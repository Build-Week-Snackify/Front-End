import React, {useState, useEffect} from "react";
import SnackList from "./SnackCard";




const Dashboard = () => {
    const[subscription, setSubscription] = useState([]);
    
    const addToSubscription = item => {
        setSubscription([...subscription, item]);
    };

    const saveSnack= () => {
        const addToSubscription = props.addToSubscription;
        addToSubscription(props.snack)
      };

    return(
        <div className="dashboard">
            <nav>
                <h1 className="header">Welcome back!</h1>
                <div className="nav-links">
                <Subscription list={subscription}/>    
                </div>
            </nav>
        {/* <Route exact path="/" component={} /> */}
        <Route exact path="/SnackList" render={props => 
            <SnackList{...props} subscription={subscription}/>
        } />
        {/* <Route exact path ="/snacklist/name" render=> */}

        </div>

    );
};