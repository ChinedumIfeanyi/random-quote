import React from 'react'

const DisplayQuote = ({data}) => {
	
	return (
		<div>
			<h3 id="text">{data.quote}</h3>
			<span id="author"> <i>{data.author}</i> </span>
		</div>
	)
}

export default DisplayQuote