import React from "react";
import "./DrumMachine.css"
import { DrumPad } from "./DrumPad";

const AudioClips  = [{
    keyCode: 81,
    Key: 'Q',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
},{
    keyCode: 87,
    Key: 'W',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
},{
    keyCode: 69,
    Key: 'E',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
},{
    keyCode: 65,
    Key: 'A',
    id: 'Kick-N-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
},{
    keyCode: 83,
    Key: 'S',
    id: 'Heater-6',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
},{
    keyCode: 68,
    Key: 'D',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
},{
    keyCode: 90,
    Key: 'Z',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
},{
    keyCode: 88,
    Key: 'X',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
},{
    keyCode: 67,
    Key: 'C',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
}    
]
export class DrumMachine extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          pressed: false,
          Drumpad: "drum-pad",
          presstoggle: "pressed-"
        };
      }
    PlaySound(sound) {
        console.log('pressed '+ sound)
        
    }
    render(){
        return (
            <div id="drum-machine">
                <div id="display">
                        {
                        AudioClips.map((item, id) => {
                                return <DrumPad 
                                key={id}
                                pad={item}/>
                        })
                        }
                </div>
            </div>
            
        );
    }
}