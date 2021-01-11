/**
 * 应用的根组件
 */

import React, {Component} from 'react';
import { Button, message } from 'antd'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";

class App extends Component {

    render() {
        return (
            <Router>
                {/* switch 只会匹配其中的一个 */}
                <Switch>
                    <Route path={'/'} exact component={Admin}></Route>
                    <Route path={'/login'} component={Login}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;