import React from 'react'


const Button = ({getQuote, data}) => {
	return (
		<div>
			<button onClick={getQuote} id="new-quote">
				Get Quote
			</button>
			<a 
				href={`https://twitter.com/intent/tweet?text=${ data.quote } -- ${ data.author }`} 
				id="tweet-quote" 
				target="_blank"
				rel="noopener noreferrer"
			>
				 Tweet 
			</a>
		
		</div>
	)
}


export default Button