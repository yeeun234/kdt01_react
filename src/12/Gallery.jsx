import TailCard from "../UI/TailCard"
export default function Gallery() {
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
  return (
    <div>
      <TailCard title={item.galTitle}subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword ={item.galSearchKeyword}/>
    </div>
  )
}
