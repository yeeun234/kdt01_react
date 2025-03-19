import { useState, useEffect, useRef } from "react"
import TailCard from "../UI/TailCard"
import TailButton from '../UI/TailButton'
import { PiGlobeSimpleThin } from "react-icons/pi";
import TailInput from "../UI/TailInput";

export default function Gallery() {

    const [card, setCard] = useState([]);

    const item = {
        galContentId: "2988721",
        galContentTypeId: "17",
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
    const getFetch = async () => {
        const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
        const location = encodeURIComponent("금정산");
        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${VITE_APP_API_KEY}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${location}&_type=json`;
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
        getFetch();
    }, []);


    //검색(인풋)창 입력값 받기위해 레퍼변수 선언
    const inputk = useRef();
    


    const onSearch = () => {
        console.log("input" ,inputk.current); //확인 클릭시 입력값 콘솔에출력
        let info = encodeURIComponent(inputk.current); //한글을 인코딩
        console.log("info" ,info);
    }


    return (
        <div className="w-full flex flex-col justify-center items-center ">

            <div className='w-8/10 h-full flex-col justify-center items-center mt-5 bg-gray-50'>
                <h1 className='text-2xl font-bold inline-flex justify-center items-center mt-10'>한국관광공사 관광 사진 정보 <PiGlobeSimpleThin />
                </h1>
                <div className='flex justify-center items-center w-full h-15   m-2 '>
                    <TailInput ref={inputk} />
                    <TailButton caption="확인" color="blue" onClick={onSearch} />
                    <TailButton caption="취소" color="blue" />
                </div>
            </div>
            <div className="m-10  w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-4 place-content-center place-items-center">
                {card}
            </div>
        </div>
    )
}
