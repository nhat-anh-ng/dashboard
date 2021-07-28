import React from 'react'
import "./navbar.css"
import Grid from '@material-ui/core/Grid';
import { ChatBubbleOutline, NotificationsNoneOutlined } from '@material-ui/icons';
import DropdownMenu from "../dropdownMenu/DropdownMenu"
import SearchBar from "../searchbar/Searchbar"


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navLeft">
                    <Grid container direction="row">
                        <span className="overview">Overview</span>
                       
                    </Grid>

                </div>
                <SearchBar />
                <div className="navRight">
                    <div className="navbarIconContainer">
                        <ChatBubbleOutline />
                        <span className="topiconRed"></span>
                        <NotificationsNoneOutlined />
                        <span className="topiconBlue">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
