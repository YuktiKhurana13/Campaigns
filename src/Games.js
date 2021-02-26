import React, {useState} from 'react';
import './Games.css';
import price from './img/Price.png';
import file from './img/file.png';
import statistics from './img/statistics.png';
import calendar from './img/calendar.png';
import Popup from './Popup';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Games(props){

    // to check when to show popup
    const [showPopup,setPopup]=useState(false);
    //to check when to show calender
    const [showCalender,setCalender]=useState(false);
    // set states of calendar date
    const [calDate, setCalDate] = useState(new Date())

    const [popupProps,setProps] = useState({
        "price":"",
        "name":"",
        "region":"",
        "image_url":""
    });
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today=new Date();

    const togglePopup=(item)=> { 
        setPopup(!showPopup);
        let newPopupProps = {
            price:item.price,
            name:item.name,
            region:item.region,
            image_url:item.image_url,
            closePopup: setPopup(!showPopup)
        }
        setProps(newPopupProps); 

    } 

    const clickCalender = (item) =>{
        let calenderDate=new Date(item.createdOn);
        setCalDate(calenderDate);
        setCalender(!showCalender);
    }

    const changeCalender = (e) =>{
        setCalender(!showCalender);
        // change results based on calendar date click
        setCalDate(e);
    }

    return(
        <div>
            {props.data?.map((item)=> {
                const dte=new Date(item.createdOn);
                var gameDate=monthNames[dte.getMonth()]+" "+dte.getFullYear()+", "+dte.getDate();
                const diff=Math.floor((today.getTime()-dte.getTime())/(1000 * 3600 * 24));
                    return(
                        <div className="campaigns-item" key={item.name}>
                            <div className="campaign-date">
                               <div>{gameDate}</div>
                                <div className="difference">{Math.abs(diff) + " Days "+ (diff<0?"Ahead":"Ago")}</div>
                            </div> 

                            <div className="campaign-name">
                                 <img src={item.image_url} />
                                 <div className="game-name">
                                    <div className="name">{item.name} </div>
                                    <div className="region">{item.region} </div>
                                 </div>
                            </div>

                            <div className="campaign-pricing" onClick={()=>togglePopup(item)}>
                                <img src={price} />View Pricing
                            </div>  

                            <div className="campaign-actions">
                                <div><img src={file} />CSV</div>
                                <div><img src={statistics} />Report</div>
                                <div><img className="calender" onClick={()=>clickCalender(item)} src={calendar} />Schedule Again
                                    <div className="showCalender"></div>
                                </div>
                                
                            </div>
                        </div> 
            )})}
                {showCalender?
                    <Calendar onChange={(e)=>changeCalender(e)} value={calDate} />
                    :null  
                }

                {/* //dashboard-popup */}
                {showPopup ?  
                    <Popup  
                            price={popupProps.price}  
                            name={popupProps.name}
                            region={popupProps.region}
                            image_url={popupProps.image_url}
                            closePopup={togglePopup}  
                    />  
                    : null  
                }    
        </div>
    )
}

export default Games;