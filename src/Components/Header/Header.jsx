import React from 'react';
import "./header.css";
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header() {
    return (
        <div className='header'>

            <div className="header_icons">

                <div className="header_IconTitle  header_IconTitle-active">
                    <HomeIcon />
                    <p>Home</p>

                </div>
                <div className="header_IconTitle">
                    <FlashOnIcon />
                    <p>Trending</p>

                </div>

                <div className="header_IconTitle">
                    <LiveTvIcon />
                    <p>Verified</p>

                </div>

                <div className="header_IconTitle">
                    <VideoLibraryIcon />
                    <p>Collection</p>

                </div>

                <div className="header_IconTitle">
                    <SavedSearchIcon />
                    <p>Search</p>

                </div>
                <div className="header_IconTitle">
                    <PersonOutlineIcon />
                    <p>Account</p>

                </div>







            </div>

            <img src="https://logos-world.net/wp-content/uploads/2020/11/Hulu-Logo-2007-2014.png" alt="" />



        </div>
    )
}

export default Header
