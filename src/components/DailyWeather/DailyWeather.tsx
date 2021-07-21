import { FC } from "react";

interface weather {
  main?: string;
  id?: number;
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
    <div style={{overflow:'hidden',paddingTop:'50px',paddingRight:'50px',paddingLeft:'50px',display:'flex',flexDirection:'column'}}>
        <h1 style={{marginLeft:'20px',marginBottom:'30px'}}>Daily Forecast</h1>
      <ul style={{display:'flex', justifyContent:'space-around',listStyle:'none',paddingLeft:'0px',whiteSpace:'nowrap'}}>
        {props.dailyWeather.map((data) =>{
             return  <li key={data.sunrise}>
            <button style={{height:'130px',border:'none',borderRadius:'10px',background:'rgba(255, 255, 255, 0.28)',padding:'10px'}}>
              <span style={{height:'120px',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                <p style={{margin:'0px'}}>{new Date(data.dt * 1000).toLocaleDateString()===currentDate?'Today':new Date(data.dt * 1000).toLocaleDateString()===tomorrowDate?'Tomorrow': new Date(data.dt * 1000).toLocaleDateString()}</p>
                <div  style={{fontSize:'14px',display:'flex',justifyContent:'space-between'}}><span>{data.wind_speed} km/h</span><span>{data.humidity}%</span></div>
                <div style={{width:'120px',fontSize:'18px',display:'flex',justifyContent:'space-between'}}><p>&#9660;27°C</p><p>&#9650;36°C</p></div>
              </span>
            </button>
          </li>;
})}
      </ul>
    </div>
  );
};

export default DailyWeather;
