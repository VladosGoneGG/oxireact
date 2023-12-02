import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'

const AppRoutes = () => (
	<Routes>
		{/* Главный индекс начальный Home */}
		<Route index element={<Home />} />
	</Routes>
)

export default AppRoutes
