import { useState,useEffect } from "react"

export default function BoxOffice() {
    //the variable which will be rendered in screen
    const [tags,setTags] = useState([]);

    //take the daily boxoffice data
    const getFetchData = async () =>{
        let url ='https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url =`${url}key==20250310`;
        console.log(url)

        const resp = await fetch(url);
        const data = await resp.json();

        let boxList = data.boxOfficeResult.dailyBoxOfficeList ;
        console.log(boxList);
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
