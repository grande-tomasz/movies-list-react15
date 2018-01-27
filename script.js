var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "Film o czarodzieju",
    src: "http://www.impawards.com/2007/posters/harry_potter_and_the_order_of_the_phoenix_ver3.jpg"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    src: "http://www.impawards.com/1994/posters/lion_king_ver3.jpg"
  },
  {
    id: 3,
    title: "Matrix",
    desc: "Film o alternatywnej wizji rzeczywistości",
    src: "http://www.impawards.com/1999/posters/matrix_ver1.jpg"
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement("li", {key: movie.id},
    React.createElement("h2", {}, movie.title),
    React.createElement("p", {}, movie.desc),
    React.createElement("img", {src: movie.src},)
  );
});

var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement("ul", {}, moviesElements)
    // React.createElement("li", {},
    //   React.createElement("h2", {}, "Król Lew"),
    //   React.createElement("p", {}, "Film opowiadający historię króla sawanny")
);

ReactDOM.render(
  element,
  document.getElementById("app")
);
