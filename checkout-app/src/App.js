import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImagePreview from './components/ImagePreviewArea/ImagePreview';
import Checkout from './components/CheckoutArea/Checkout';

var createReactClass = require('create-react-class');
var Overlay = createReactClass({
  render: function() {
    return (
      <div className="Overlay" style={{'backgroundImage':'url(' + this.props.image + ')'}}>
        Something
      </div>
    );
  }
});


var Container = createReactClass({
    render: function() {
    return (
      <div className="Container">
        {this.props.children}
      </div>
    )
  }
});


var Header = createReactClass({
  
  render: function() {
    return (
      <header>
        <input onChange={this.props.onChange} type="range" max="60" min="1" step="1" />
      </header>
    );
  }
});


var App = createReactClass({
  
  getInitialState: function() {
    return ({
      mounted: false,
      people: 1,
      price: 40.00,
      tax: 5,
      duration: 5,
      discount: 5
    });
  },
  
  componentDidMount: function() {
    this.setState({ mounted: true });
  },
  
  handleSubmit: function(e) {
    console.log('handle ajax submission here');
    e.preventDefault();
  },
  
  handleChange: function(e) {
    this.setState({ duration: e.target.value });
  },

  render: function() {
    
    var overlay, container;
    if(this.state.mounted) {
      overlay = (
        <Overlay image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdV-F50XSFptL_iF94L1zmoFqov7z82ZHmXSx-6YP4S42hcyl&usqp=CAU" />
      );
      container = (
        <Container>
          <ImagePreview price={this.state.price} duration={this.state.duration} people={this.state.people} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdV-F50XSFptL_iF94L1zmoFqov7z82ZHmXSx-6YP4S42hcyl&usqp=CAU" />
          <Checkout duration={this.state.duration} discount={this.state.discount} tax={this.state.tax} price={this.state.price} onSubmit={this.handleSubmit} />
        </Container>
      );
    }
    
    return(
      <div className="App">
        <ReactCSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {overlay}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="container" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {container}
        </ReactCSSTransitionGroup>
        <Header onChange={this.handleChange} />
      </div>
    );
  }
});
export default App;