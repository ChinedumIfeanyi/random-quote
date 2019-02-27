import React, { Component } from "react"
import "./RandomQuote.css"


import DisplayQuote from "./components/DisplayQuote"
import Button from "./components/Button"

class RandomQuote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    this.fetchQuotes()
  }

  fetchQuotes = () =>{
    fetch(this.props.url)
    .then(result => result.json())
    .then(response => {
      let random = Math.floor(Math.random() * response.length)
      const data = response[random]
      //setstate
      this.setState({
        data
      })
    })
  }

  render(){
    const data = this.state.data
    return (
      <div>
        <DisplayQuote data = { data }/>
        <Button getQuote={this.fetchQuotes} data={ data }/>
      </div>
    )
  }
}

RandomQuote.defaultProps = {
  url: "http://quotes.stormconsultancy.co.uk/quotes.json",
}


export default RandomQuote