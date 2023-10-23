import img1 from '../../../assets/images/membership.jpeg';
import img2 from '../../../assets/images/buyers.jpeg';
import { useEffect } from 'react';
import { useState } from 'react';
import { PiMonitorPlayDuotone } from 'react-icons/pi';
const API = 'AIzaSyCuLQmmz9pY3qFG8fZT97r27q235zqMIy0';
const channelId = "UCN7fzzGn6XsTqBeewTDbBQw";
const url = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`

const ExtraFour = () => {
    const [allVideos, setAllVideos] = useState([]);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(vedios => {
            const result = vedios.items.map(vedio => ({
                ...vedio,
                Vediolink: "https://www.youtube.com/embed/" + vedio.id.videoId
            }))
            setAllVideos(result);
        })
    }, [])

    console.log(allVideos);
    return (
        <div>
            <div>
                <img src={img1} className='w-full' alt="" />
            </div>
            <div>
                <img src={img2} className='w-full' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 my-4 mx-2'>
                {
                    allVideos.map((item, index) => <div key={index} className='w-full max-h-screen rounded-lg'>
                        <iframe width="100%" src={item.Vediolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                        <p>{item.snippet.title}</p>
                        <div>
                            <a href='https://www.youtube.com/@NotoutNoman' target='_blank' rel="noopener noreferrer"><span className='btn btn-sm btn-warning hover:bg-green-600 hover:border-green-600 hover:text-white'>Visit Our Channel
                                <span className='text-xl'><PiMonitorPlayDuotone></PiMonitorPlayDuotone></span></span></a>
                        </div>

                    </div>)

                }
            </div>


        </div>
    );
};

export default ExtraFour;