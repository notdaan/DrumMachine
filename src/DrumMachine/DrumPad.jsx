import React from "react";
import "./DrumMachine.css"
import ReactDOM from 'react-dom';

export class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.handleAudio = React.createRef();
        this.PlaySound = this.PlaySound.bind(this);
        this.KeyPressed = this.KeyPressed.bind(this);
        this.KeyReleased = this.KeyReleased.bind(this);
    }
    PlaySound() {
        console.log('pressed')
        const sample = this.handleAudio.current;

        sample.currentTime = 0;
        sample.play();
    }
    KeyPressed(e) {
        const root = ReactDOM.findDOMNode(this);
        console.log("keydown")
        if (e.keyCode === this.props.pad.keyCode) {
            root.classList.add("active");
            this.PlaySound();
        }
    }
    KeyReleased(e) {
        const root = ReactDOM.findDOMNode(this);

        if(e.keyCode === this.props.pad.keyCode) {
            setTimeout(() => {
                root.classList.remove("active");
            }, 33);
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.KeyPressed);
        document.addEventListener('keyup', this.KeyReleased);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.KeyPressed);
        document.removeEventListener('keyup', this.KeyReleased);
    }
    render(){
        const pad = this.props.pad;
        console.log(pad.Key)
        return (
        <div className="drum-pad" id={pad.id} onClick={this.PlaySound}>
            <audio className="sample" id={pad.keyCode} src={pad.url} ref={this.handleAudio} />
            {pad.Key}
        </div> 
        );
    }
}