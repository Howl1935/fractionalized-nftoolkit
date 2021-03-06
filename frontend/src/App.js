import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NftGallery from './pages/NftGallery';
import PrivateRoute from './components/PrivateRoute';
import Metamask from './components/Metamask';
function App() {
	return (
		<>
			<Router>
					<Navbar />
					<div className="flex flex-col justify-between h-screen ">

					<main className="flex items-center justify-center container mx-auto px-3 pb-12  ">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/metamask" element={<Metamask />} />
							{/* This is how we will always create private routes */}
							<Route path="/gallery" element={<PrivateRoute />}>
								<Route path="/gallery" element={<NftGallery />} />
							</Route>
						</Routes>
					</main>
				</div>
			</Router>
		</>
	);
}
export default App;
