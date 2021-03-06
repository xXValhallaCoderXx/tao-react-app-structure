import React from 'react';
import { Link } from 'shared/components/atoms';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const TopNavigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand>Tao Of React</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/products">Products</NavLink>
                    </NavItem>
                </Nav>
                <NavLink tag={Link} to="/">Logout</NavLink>
            </Collapse>
        </Navbar>
    );
}

export default TopNavigation;