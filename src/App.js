import React, { Component } from "react";
import Navigation from "./components/navigation";
import Counters from "./components/counters";
import Movie from "./components/movie";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 12 },
      { id: 2, value: 13 },
      { id: 3, value: 14 },
      { id: 4, value: 15 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("Constaructor");
  }

  componentDidMount() {
    console.log("Mount");
  }

  Increment = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  Decrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  Reset = () => {
    this.setState({
      counter: this.state.counters.map(c => {
        c.value = 0;
        return c;
      })
    });
  };

  Delete = id => {
    // console.log("Delete ", id);
    this.setState({ counters: this.state.counters.filter(c => c.id !== id) });
  };

  render() {
    console.log("Render");

    return (
      <React.Fragment>
        <Navigation
          counters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            Increment={this.Increment}
            Decrement={this.Decrement}
            Delete={this.Delete}
            Reset={this.Reset}
          />
        </main>
        <Movie></Movie>
      </React.Fragment>
    );
  }
}

export default App;
