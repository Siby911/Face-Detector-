import React from 'react';
import './FaceRecognition.css';
//import './ImageLinkForm.css';
// eslint-disable-next-line
import tachyons from 'tachyons';

const FaceRecognition=({imageUrl,box}) =>{
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputim'src={imageUrl} alt="" width='500px' height='auto'/>
				<div style={{top:box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}} className='bounding-box'></div>
			</div>	
		</div>
		);
}
export default FaceRecognition;