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
      //console.log(response.quotes)
      let random = Math.floor(Math.random() * response.quotes.length)
      const data = response.quotes[random]
      //console.log(data)
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
  url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
}


export default RandomQuote