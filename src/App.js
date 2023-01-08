import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";
import Bloglist from "./Bloglist"; 
/* import NotFound from "./NotFound"; */

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/create"
                            element={<Create />}
                        />
                        <Route
                            path="/blogs/:id"
                            element={<Bloglist />}
                        />
                    
                    </Routes> 
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App