import React from 'react';
import './Popup.css';

function Popup(props){
    console.log(props);
    return (
        <div className='popup '>
          <div className='popup_inner'>
            <img src={props.image_url} />
            <div className="popupName">
                <div className="name">{props.name}</div>
                <div className="region">{props.region}</div>
            </div>
            
            <h6>Pricing</h6>
            <div className="priceWeek">
                <div>
                    1 Week - 1 Month
                </div>
                <div>
                    {props.price}
                </div>
            </div>
            <div className="priceMonth">
                <div>
                    6 Months
                </div>
                <div>
                    {props.price*5}
                </div>
            </div>
            <div className="priceYear">
                <div>
                    1 Year
                </div>
                <div>
                    {props.price*9}
                </div>
            </div>
          <button className="popupButon" onClick={props.closePopup}>Close</button>
          </div>
        </div>
      );
}

export default Popup;