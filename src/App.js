
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <Banner/>

      {/* first row is trending */}
      <Row title="Trending In India"
      fetchUrl={requests.fetchTrending}/>
      <Row title="Netflix Original"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title="Top Rated"
      fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"
      fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}/>
    </div>

  );
}

export default App;
