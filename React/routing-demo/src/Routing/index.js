import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import MovieDetail from "./Movie-details";
import MovieList from "./Movies";
import { movies } from "./Movies-mock-data";
import NotFound from "./NotFound";
import Print from "./Print";
// import './index.css';



export default function Routing() {
    return (
        <div className="outerContainer">
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link style={{textDecoration:'none'}} to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link  to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/print">Print</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="print" element={<Print />} />
                            <Route path="movies/*" element={<MovieList movies={movies} />} />
                            {/* <Route path="movies/:id" element={<MovieDetail/>}/> */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}