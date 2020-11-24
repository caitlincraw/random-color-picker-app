import React from 'react';

class RandomColorButton extends React.Component {

    render() {
      return (
        <button className="btn btn-secondary m-1" onClick={this.props.onClick}>RANDOMIZE COLORS</button>
      )
    }
}

export default RandomColorButton;