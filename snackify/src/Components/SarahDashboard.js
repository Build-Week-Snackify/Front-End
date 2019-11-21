import React, {useState, useEffect} from "react";




const Dashboard = () => {
    const[subscription, setSubscription] = useState([]);
    
    const addToSubscription = item => {
        setSubscription([...subscription, item]);
    };
    return(
        <div className="dashboard">
            <nav>
                <h1 className="header">Welcome back!</h1>
                <div className="nav-links">
                    
                </div>
            </nav>
        {/* <Route exact path="/" component={} /> */}
        {/* <Route exact path="/SarahSnackList" render={(props) => (
            <SnackList {...props} items={product}/>
        )} /> */}
        {/* <Route exact path ="/snacklist/name" render=> */}

        </div>

    );
};