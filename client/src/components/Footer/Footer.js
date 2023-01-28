import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid">
            <hr/>
            <div className='row'>
                <div className='col-2 text-center'>
                    <h5>Links</h5>
                    <ul className='list-unstyled'>
                        <li>
                            <a href="https://www.ebay.com/" 
                                className='text-secondary text-decoration-none'>the real ebay</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/dQw4w9WgXcQ" 
                                className='text-secondary text-decoration-none'>really cool link</a>
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/367500/Dragons_Dogma_Dark_Arisen/"
                                className='text-secondary text-decoration-none'>a nice surprise</a>
                        </li>
                    </ul>
                </div>
                <div className='col-5 text-center'>
                    <h5>About Us</h5>
                    <span className='text-secondary'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                </div>
                <div className='col-5 text-center'>
                    <h5>Our Mission</h5>
                    <span className='text-secondary fs-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;