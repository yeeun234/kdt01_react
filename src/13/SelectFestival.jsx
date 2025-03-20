
export default function SelectFestival() {

    const getFetch = async () => {
        const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${VITE_APP_API_KEY}&pageNo=1&numOfRows=39&resultType=json`;
        const res = await fetch(url);
        const data = await res.json();

        const festivalList = data.getFestivalKr.item;
        console.log(festivalList);
    }

    getFetch();
  return (
    <div>
      <select name="" id="">
        <option value="김"></option>
      </select>
      
    </div>
  )
}
