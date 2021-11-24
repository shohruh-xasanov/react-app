import {Component} from 'react'
import PreaLoader from '../loader/PreLoader';
import CardItem from './CardItem';
import Search from './Search';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies : [],
            loading: true
         }
    }

    componentDidMount () {
        fetch("http://www.omdbapi.com/?apikey=329ffa13&s=panda")
            .then(res => res.json())
            .then(data => this.setState({movies : data.Search, loading: false}))
    }
    
    SearchFilm = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(res => res.json())
            .then(data => this.setState({movies : data.Search, loading: false}))
    }

    render() { 
        return ( 
            <div>
            <Search  SearchFilm={this.SearchFilm}/>
            {!this.state.loading ?
            <div className=" movie ">
                {this.state.movies ? this.state.movies.map( movie => (
                <CardItem key={movie.imdbID} props = {movie}/>
                )) : <h5>Bunaqa film topilmadi</h5>}
            </div>
            : <PreaLoader/>}
             </div>
         );
    }
}
 
export default CardList;