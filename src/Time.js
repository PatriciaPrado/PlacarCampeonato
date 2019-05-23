import React, { Component } from 'react';

export default class Time extends Component {

   
    constructor() {
        super();
        this.state = {
            placar: 0
        }
    }

    Increment() {
        this.setState(() => ({
            placar: this.state.placar + 1
        }))
    }

    render() {
        return (
            <div>
                <strong>
                    <p class="nometime"> {this.props.time} </p>
                          <div class="nometime"> {this.state.placar} </div>  
                    <p>
                    </p>
                </strong>
                <button class="btn-gol" onClick={() => this.Increment()}> GOL! </button>
            </div>
        )
}
}