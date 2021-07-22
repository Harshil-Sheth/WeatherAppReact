import  { FC } from 'react'

interface weather{
    main?: string,
    id?:number,
    icon?:string
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
    const weatherIcon =props.currentWeather.weather?.map((data)=>data.icon)
    const newIcon = weatherIcon&&weatherIcon[0]
    const iconSrc ='http://openweathermap.org/img/wn/'+ newIcon +'.png'
    const visibility = props.currentWeather.visibility?props.currentWeather.visibility/1000:props.currentWeather.visibility
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',background:'rgba(255, 255, 255, 0.28)',borderRadius:'15px',padding:'30px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'500px'}}>
            <h1>{temp}</h1>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
            <h2>{weather}</h2>     
            <img src={iconSrc} alt='weather-icon'/>   
            </div>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'760px'}}>
            <div style={{display:'flex',alignItems:'center',width:'140px',justifyContent:'space-between'}}>
                <svg width="24" height="24" viewBox="0 0 9 20"><path d="M5 13.8672C5.18229 13.9323 5.35156 14.0234 5.50781 14.1406C5.66406 14.2578 5.79427 14.3945 5.89844 14.5508C6.00911 14.7005 6.09375 14.8698 6.15234 15.0586C6.21745 15.2409 6.25 15.4297 6.25 15.625C6.25 15.8854 6.20117 16.1296 6.10352 16.3574C6.00586 16.5853 5.8724 16.7839 5.70312 16.9531C5.53385 17.1224 5.33529 17.2559 5.10742 17.3535C4.87956 17.4512 4.63542 17.5 4.375 17.5C4.11458 17.5 3.87044 17.4512 3.64258 17.3535C3.41471 17.2559 3.21615 17.1224 3.04688 16.9531C2.8776 16.7839 2.74414 16.5853 2.64648 16.3574C2.54883 16.1296 2.5 15.8854 2.5 15.625C2.5 15.4297 2.5293 15.2409 2.58789 15.0586C2.65299 14.8698 2.73763 14.7005 2.8418 14.5508C2.95247 14.3945 3.08268 14.2578 3.23242 14.1406C3.38867 14.0234 3.5612 13.9323 3.75 13.8672V7.5H5V13.8672ZM7.5 12.8809C7.87109 13.291 8.16081 13.7467 8.36914 14.248C8.57747 14.7493 8.68164 15.2767 8.68164 15.8301C8.68164 16.416 8.56445 16.9629 8.33008 17.4707C8.10221 17.9785 7.78971 18.4212 7.39258 18.7988C6.99544 19.1699 6.53646 19.4629 6.01562 19.6777C5.49479 19.8926 4.94792 20 4.375 20C3.79557 20 3.24544 19.8926 2.72461 19.6777C2.21029 19.4629 1.75456 19.1699 1.35742 18.7988C0.960286 18.4212 0.644531 17.9785 0.410156 17.4707C0.182292 16.9629 0.0683594 16.416 0.0683594 15.8301C0.0683594 15.2767 0.172526 14.7493 0.380859 14.248C0.589193 13.7467 0.878906 13.291 1.25 12.8809V3.125C1.25 2.69531 1.33138 2.29167 1.49414 1.91406C1.6569 1.53646 1.87826 1.20768 2.1582 0.927734C2.44466 0.641276 2.77669 0.416667 3.1543 0.253906C3.53841 0.0846354 3.94531 0 4.375 0C4.80469 0 5.20833 0.0846354 5.58594 0.253906C5.96354 0.416667 6.29232 0.641276 6.57227 0.927734C6.85872 1.20768 7.08333 1.53646 7.24609 1.91406C7.41536 2.29167 7.5 2.69531 7.5 3.125V12.8809ZM4.375 18.75C4.77865 18.75 5.16276 18.6751 5.52734 18.5254C5.89844 18.3757 6.22396 18.1706 6.50391 17.9102C6.78385 17.6497 7.00521 17.3405 7.16797 16.9824C7.33724 16.6243 7.42188 16.2402 7.42188 15.8301C7.42188 15.3418 7.31445 14.8958 7.09961 14.4922C6.88477 14.082 6.60156 13.7142 6.25 13.3887V3.125C6.25 2.86458 6.20117 2.62044 6.10352 2.39258C6.00586 2.16471 5.8724 1.96615 5.70312 1.79688C5.53385 1.6276 5.33529 1.49414 5.10742 1.39648C4.87956 1.29883 4.63542 1.25 4.375 1.25C4.11458 1.25 3.87044 1.29883 3.64258 1.39648C3.41471 1.49414 3.21615 1.6276 3.04688 1.79688C2.8776 1.96615 2.74414 2.16471 2.64648 2.39258C2.54883 2.62044 2.5 2.86458 2.5 3.125V13.3887C2.14844 13.7142 1.86523 14.082 1.65039 14.4922C1.43555 14.8958 1.32812 15.3418 1.32812 15.8301C1.32812 16.2402 1.40951 16.6243 1.57227 16.9824C1.74154 17.3405 1.96615 17.6497 2.24609 17.9102C2.52604 18.1706 2.84831 18.3757 3.21289 18.5254C3.58398 18.6751 3.97135 18.75 4.375 18.75Z"></path></svg>
                <h6 style={{margin:0}}>
                 FEELS - {feels_temp}</h6>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'165px',justifyContent:'space-between'}}>
                <svg width="24" height="24" viewBox="0 0 16 12"><path d="M12 3C12 3.41667 11.9219 3.80729 11.7656 4.17188C11.6094 4.53125 11.3932 4.84896 11.1172 5.125C10.8464 5.39583 10.5286 5.60938 10.1641 5.76562C9.79948 5.92188 9.41146 6 9 6H0V5H9C9.27604 5 9.53385 4.94792 9.77344 4.84375C10.0182 4.73958 10.2318 4.59635 10.4141 4.41406C10.5964 4.23177 10.7396 4.02083 10.8438 3.78125C10.9479 3.53646 11 3.27604 11 3C11 2.72396 10.9479 2.46615 10.8438 2.22656C10.7396 1.98177 10.5964 1.76823 10.4141 1.58594C10.2318 1.40365 10.0182 1.26042 9.77344 1.15625C9.53385 1.05208 9.27604 1 9 1C8.72396 1 8.46354 1.05208 8.21875 1.15625C7.97917 1.26042 7.76823 1.40365 7.58594 1.58594C7.40365 1.76823 7.26042 1.98177 7.15625 2.22656C7.05208 2.46615 7 2.72396 7 3H6C6 2.58854 6.07812 2.20052 6.23438 1.83594C6.39062 1.47135 6.60417 1.15365 6.875 0.882812C7.15104 0.606771 7.46875 0.390625 7.82812 0.234375C8.19271 0.078125 8.58333 0 9 0C9.41146 0 9.79948 0.078125 10.1641 0.234375C10.5286 0.390625 10.8464 0.606771 11.1172 0.882812C11.3932 1.15365 11.6094 1.47135 11.7656 1.83594C11.9219 2.20052 12 2.58854 12 3ZM14 5C14.276 5 14.5339 5.05208 14.7734 5.15625C15.0182 5.26042 15.2318 5.40365 15.4141 5.58594C15.5964 5.76823 15.7396 5.98177 15.8438 6.22656C15.9479 6.46615 16 6.72396 16 7C16 7.27604 15.9479 7.53646 15.8438 7.78125C15.7396 8.02083 15.5964 8.23177 15.4141 8.41406C15.2318 8.59635 15.0182 8.73958 14.7734 8.84375C14.5339 8.94792 14.276 9 14 9H12.7344C12.9115 9.30208 13 9.63542 13 10C13 10.276 12.9479 10.5365 12.8438 10.7812C12.7396 11.0208 12.5964 11.2318 12.4141 11.4141C12.2318 11.5964 12.0182 11.7396 11.7734 11.8438C11.5339 11.9479 11.276 12 11 12C10.724 12 10.4635 11.9479 10.2188 11.8438C9.97917 11.7396 9.76823 11.5964 9.58594 11.4141C9.40365 11.2318 9.26042 11.0208 9.15625 10.7812C9.05208 10.5365 9 10.276 9 10H10C10 10.1406 10.026 10.2708 10.0781 10.3906C10.1302 10.5104 10.2005 10.6172 10.2891 10.7109C10.3828 10.7995 10.4896 10.8698 10.6094 10.9219C10.7292 10.974 10.8594 11 11 11C11.1406 11 11.2708 10.974 11.3906 10.9219C11.5104 10.8698 11.6146 10.7995 11.7031 10.7109C11.7969 10.6172 11.8698 10.5104 11.9219 10.3906C11.974 10.2708 12 10.1406 12 10C12 9.85938 11.974 9.72917 11.9219 9.60938C11.8698 9.48958 11.7969 9.38542 11.7031 9.29688C11.6146 9.20312 11.5104 9.13021 11.3906 9.07812C11.2708 9.02604 11.1406 9 11 9H0V8H11H14C14.1406 8 14.2708 7.97396 14.3906 7.92188C14.5104 7.86979 14.6146 7.79948 14.7031 7.71094C14.7969 7.61719 14.8698 7.51042 14.9219 7.39062C14.974 7.27083 15 7.14062 15 7C15 6.85938 14.974 6.72917 14.9219 6.60938C14.8698 6.48958 14.7969 6.38542 14.7031 6.29688C14.6146 6.20312 14.5104 6.13021 14.3906 6.07812C14.2708 6.02604 14.1406 6 14 6C13.8594 6 13.7292 6.02604 13.6094 6.07812C13.4896 6.13021 13.3828 6.20312 13.2891 6.29688C13.2005 6.38542 13.1302 6.48958 13.0781 6.60938C13.026 6.72917 13 6.85938 13 7H12C12 6.72396 12.0521 6.46615 12.1562 6.22656C12.2604 5.98177 12.4036 5.76823 12.5859 5.58594C12.7682 5.40365 12.9792 5.26042 13.2188 5.15625C13.4635 5.05208 13.724 5 14 5Z"></path></svg>
               <h6 style={{margin:0}}>
                 WIND - {props.currentWeather.wind_speed} km/h</h6>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'165px',justifyContent:'space-between'}}>
<svg width="24" height="24" viewBox="0 0 24 12"><path d="M12 0C13.1719 0 14.3125 0.152344 15.4219 0.457031C16.5312 0.761719 17.5938 1.18359 18.6094 1.72266C19.6328 2.25391 20.5938 2.88672 21.4922 3.62109C22.3984 4.35547 23.2344 5.14844 24 6C23.2344 6.85938 22.3984 7.65625 21.4922 8.39062C20.5938 9.11719 19.6328 9.75 18.6094 10.2891C17.5938 10.8203 16.5312 11.2383 15.4219 11.543C14.3125 11.8477 13.1719 12 12 12C10.8281 12 9.6875 11.8477 8.57812 11.543C7.46875 11.2383 6.40234 10.8203 5.37891 10.2891C4.36328 9.75 3.40234 9.11719 2.49609 8.39062C1.58984 7.65625 0.757812 6.85938 0 6C0.757812 5.14844 1.58984 4.35547 2.49609 3.62109C3.40234 2.88672 4.36328 2.25391 5.37891 1.72266C6.40234 1.18359 7.46875 0.761719 8.57812 0.457031C9.6875 0.152344 10.8281 0 12 0ZM12 10.2891C12.5938 10.2891 13.1484 10.1758 13.6641 9.94922C14.1875 9.72266 14.6406 9.41797 15.0234 9.03516C15.4141 8.64453 15.7227 8.19141 15.9492 7.67578C16.1758 7.15234 16.2891 6.59375 16.2891 6C16.2891 5.40625 16.1758 4.85156 15.9492 4.33594C15.7227 3.8125 15.4141 3.35938 15.0234 2.97656C14.6406 2.58594 14.1875 2.27734 13.6641 2.05078C13.1484 1.82422 12.5938 1.71094 12 1.71094C11.4062 1.71094 10.8477 1.82422 10.3242 2.05078C9.80859 2.27734 9.35547 2.58594 8.96484 2.97656C8.58203 3.35938 8.27734 3.8125 8.05078 4.33594C7.82422 4.85156 7.71094 5.40625 7.71094 6C7.71094 6.59375 7.82422 7.15234 8.05078 7.67578C8.27734 8.19141 8.58203 8.64453 8.96484 9.03516C9.35547 9.41797 9.80859 9.72266 10.3242 9.94922C10.8477 10.1758 11.4062 10.2891 12 10.2891ZM7.60547 9.65625C7.17578 9.14062 6.84766 8.57031 6.62109 7.94531C6.39453 7.32031 6.28125 6.67188 6.28125 6C6.28125 5.32812 6.39453 4.67969 6.62109 4.05469C6.84766 3.42969 7.17578 2.85938 7.60547 2.34375C6.55859 2.75781 5.57422 3.27734 4.65234 3.90234C3.73828 4.51953 2.87891 5.21875 2.07422 6C2.87891 6.78125 3.73828 7.48438 4.65234 8.10938C5.57422 8.72656 6.55859 9.24219 7.60547 9.65625ZM21.9258 6C21.1211 5.21875 20.2578 4.51953 19.3359 3.90234C18.4219 3.27734 17.4414 2.75781 16.3945 2.34375C16.8242 2.85938 17.1523 3.42969 17.3789 4.05469C17.6055 4.67969 17.7188 5.32812 17.7188 6C17.7188 6.67188 17.6055 7.32031 17.3789 7.94531C17.1523 8.57031 16.8242 9.14062 16.3945 9.65625C17.4414 9.24219 18.4219 8.72656 19.3359 8.10938C20.2578 7.48438 21.1211 6.78125 21.9258 6ZM12 3.99609C12.2734 3.99609 12.5312 4.05078 12.7734 4.16016C13.0156 4.26172 13.2266 4.40625 13.4062 4.59375C13.5938 4.77344 13.7383 4.98438 13.8398 5.22656C13.9492 5.46875 14.0039 5.72656 14.0039 6C14.0039 6.27344 13.9492 6.53516 13.8398 6.78516C13.7383 7.02734 13.5938 7.23828 13.4062 7.41797C13.2266 7.59766 13.0156 7.74219 12.7734 7.85156C12.5312 7.95312 12.2734 8.00391 12 8.00391C11.7266 8.00391 11.4648 7.95312 11.2148 7.85156C10.9727 7.74219 10.7617 7.59766 10.582 7.41797C10.4023 7.23828 10.2578 7.02734 10.1484 6.78516C10.0469 6.53516 9.99609 6.27344 9.99609 6C9.99609 5.72656 10.0469 5.46875 10.1484 5.22656C10.2578 4.98438 10.4023 4.77344 10.582 4.59375C10.7617 4.40625 10.9727 4.26172 11.2148 4.16016C11.4648 4.05078 11.7266 3.99609 12 3.99609Z"></path></svg>
            <h6 style={{margin:0}}>
                 VISIBILITY - {visibility} km</h6>
            </div>
            <div style={{display:'flex',alignItems:'center',width:'155px',justifyContent:'space-between'}}>
                <svg width="24" height="24" viewBox="0 0 18 18"><path d="M16.998 9.0625C17.2454 9.49219 17.431 9.94466 17.5547 10.4199C17.6784 10.8952 17.7435 11.3802 17.75 11.875C17.75 12.6497 17.6035 13.3789 17.3105 14.0625C17.0176 14.7461 16.6139 15.3418 16.0996 15.8496C15.5853 16.3574 14.9896 16.7578 14.3125 17.0508C13.6354 17.3438 12.9062 17.4935 12.125 17.5C11.3503 17.5 10.6211 17.3535 9.9375 17.0605C9.25391 16.7676 8.6582 16.3639 8.15039 15.8496C7.64258 15.3353 7.24219 14.7396 6.94922 14.0625C6.65625 13.3854 6.50651 12.6562 6.5 11.875C6.5 11.3867 6.56185 10.9049 6.68555 10.4297C6.80924 9.95443 6.99805 9.4987 7.25195 9.0625L12.125 0.625L16.998 9.0625ZM12.125 16.25C12.7305 16.25 13.2969 16.1361 13.8242 15.9082C14.3516 15.6803 14.8138 15.3678 15.2109 14.9707C15.6081 14.5736 15.9206 14.1113 16.1484 13.584C16.3763 13.0566 16.4935 12.487 16.5 11.875C16.5 11.4909 16.4512 11.1133 16.3535 10.7422C16.2559 10.3711 16.1094 10.0195 15.9141 9.6875L12.125 3.125L8.33594 9.6875C8.14714 10.0195 8.00391 10.3711 7.90625 10.7422C7.80859 11.1133 7.75651 11.4909 7.75 11.875C7.75 12.4805 7.86393 13.0469 8.0918 13.5742C8.31966 14.1016 8.63216 14.5638 9.0293 14.9609C9.42643 15.3581 9.88867 15.6706 10.416 15.8984C10.9434 16.1263 11.513 16.2435 12.125 16.25ZM0.25 1.25H4V17.5H0.25V16.25H2.75V13.75H1.5V12.5H2.75V10H0.25V8.75H2.75V6.25H1.5V5H2.75V2.5H0.25V1.25Z"></path></svg>
           <h6 style={{margin:0}}>
                 HUMIDITY - {props.currentWeather.humidity}%</h6>
            </div>
               
            </div>    
        </div>
    )
}

export default CurrentWeather
