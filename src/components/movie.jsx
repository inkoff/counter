import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movie extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    if (this.state.movies.length === 0) return <p>Нет записей в базе данных</p>;
    return (
      <React.Fragment>
        <p>Показано {this.state.movies.length} записей в базе данных</p>
        <table className="table">
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>Жанр</th>
              <th>Доступно</th>
              <th>Рейтинг</th>
              <th>Нравится</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <th>{movie.genre.name}</th>
                <th>{movie.numberInStock}</th>
                <th>{movie.dailyRentalRate}</th>
                <th>
                  <Like like={movie.like} Like={() => this.Like(movie)}></Like>
                </th>
                <th>
                  <button
                    onClick={() => this.Delete(movie)}
                    className="btn btn-danger btn-secondary btn-sm"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  Delete = movie => {
    // console.log(movie);
    // const movies = ;
    this.setState({
      movies: this.state.movies.filter(m => m._id !== movie._id)
    });
  };
  Like = movie => {
    // console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
}

export default Movie;
