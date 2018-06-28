import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
 apiKey: 'ba8def76523a4fadaa83098d0f695d42'
});
class App extends Component {
constructor(){
	super();
	this.state={
		input:'',
		imageUrl:'',
		box:{}
	}
}
	calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputim');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  //console.log('out');
   displayFaceBox = (box) => {
   	console.log(box);
    this.setState({box: box});
  }

  onInputChange=(event)=>{
  	this.setState({input:event.target.value});
  }

  onBtSubmit=()=>{
  	 this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));

  }
  render() {
    return (
      <div className="App">
      	<Particles className='particles'
              params={{
            		particles: {
            			number:{
            				value: 175,
            				density: {
            					enable: true,
            					value_area: 1200
            				}
            			}
            		}
            	}}
              />
        <Navigation/>
    
    	<Logo/>
    	<ImageLinkForm onInputChange={this.onInputChange}
    	onBtSubmit={this.onBtSubmit}/>
    	<FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
    
      </div>
    );
  }
}

export default App;
