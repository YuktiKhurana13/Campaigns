import React, {useState} from 'react';
import './DisplayedCampaigns.css';
import Games from './Games';
import data from './data.json';

function DisplayedCampaigns(){

    const [state,setState]=useState(data);
    const [selected, setSelected]=useState('');

    const clickHandler=(e)=>{
        if(e.target.innerText==="Upcoming Campaigns"){
            
            let newData=data.data.filter((game)=>{
                const dte=new Date(game.createdOn);
                const today=new Date();
                today.setHours(0,0,0,0);
                if(dte.getTime()>today.getTime()){
                    console.log(dte.getTime()-today.getTime())
                    return true
                }
            });

            let newState={data:newData};
            setState(newState);
            
            setSelected(e.target.innerText)

        }else if(e.target.innerText==="Live Campaigns"){
            
            
            let newData=data.data.filter((game)=>{
                const dte=new Date(game.createdOn);
                const today=new Date();
                today.setHours(0,0,0,0);
                if(dte.getTime()===today.getTime()){
                    console.log(dte.getTime()==today.getTime())
                    return true
                }
            });
            
            let newState={data:newData};
            setState(newState);

            setSelected(e.target.innerText)

        }else if(e.target.innerText==="Past Campaigns"){
            
            let newData=data.data.filter((game)=>{
                const dte=new Date(game.createdOn);
                const today=new Date();
                today.setHours(0,0,0,0);
                console.log(dte+"    "+today)
                if(dte.getTime()<today.getTime()){
                    console.log(dte.getTime()==today.getTime())
                    return true
                }
            });
            
            let newState={data:newData};
            setState(newState);
            setSelected(e.target.innerText)

        }
    }

    return(
        <div>
            <div className="campaigns">
                <div className={selected==="Upcoming Campaigns"?"active":"default"}  onClick={(e)=>clickHandler(e)}>
                    Upcoming Campaigns
                </div>
                <div className={selected==="Live Campaigns"?"active":"default"} onClick={(e)=>clickHandler(e)}>
                    Live Campaigns
                </div>
                <div className={selected==="Past Campaigns"?"active":"default"} onClick={(e)=>clickHandler(e)}>
                    Past Campaigns
                </div>
            </div>

            
                <div className="campaign-header">
                    <div className="date">Date</div>
                    <div className="camapigns">Campaigns</div>
                    <div className="view">View</div>
                    <div className="actions">Actions</div>
                </div>
                <div className="campaign-game card">
                    <Games data={state.data} />
                </div>
           
        </div>
    )
}

export default DisplayedCampaigns;