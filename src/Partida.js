import React, { Component } from 'react';


export default class Partida extends Component {

    render() {
        return (
            <div>
                <center>
                    <strong>
                        <p class="nometime" > {this.props.campeonato} </p>
                    </strong>  <p> {this.props.datetime} </p>
                </center>
            </div>
        );
    }
}