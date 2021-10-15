import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./../css/prison.css";

class Prison extends Component {
    state = {
        students: [1, 2, 3, 4, 5],
        count: 0
    }

    // TODO: Si this présent -> Fonction flêchée
    // fonction flechée permet "this" sur un élément non parent
    handleIncrementation = () => {
        this.setState({ count : this.state.count + 1})
    }

    interface = () => {
        const {count} = this.state
        if(count === 10) return "Bravo"
        return count === 0 ? "Rend l'argent" : count
    }

    handleStyle = () => {
        let classe = "bravo"
        if(this.state.count === 10) classe ="alpha"
        return classe
    }

    render() {

        const {count, students} = this.state;
        return (
            <>
                <ul>
                    {students.map(element => <li> {element} </li>)}
                </ul>
                <div style={{marginLeft: "25px"}}>{this.interface()}</div>
                <button className={this.handleStyle()} onClick={this.handleIncrementation}>Incremente</button>
            </>
        );
    }
}

export default Prison;