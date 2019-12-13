import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  //axios promis 함수선언앞 async 비동기작업 앞 await
  getMovies = async () => {
    //비구조화 할당 axios로 오는 데이터가 저모양..
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
    console.log(movies);
  }

  componentWillMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <>
            <div className="header"></div>
            <div className="movies">
              {movies.map(movie => {
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />;
              })}
            </div>
          </>
          )}
      </section>
    );
  }


}

export default App;
