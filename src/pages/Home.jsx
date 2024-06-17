// src/pages/Home.jsx
import React from 'react';
import '@code-hike/mdx/styles'
import Content from '../example/hello.mdx'

function Home() {
	return (
		<div style={{ width: '100%', margin: '0 auto'}}>
			<div style={{ margin: '0 auto', fontFamily: 'sans-serif' }}>
				<Content />
			</div>
		</div>
	)
}

export default Home
