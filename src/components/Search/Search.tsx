import React, { useEffect, useState } from "react";
import './Search.css'
const Search = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    function handleChange (e:React.ChangeEvent<HTMLInputElement>):void {
        const { value } = e.target;
        setInput(value);
      }
      function clickEvent(e: React.MouseEvent<HTMLButtonElement>) :void{
        console.log('it works!')
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
                <li>
                  Hii
                  <i
                onClick={clickEvent}
                className='fa fa-search icon1'
              ></i>
                </li>
                <li>
                  Hii
                  <i
                onClick={clickEvent}
                className='fa fa-search icon1'
              ></i>
                </li>
                <li>
                  Hii
                  <i
                onClick={clickEvent}
                className='fa fa-search icon1'
              ></i>
                </li>
                <li>
                  Hii
                  <i
                onClick={clickEvent}
                className='fa fa-search icon1'
              ></i>
                </li>   
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
