import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllBookings from '../ManageAllBookings/ManageAllBookings';
import AddApartment from '../AddApartment/AddApartment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageApartments from '../ManageApartments/ManageApartments';





const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logOut, admin } = useAuth();

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to='/home'>
                <Button color="inherit">Home</Button>
            </Link>

            {admin ? <Box>
                <Link to={`${url}/managebookings`}>
                    <Button color="inherit">Manage All Bookings</Button>
                </Link>
                <Link to={`${url}/addapartment`}>
                    <Button color="inherit">Add A Apartment</Button>
                </Link>
                <Link to={`${url}/makeadmin`}>
                    <Button color="inherit">Make Admin</Button>
                </Link>
                <Link to={`${url}/manageapartment`}>
                    <Button color="inherit">Manage Apartments</Button>
                </Link>
            </Box> : <Box>
                <Link to='/apartments'>
                    <Button color="inherit">Apartments</Button>
                </Link>
                <Link to={`${url}`}>
                    <Button color="inherit">MyBookings</Button>
                </Link>

                <Link to={`${url}/payment`}>
                    <Button color="inherit">Payment</Button>
                </Link>
                <Link to={`${url}/review`}>
                    <Button color="inherit">Review</Button>
                </Link>
            </Box>}
            <Link onClick={logOut}>
                <Button color="inherit">Logout</Button>
            </Link>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {user.email && <Typography variant="body1" noWrap component="div">
                        Dashboard of -- {user.displayName}
                    </Typography>}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/managebookings`}>
                        <ManageAllBookings></ManageAllBookings>
                    </Route>
                    <Route path={`${path}/addapartment`}>
                        <AddApartment></AddApartment>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageapartments`}>
                        <ManageApartments></ManageApartments>
                    </Route>

                </Switch>


            </Box>
        </Box>

    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
