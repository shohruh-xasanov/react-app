import { Component } from "react";

class  Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nav : false
         }
    }

    navbarChange = () => {
        this.setState({nav : !this.state.nav})
    }

    render() {
    return ( 
    <div className="row ">
        <div className="col-12">
            <nav className="blue-grey darken-3">
               <div >
                    <div class="nav-wrapper container">
                        <a href="/" class="brand-logo ">Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="sass.html">Videos</a></li>
                            <li><a href="badges.html">Category</a></li>
                            <li><a href="collapsible.html">About</a></li>
                        </ul>
                        <span class="material-icons" onClick={this.navbarChange}>
                            reorder
                        </span>
                    </div>
               </div>
            </nav>
            
        {this.state.nav ? 
                <ul className="side blue-grey darken-3 " id="mobile-demo">
                <li><a href="sass.html">Home</a></li>
                <li><a href="sass.html">Videos</a></li>
                <li><a href="badges.html">Category</a></li>
                <li><a href="collapsible.html">About</a></li>
                </ul>
            : 
            null}
        </div>
    </div> 
    );
}
}

export default Navbar;