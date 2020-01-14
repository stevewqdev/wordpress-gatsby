import React, { Component } from "react"
import Layout from "../layouts/index"
import "./css/async-call.css"

class AsyncPage extends Component {
  // We set the state
  state = {
    loading: true, 
    error: false,
    fetchedData: [],
  }
  // **** You can fetch the data using axios too **** //
  componentDidMount() {
    // we fetch the data
    fetch("https://www.amiiboapi.com/api/amiibo/?gameseries=pokemon")
        .then(response => {
          // transform it into json
          return response.json()
        })
        .then(json => {
          // we update the state
          this.setState({
            fetchedData: json.amiibo,
            loading: false, 
          })
        })
        .catch(error => {
          this.setState({
            fetchedData: false,
            loading: false, 
          })
        })
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
            <h1 className="centered__text">How to call dynamic data with async on Gatsby</h1>
            <div className="async__results result__wrapper centered__text">
            {
                loading
                ? <p> Fetching Pokemons...</p>
                : fetchedData
                  ? fetchedData.map(character => 
                      <div key={character.character} className={'the__result ' + character.character} >
                          <img alt={'image of ' + character.character} src={character.image} lazyload style={{ backgroundColor: colors[Math.floor(Math.random()*colors.length)]}} />
                          <p><b>{character.character}</b></p>
                      </div>
                    )
                  : <p> Uppps it seems we are having issue with the Pokedex...</p>
            }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AsyncPage
