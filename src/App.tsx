import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Movie from "./Routes/Movie";
import Search from "./Routes/Search";
import TvSeries from "./Routes/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movie />}>
          <Route path="movies/:movieId" element={<Movie />} />
        </Route>
        <Route path="/tv" element={<TvSeries />}>
          <Route path="tv/:tv_id" element={<TvSeries />} />
        </Route>
        <Route path="/search" element={<Search />}>
          <Route path="movie/:id" element={<Search />} />
          <Route path="tv/:id" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
