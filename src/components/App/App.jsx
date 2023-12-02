import React from 'react'

import Header from '../Header/Header'
import AppRoutes from '../App/AppRoutes'
import Footer from '../Footer/Footer'

import '../../styles/index.scss'

const App = () => (
	<div className='App'>
		<Header />
		<AppRoutes />
		<Footer />
	</div>
)

export default App
