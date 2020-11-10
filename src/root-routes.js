import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from "./pages/login"
import Products from "./pages/products"

const RootRoutesContainer = () => {
    return (
        <Router >
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Login />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
            </Switch>

        </Router >
    )
}

export default RootRoutesContainer