
import './App.css';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NftGallery from './pages/NftGallery';
import PrivateRoute from './components/PrivateRoute';
import CovalentTest from './pages/CovalentTest';

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Navbar />
					<Routes>
						<Route path="/" element={<CovalentTest />} />
						<Route path="/home" element={<Home />} />

						{/* This is how we will always create private routes */}
						<Route path="/gallery" element={<PrivateRoute />}>
							<Route path="/gallery" element={<NftGallery />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</>
	);
  }
export default App;
