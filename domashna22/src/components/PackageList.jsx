import React from 'react';
import Item from './Item';
import shirtImage from '../assets/image/shirt.jpg'
import towelImage from '../assets/image/towel.jpg'
import toothbrashImage from '../assets/image/toothbrash.jpg'
import soapImage from '../assets/image/soap.jpg'
import socksImage from '../assets/image/socks.jpg'

const PackageList = () => {
  return (
  <div>
    <h2>Package List</h2>
    <div className="item-content">
      <Item name='shirt' ItemImg={shirtImage} isPacked={true}/>
      <Item name='towels' ItemImg={towelImage} isPacked={false}/>
      <Item name='toothbrash' ItemImg={toothbrashImage} isPacked={true}/>
      <Item name='soap' ItemImg={soapImage} isPacked={true}/>
      <Item name='socks' ItemImg={socksImage} isPacked={false}/>
    </div>
  </div>
  );
};

export default PackageList;