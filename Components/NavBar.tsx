import * as React from "react";

interface NavBarProps {
    navBar: string[];
    active: number;
    fixed: boolean;
}

export class NavBar extends React.component<NavBarProps> {
    render(){
        return(
            <div className="topnav">
                <a className="active">Home</a>
                <a >Academics</a>
                <a>Contact</a>
                <a>About</a>
            </div>
            )

    }
}