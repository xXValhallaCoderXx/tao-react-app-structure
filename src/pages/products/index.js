import {
    Switch,
    Route
} from "react-router-dom";

import List from "./list"
import Detail from "./detail"

const ProductRoutesContainer = () => {
    return (

        <Switch>
            <Route exact path="/products">
                <List />
            </Route>
            <Route exact path="/products/:id">
                <Detail />
            </Route>
        </Switch>

    )
}

export default ProductRoutesContainer