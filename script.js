var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "Film o czarodzieju",
    src: "https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-order-of-the-phoenix-movie-poster-style-h.jpg"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    src: "https://www.movieposter.com/posters/archive/main/108/MPW-54063"
  },
  {
    id: 3,
    title: "Matrix",
    desc: "Film o alternatywnej wizji rzeczywistości",
    src: "https://images-na.ssl-images-amazon.com/images/I/51k1epcewKL.jpg"
    // looks like src with underscore (_) does not work with nested React elements
    // src: "http://www.impawards.com/1999/posters/matrix_ver1.jpg"
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
    return React.createElement("img", {src: this.props.src});
  }
});
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement("li", {key: this.props.movie.id},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDescription, {desc: this.props.movie.desc}),
      React.createElement(MovieImage, {src: this.props.movie.src})
    );
  }
});
var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },
  render: function() {
    return React.createElement("ul", {}, 
      this.props.movies.map(function(movie) {
        return React.createElement(Movie, {
          key: movie.id, 
          movie: movie
        });
      })
    );
  }
});

var element = React.createElement("div", {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement(MoviesList, {movies: movies})
);

ReactDOM.render(
  element,
  document.getElementById("app")
);
