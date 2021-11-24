import {Component} from 'react'
import Navbar from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    

    render() { 
        return ( 
            <div > 
              <Navbar />
              <Main />
              <Footer />
              
             </div>
        );
    }
}
 
export default App;