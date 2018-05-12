var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc:
      "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.",
    src:
      "https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-order-of-the-phoenix-movie-poster-style-h.jpg"
  },
  {
    id: 2,
    title: "The Lion King",
    desc:
      "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
    src: "https://www.movieposter.com/posters/archive/main/108/MPW-54063"
  },
  {
    id: 3,
    title: "Matrix",
    desc:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    src: "https://images-na.ssl-images-amazon.com/images/I/51k1epcewKL.jpg"
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("h2", {}, this.props.title);
  }
});
var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("p", {}, this.props.desc);
  }
});
var MovieImage = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("img", { src: this.props.src });
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement(
      "li",
      { key: this.props.movie.id },
      React.createElement(MovieTitle, { title: this.props.movie.title }),
      React.createElement(MovieDescription, { desc: this.props.movie.desc }),
      React.createElement(MovieImage, { src: this.props.movie.src })
    );
  }
});

var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    return React.createElement(
      "ul",
      {},
      this.props.movies.map(function(movie) {
        return React.createElement(Movie, {
          key: movie.id,
          movie: movie
        });
      })
    );
  }
});

var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Movies list"),
  React.createElement(MoviesList, { movies: movies })
);

ReactDOM.render(element, document.getElementById("app"));
