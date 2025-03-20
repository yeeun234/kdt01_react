

export default function TailCard({ title, subtitle, imgurl, keyword }) {
    const key = keyword.split(', ');
    let tm = key.map(item => 
        <span key={item} className="m-1 font-light text-sm bg-gray-300 rounded-md text-gray-700">{item}</span>);
   
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='w-full h-48'>
            <img className="w-full h-full rounded-t-lg object-cover" src={imgurl} alt={title} />
            </div>
            <div className="w-full p-5">
                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{title}</h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                <div>
                    {tm}
                </div>
            </div>
        </div>
    )
}
