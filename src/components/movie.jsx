import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movie extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>Жанр</th>
              <th>Доступно</th>
              <th>Рейтинг</th>
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
}

export default Movie;
