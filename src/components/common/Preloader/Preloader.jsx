import React from 'react';
import preloader from '../../../assets/images/preloader.gif';


let Preloader = (props) => {
    return <div style={{backgroundColor:'transparent'}}><img src={preloader} /></div>
}

export default Preloader