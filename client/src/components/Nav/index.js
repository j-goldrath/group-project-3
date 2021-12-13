import { Icon, Navbar, Dropdown, Button, NavItem } from 'react-materialize';
import Auth from '../../utils/auth';

const Nav = () => {
    return (
        <>
            {Auth.loggedIn() ? (
                <><Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#">Helpr</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                  draggable: true,
                  edge: 'left',
                  inDuration: 250,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                  preventScrolling: true
                }}>
                {/* Prints this if user is logged in */}
                <NavItem href="/createFundraiser">
                    Make Fundraiser
                </NavItem>
                <NavItem onClick={Auth.logout} href="/">
                    Logout
                </NavItem>
                </Navbar>
                </>
            ) : (
                <>
                {/*Prints this if user is logged out */}
                <Navbar
                    alignLinks="right"
                    brand={<a className="brand-logo" href="/">Helpr</a>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                <Dropdown
                    id="Dropdown_8"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<Button node="button">Login/Sign Up</Button>}
                >
                    <a href="/login">
                        Login
                    </a>
                    <a href="/signup">
                        Sign Up
                    </a>
                </Dropdown>
                </Navbar>
                </>
            )}
        </>
      );
};

export default Nav;