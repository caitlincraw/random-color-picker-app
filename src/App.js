import React from 'react';
import RandomColorButton from "./ColorButton";
import ColorSwatch from './Swatch';


class App extends React.Component { 
    
    constructor(props) {
        super(props);
        let initialState = {
            colors: [
                {id: 1, name: "#54c06c", isLocked: false},
                {id: 2, name: "#e4d623", isLocked: false},
                {id: 3, name: "#b5453f", isLocked: false},
                {id: 4, name: "#e8630c", isLocked: false},
                {id: 5, name: "#5d1170", isLocked: false}
            ]
        }
        this.state = initialState;
        this.generateColors = this.generateColors.bind(this);
        this.toggleLock = this.toggleLock.bind(this);
        
    }

    generateColors() {

        let randomColors = this.state.colors.map((color, index) => {
            if (color.isLocked === false) {
                let newColorObj = {
                    id: index + 1,
                    name: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    isLocked: false
                }
                return newColorObj;
            } else {
                return color
            }
        })

        this.setState({
            colors: randomColors
        });
    }

    toggleLock(id) {
        let newColors = this.state.colors.map((color, index) => {
            if (id === index + 1) {
                return {
                    id: color.id,
                    name: color.name,
                    isLocked: !color.isLocked
                }
            } else {
                return color
            }
        })

        this.setState({
            colors: newColors
        });
    }
    
    render() {

        return (
            <div>
                <RandomColorButton onClick={() => {this.generateColors()}} />
                <div className="w-100 d-flex" style={{height: "100vh"}}>
                    {this.state.colors.map( color => <ColorSwatch name={color.name} isLocked={color.isLocked} onClick={() => {this.toggleLock(color.id)}}/> )}
                </div>
            </div>
        )
    }
}

export default App;