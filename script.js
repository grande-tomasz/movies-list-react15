var counterNumber = 0;

var Counter = React.createClass({
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  getDefaultProps: function() {
    console.log("getDefaultProps");
  },
  getInitialState: function() {
    console.log("getInitialState");
    counterNumber++;
    return {
      counter: 0,
      number: counterNumber
    };
  },
  componentWillMount: function() {
    console.log("componentWillMount("+this.state.number+")");
  },
  render: function() {
    console.log("render("+this.state.number+")");
    return React.createElement("div", {},
      React.createElement("br"),
      React.createElement("span", {}, "Licznik "+this.state.number+" = " + this.state.counter),
      React.createElement("br"),
      React.createElement("button", {onClick: this.increment}, "+"),
      React.createElement("button", {onClick: this.decrement}, "-")
    );
  },
  componentDidMount: function() {
    console.log("componentDidMount("+this.state.number+")");
  },

  componentWillReceiveProps: function() {
    console.log("componentWillReceiveProps("+this.state.number+")");
  },
  shouldComponentUpdate: function() {
    console.log("shouldComponentUpdate("+this.state.number+")");
    return true;
  },
  componentWillUpdate: function() {
    console.log("componentWillUpdate("+this.state.number+")");
  },
  componentDidUpdate: function() {
    console.log("componentDidUpdate("+this.state.number+")");
  }
});

var element = React.createElement("div", {}, 
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById("app"));
