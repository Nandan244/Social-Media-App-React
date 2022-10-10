import React from 'react'
import "./TrendCard.css"
import TrendData from "../../TempData/TrendData"

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends For You</h3>
        {TrendData.map((data,id)=>{
            return(
            <div className='Trend'>
                <span>#{data.name}</span>
                <span>{data.shares}K Shares</span>
            </div>
            )
        })}
    </div>
  )
}

export default TrendCard