import { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: 'all'
    };
  }

  handleSearch = (e) => {
    if (e.key === "Enter") {
      this.props.SearchFilm(this.state.search);
    }
  };

  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), ()=>{
      this.props.SearchFilm(this.state.search, this.state.type);
    })
  }

  render() {
    return (
      <div class="row">
        <div class="col s12">
          <div class="input-field " style={{ width: "300px" }}>
            <input
              placeholder="Search"
              type="search"
              class="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleSearch}
            />
            <button
              style={{ position: "relative", bottom: "50px", left: "320px" }}
              className="btn btn success"
              onClick={() => this.props.SearchFilm(this.state.search, this.state.type)}
            >
              Search
            </button>
            <label for="email_inline">Search film</label>
          </div>
        </div>
        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          data-type="all" 
          onChange={this.handleFilter}
          checked={this.state.type === 'all'}/>
          <span>All</span>
        </label>

        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" data-type="movie" 
          onChange={this.handleFilter} 
          checked={this.state.type === 'movie'}/>
          <span>Movies only</span>
        </label>

        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" data-type="series" 
          onChange={this.handleFilter} 
          checked={this.state.type === 'series'}/>
          <span>Series only</span>
        </label>
      </div>
    );
  }
}


export default Search;
