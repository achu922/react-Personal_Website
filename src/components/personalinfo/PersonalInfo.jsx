import React, { useState } from 'react';
import axios from 'axios';
import './personalinfo.css';
const temp = "0";

function PersonalInfo()
{
  const [API_KEY, setAPI_Key] = useState('');
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState({});
  const [playerRank, setPlayerRank] = useState({});
  
  
  
  
  function searchForPlayer(event)
  {

    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
    
    

    axios.get(APICallString).then(function(response) {
      //Worked
      
      setPlayerData(response.data);
      console.log(response);
    }).catch(function(error) {
      //Error
      console.group(error);
    });
    
  }
  function searchForPlayerRank(event)
  {
    var APICallRank = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + playerData.id + "?api_key=" + API_KEY;

    axios.get(APICallRank).then(function(response) {
      //Worked
     
      setPlayerRank(response.data[0]);
      console.log(response.data);
    }).catch(function(error) {
      //Error
      console.group(error);
    });
    
  }

  

  return(
    <div className='container'>
      <div className='steps'>
        Steps to Search for Summoner: <br/><br/>
        1. Paste your RIOT API Key in the top input box. You can find your API Key using the link below. <br/>
        <a className='here-link' href='https://developer.riotgames.com/' target='_blank' >RIOT Developer Portal</a><br/><br/>
        2. Enter a Summoner name in the second input box and click search.<br/><br/>
        3. Press the "Find Rank" to see the Rank of Summoner inputted

      </div>
      <div className='A1'>
      Search for Summoner
  
        <div>
          <input type='text' placeholder='Enter your RIOT API KEY' onChange={e => setAPI_Key(e.target.value)}></input>         
          <div className='header'>
            <input type='text' placeholder='Enter Summoner Name' onChange={e => setSearchText(e.target.value)}></input>
            <button onClick={e => searchForPlayer(e)}>Search</button> 
          </div>
        </div>   
           
        {JSON.stringify(playerData) != '{}' ? 
        <>
          <p>{playerData.name}</p>
          <img className='userProf' src= {"http://ddragon.leagueoflegends.com/cdn/12.9.1/img/profileicon/" + playerData.profileIconId + ".png"} />
          <p>ProfileICONID: {playerData.profileIconId} </p>
          <p>Summoner level: {playerData.summonerLevel}</p>
          {/* <p>Summoner ID: {playerData.id}</p> */}
        </> :
          <><p>No Player data</p></>}    


        <div className='rank_container'>
          <div className='rank'>
            <button onClick={e => searchForPlayerRank(e)}>Find Rank</button>
          </div>
          {JSON.stringify(playerRank) != '{}' ? 
          <>
            <p>Tier: {playerRank.tier} {playerRank.rank}</p>
            <p>Wins: {playerRank.wins} | Losses: {playerRank.losses}</p>
          </> :
            <><p>No Player data</p></>}   

        </div>
          
      </div>

    </div>
    
    
  );

  
}


export default PersonalInfo