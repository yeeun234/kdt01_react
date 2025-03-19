import { useEffect ,useState } from "react";
import TailCard from "../UI/TailCard"

export default function Gallery() {

    // [card, setCard] = useState([]);

    const item = {
        galContentId: "2988721",
        galContentTypeId: "17" ,
        galTitle: "태종대유원지",
        galWebImageUrl: "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg",
        galCreatedtime: "20230519164047",
        galModifiedtime: "20230519164107",
        galPhotographyMonth: "202206",
        galPhotographyLocation: "부산광역시 영도구 동삼동",
        galPhotographer: "한국관광공사 송재근",
        galSearchKeyword: "태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"
    }

    //패치
    const getFetch = async ()  => {
        const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${VITE_APP_API_KEY}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ed%83%9c%ec%a2%85%eb%8c%80&_type=json`;
        const response = await fetch(url);
        // console.log("response" ,response);
        const data = await response.json();
        // console.log("data" ,data); 

        //하나씩 가져오기
        let galList = data.response.body.items.item; 
        // console.log("galList" ,galList);

        let tm = galList.map(item => 
            <TailCard key={item.galContentId} title={item.galTitle} subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword={item.galSearchKeyword} />
        );

        setCard(tm);
    };
   
    //패치
    useEffect(() => {
        // getFetch();
    },[]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 "> 
      <TailCard key={item.galContentId} title={item.galTitle} subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword={item.galSearchKeyword} />
      <TailCard key={item.galContentId} title={item.galTitle} subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword={item.galSearchKeyword} />
      <TailCard key={item.galContentId} title={item.galTitle} subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword={item.galSearchKeyword} />

    </div>
  )
}
