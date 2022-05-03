import React, { Component } from "react";


export default class Timer extends Component {

    timeout = null

    componentDidMount(){
        if (this.state.timer > 0 && !this.state.stopTimer) {
            this.timeout = setTimeout(() => this.setState({ timer: this.state.timer - 1 }), 1000)
        }
    }

    componentDidUpdate() {
        if (this.state.timer > 0 && !this.state.stopTimer) {
            this.timeout = setTimeout(() => this.setState({ timer: this.state.timer - 1 }), 1000)
        }
    }

    state = {
        timer: this.props.timer,
        stopTimer: false,
        
    }

    onStop = () => {
        clearTimeout(this.timeout)
        this.setState({ stopTimer: true })
    }

    onStart = () => {
        this.setState({ stopTimer: false })
    }

    onReset = () =>{
        clearTimeout(this.timeout)
        this.setState({ timer: this.props.timer})
    }

    render() {
        return (<div>
            {this.state.timer}
            <button onClick={this.onStop}>STOP</button>
            <button onClick={this.onStart}>START</button>
            <button onClick={this.onReset}>RESET</button>
        </div>)
    }
}