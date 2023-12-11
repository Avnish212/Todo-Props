import React from 'react'

const Navbar = ({name}) => {
    return (
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">{name}</span>
                </div>
            </nav>
    )
}

Navbar.defaultProps={
    name:"Default props"
}
export default Navbar