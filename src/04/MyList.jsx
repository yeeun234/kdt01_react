import MyListItem from './MyListItem';
import MyListData from "./MyListData";
let show = true;

export default function MyList() {
    
    let tags = MyListData.map(item => <MyListItem 
                                        key={item.title}
                                        title={item.title} 
                                        imgUrl={item.imgUrl} 
                                        content={item.content}
                                        show={show}/>);
    console.log(tags);
    // const dat = { "title" : "HTML",
    //     "imgUrl" : "./img/html.png", 
    //     "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
    //   };
  return (
    
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 '>
      {/* <MyListItem title={dat.title} imgUrl={dat.imgUrl} content={dat.content}/>
      <MyListItem title={dat.title} imgUrl={dat.imgUrl} content={dat.content}/>
      <MyListItem title={dat.title} imgUrl={dat.imgUrl} content={dat.content}/> */}
      {tags}
    </div>
  )
}
