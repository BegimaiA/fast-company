import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import UserPage from "./components/userPage";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <UserPage {...props} />}
                />
                <Route path="/users" component={Users} />
                <Route exact path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
