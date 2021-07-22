import { FC } from "react";
import water_drop from "./water_drop_white.svg";

interface weather {
  main?: string;
  id?: number;
  icon?:string
}

interface Hourlyweather {
  temp?: Object;
  dt: number;
  wind_speed?: number;
  humidity?: number;
  weather?: Array<weather>;
}

interface Props {
  hourlyWeather: Array<Hourlyweather>;
}

const HourlyWeather: FC<Props> = (props) => {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginLeft: "30px", marginBottom: "30px" }}>
        Hourly Forecast
      </h1>
      <ul
        className="scroll"
        style={{
          display: "flex",
          overflow: "overlay",
          overflowY: "hidden",
          justifyContent: "space-between",
          listStyle: "none",
          paddingLeft: "0px",
          whiteSpace: "nowrap",
          margin: 0,
          height: "260px",
        }}
      >
        {props.hourlyWeather.map((data, index, array) => {
         var icon = data.weather?.map(({icon})=>icon)
         const newicon = icon&&icon[0]
         const iconSrc ='http://openweathermap.org/img/wn/'+ newicon +'.png'
          return (
            <li key={data.dt} style={{ padding: "11px"}}>
              <div
                style={{
                  height: "220px",
                  width: "155px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.28)",
                  padding: "15px",
                  textAlign: "center",
                  overflow:'hidden',
                  whiteSpace:'pre-line'                  
                }}
              >
                <span style={{ margin: "0px",fontSize:'13px'  }}>
                  {new Date(data.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }) +
                    " - " +
                    (new Date(index === array.length - 1 ? "" : array[index + 1].dt).toLocaleTimeString([], {hour: "2-digit",minute: "2-digit",})==='Invalid Date'?'--':new Date(
                      index === array.length - 1 ? "" : array[index + 1].dt
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }))}
                </span>
                <div
                  style={{
                    fontSize: "18px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span>{data.temp}°C</span>
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'center'}}><div>{data.weather?.map(({ main }) => main)}</div><div><img src={iconSrc} alt='weather-icon'/></div></div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ transform: "rotate(60deg)" }}
                    >
                      <path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z"></path>
                    </svg>
                    {data.wind_speed} km/h
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={water_drop} alt="humidity" />
                    {data.humidity}%
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HourlyWeather;
