import { useState,useEffect } from "react"

export default function BoxOffice() {
    //the variable which will be rendered in screen
    const [tags,setTags] = useState([]);

    //take the daily boxoffice data
    const getFetchData = async () =>{
        let url =''
        url =`${url}`
    } 

    useEffect(()=>{
        //will fetch once when component was run.
        getFetchData();
    },[]);
  return (
    <div>
      v
    </div>
  )
}
