import  { FC } from 'react'


interface weather{
    main?: string,
    id?:number
}
interface Currentweather {
    temp?: number ;
    feels_like?: number;
    wind_speed?: number;
    visibility?: number;
    humidity?: number;
    weather?: Array<weather>;
  }
interface Props {
    currentWeather : Currentweather
  }

const CurrentWeather :FC<Props> = (props) => {
    const temp =  props.currentWeather.temp + '°C'
    const feels_temp = props.currentWeather.feels_like +'°C'
    const weather =props.currentWeather.weather?.map((data)=>data.main)
    const visibility = props.currentWeather.visibility?props.currentWeather.visibility/1000:props.currentWeather.visibility
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',background:'rgba(255, 255, 255, 0.28)',borderRadius:'15px',padding:'30px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'280px'}}>
            <h1>{temp}</h1>
            <h2>{weather}</h2>        
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'550px'}}>
                <h6>FEELS - {feels_temp}</h6>
                <h6>WIND - {props.currentWeather.wind_speed} km/h</h6>
                <h6>VISIBILITY - {visibility} km</h6>
                <h6>HUMIDITY {props.currentWeather.humidity}%</h6>
                </div>    
        </div>
    )
}

export default CurrentWeather
