import {FC} from 'react'

interface MyLocation {
    Latitude?: number ;
    Longitude?: number ;
    Area?:string;
    Country?:string;
  }

interface Props {
    location:MyLocation
  }

  const Location: FC<Props> = (props) => {
    const area = props.location.Area +','+ props.location.Country
    const date:Date = new Date();
    const currentDate = date.toDateString()
  
    return (
        <div style={{display:'flex',flexDirection:'column'}}>   
            <h1>{area}</h1>
            <h4>{currentDate}</h4>
        </div>
    )
}

export default Location
