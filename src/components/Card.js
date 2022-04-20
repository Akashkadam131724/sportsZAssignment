import React from 'react'
import myimage from './player-images/63706.jpg'
function Card({renderData}) {
  return (
    <div className='card_container'>
    {
      renderData.length < 1 ? <h1>No data found...</h1> : renderData && renderData.sort((a,b) =>{
        return a.Value - b.Value
      }).map((item, indx) => {
        return (<div className="card" key={item.Id}>
          <img src={require(`./player-images/${item.Id}.jpg`)} alt="Avatar" className='img'/>
          <div className="container">
            <h2><b>{item.PDName}</b></h2>
            <h2>${item.Value}M</h2>
            <p className='skill'>{item.SkillDesc}</p>
          </div>
          {
            item.UpComingMatchesList && item.UpComingMatchesList.map((item, indx) => {
              return <div className='upcoming' key={indx}>
                <div className='match'>upcoming match : {item.CCode} vs {item.VsCCode}</div>
                <div className='date'>
                  { item.MDate ? item.MDate : "no upcoming match date found"  }
                </div>
              </div>
            })
          }
        </div>)
      })
    }
      </div>
  )
}

export default Card