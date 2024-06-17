// src/pages/SimpleExample.jsx
import React from 'react';
import '@code-hike/mdx/styles'
import Content from '../../example/Chapter1/simpleExample.mdx'

function SimpleExample() {
	return (
		<div style={{ width: '100%', margin: '0 auto'}}>
			<div style={{ width: '100%', margin: '0 auto', fontFamily: 'sans-serif' }}>
				<Content />
			</div>
		</div>
	)
}

export default SimpleExample
