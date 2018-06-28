import React from 'react';
import Tilt from 'react-tilt';
import women from './women.png';
//import 'Logo.css';
// eslint-disable-next-line
import tachyons from 'tachyons';
const Logo=() =>{
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa1"> <img style={{paddingTop:'0px'}}alt='logo'src={women}/> </div>
			</Tilt>

		</div>
		);
}
export default Logo;