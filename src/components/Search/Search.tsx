import React, { Dispatch, FC, SetStateAction, useState } from "react";
import './Search.css'
import cities from '../../cities.json'


interface Props {
  setcity:Dispatch<SetStateAction<string>>;
}

const Search:FC<Props> = (props) => {
  
  const [input, setInput] = useState("");
  
  const searchedCity = cities.filter(data=>data.name.toLowerCase().includes(input.toLowerCase()))
  
    function handleChange (e:React.ChangeEvent<HTMLInputElement>):void {
        const { value } = e.target;
        setInput(value);
      }
      function clickEvent(e: React.MouseEvent<HTMLLIElement>){
        const input = e.target as HTMLLIElement;
        props.setcity(input.innerText)
        // input.innerText
        setInput('')
    }
    let clear = input.length>1? 'fa fa-close icon2': 'none'
    let search = input.length>1? 'form-control input-search': 'form-control'
    let searchList = input.length>1? 'suggestions': 'no-suggestions'

    return (
        <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
              <input
                type="text"
                className={search}
                placeholder="Search Location"
                style={{
                  border: "1x solid black",
                  borderRadius: "20px",
                  width: "500px",
                }}
                value={input}
          onChange={handleChange}
              />
          {input.length > 1 ? 
              <ul className={searchList} style={{position:"absolute"}}>
                
                {searchedCity.map((data)=>
                <li key={data.id} onClick={(e:React.MouseEvent<HTMLLIElement>)=>clickEvent(e)} >
                  {data.name}
                  <i
                
                className='fa fa-search icon1'
              ></i>
                </li>
                )}
                  
        </ul>
           : 
           <></>
          }
        </div>
              <i
                onClick={() => setInput('')}
                className={clear}
              ></i>
            </div>
          </div>
    )
}

export default Search
