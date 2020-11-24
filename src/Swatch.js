import React from 'react';

class ColorSwatch extends React.Component {

    render() {
        return (
            <div className="w-100 d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: this.props.name}}>
                <h2>{this.props.name.toUpperCase()}</h2>
                <button className={this.props.isLocked ? 'btn btn-dark' : 'btn btn-outline-dark'} onClick={this.props.onClick}>{this.props.isLocked ? 'UNLOCK' : 'LOCK'}</button>
            </div>
        )
    }
}

export default ColorSwatch;