import React from 'react';
import './ImageLinkForm.css';
// eslint-disable-next-line
import tachyons from 'tachyons';

const ImageLinkForm=({onInputChange,onBtSubmit}) =>{
	return (
		<div>
			<div>
				<p className='f3'>
					{'Webapp to detect face in your pictures.'}
				</p>
			</div>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
					className='f4 pa2 w-70 center' type='tex'
					onChange={onInputChange}/>
					<button onClick={onBtSubmit}className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>DETECT</button>
				</div>
			</div>
		</div>
		);
}
export default ImageLinkForm;