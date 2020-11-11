import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from "./pages/login"
import Products from "./pages/products"
import ProtectedTemplate from "shared/templates/ProtectedPage"

const RootRoutesContainer = () => {
    return (
        <Router >
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <Login />
                </Route>
                <ProtectedTemplate>
                    <Route path="/products">
                        <Products />
                    </Route>
                </ProtectedTemplate>
            </Switch>
        </Router >
    )
}

export default RootRoutesContainer