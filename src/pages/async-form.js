import React, { Component } from "react"
import Layout from "../layouts/index"
import "./css/example.css"

class AsyncPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: 0, 
      fetchedData: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async event => {
    event.preventDefault();

    this.setState({
      loading: 1, 
    })

    // get the search term from the form input
    const name = this.state.value;

    // send a request to the Rick & Morty API based on the user input
    const characters = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`,
    )
    .then(response => response.json())
    .catch(error => {
      this.setState({
        fetchedData: false,
        loading: 2, 
      })    
    });

    // add the search results to the DOM
    if(characters.results !== undefined && characters.results.length > 0){
      this.setState({
        fetchedData: characters.results,
        loading: 2, 
      })
    }else{
      this.setState({
        fetchedData: false,
        loading: 3, 
      })
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const {loading, fetchedData} = this.state
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


    return (
      <Layout>
        <div className="async__call">
          <div className="container__base">
            <h1 className="centered__text">Async search box with Gatsby + fetch API</h1>
                <form className={'async__form'}>
                  <label>Search Rick & Morty characters by name</label>
                  <input type="text" className={this.state.value} value={this.state.value} onChange={this.handleChange} id="name" name="name" required />
                  <button type="submit" onClick={this.handleSubmit}>Search</button>
                </form>
                <hr></hr>
                <div className="async__results --aform result__wrapper centered__text">
                {
                    loading === 0
                    ? <p> Waiting for you to search something</p>
                    : ''
                }
                {
                    loading === 1
                    ? <p> Searching in Rick's database...</p>
                    : ''
                }
                {
                    loading === 2
                    ? fetchedData
                      ? fetchedData.map(character => 
                          <div key={character.name} className={'the__result ' + character.name} >
                              <img alt={'image of ' + character.name} src={character.image} lazyload style={{ backgroundColor: colors[Math.floor(Math.random()*colors.length)]}} />
                              <p><b>{character.name}</b></p>
                          </div>
                        )
                      : <p> Uppps it seems we are having connecting to Rick's database...</p>
                    : ''
                }
                </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AsyncPage
