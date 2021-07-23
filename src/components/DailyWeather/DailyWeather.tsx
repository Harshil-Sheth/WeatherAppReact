import { FC } from "react";
import water_drop from './water_drop_white.svg'
// import windSpeed from './wind_speed.svg'

interface weather {
  main?: string;
  id?: number;
  icon?:string;
}

interface Dailyweather {
  temp?: Object;
  dt: number;
  wind_speed?: number;
  humidity?: number;
  sunrise?: number;
  weather?: Array<weather>;
}

interface Props {
  dailyWeather: Array<Dailyweather>;
}

const DailyWeather: FC<Props> = (props) => {

    const date:Date = new Date();
    const currentDate = date.toLocaleDateString()
    const tomorrow:Date = new Date(currentDate)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowDate = tomorrow.toLocaleDateString();
    
    return (
      <div style={{padding:'50px',display:'flex',flexDirection:'column'}}>
        <h1 style={{marginLeft:'30px',marginBottom:'30px',width:'280px',padding:'10px',borderRadius:'10px',background:'rgba(255, 255, 255, 0.28)'}}>Daily Forecast</h1>
      <ul className="scroll" style={{display:'flex', justifyContent:'space-between',listStyle:'none',paddingLeft:'0px',height: "240px",
}}>
        {props.dailyWeather.map((data) =>{
          
          var icon = data.weather?.map(({icon})=>icon)
          const newicon = icon&&icon[0]
          const iconSrc ='https://openweathermap.org/img/wn/'+ newicon +'.png'
          
             return  <li key={data.sunrise} style={{ padding: "8px"}}>
            <button style={{height:'200px',border:'none',borderRadius:'10px',background:'rgba(255, 255, 255, 0.28)',padding:'10px'}}>
              <span style={{height:'150px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div>
                <p style={{margin:'0px'}}>{new Date(data.dt * 1000).toLocaleDateString()===currentDate?'Today':new Date(data.dt * 1000).toLocaleDateString()===tomorrowDate?'Tomorrow': new Date(data.dt * 1000).toDateString()}</p>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'center'}}><div>{data.weather?.map(({ main }) => main)} </div><div><img src={iconSrc} alt='weather-icon'/></div></div>
                </div>
                <div  style={{fontSize:'14px',display:'flex',justifyContent:'space-between'}}>
                <span style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <svg width="14" height="14" viewBox="0 0 10 14" style={{transform:'rotate(60deg)'}}><path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z" ></path></svg>
                {data.wind_speed} km/h</span>
                <span style={{display:'flex', justifyContent:'center',alignItems:'center'}}><img src={water_drop} alt='humidity'/>{data.humidity}%</span></div>
                <div style={{width:'120px',fontSize:'18px',display:'flex',justifyContent:'space-between',textAlign:'center'}}><span>&#9660;27°C</span><span>&#9650;36°C</span></div>
              </span>
            </button>
          </li>;
})}
      </ul>
    </div>
  );
};

export default DailyWeather;
