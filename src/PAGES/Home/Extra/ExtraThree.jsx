import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from "react-router-dom";

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
];


const ExtraThree = () => {
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ["latestProducts"],
        queryFn: async () => {
            const res = await fetch('https://eco-server-ecocraftz.vercel.app/latest');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleSelected = (id) => {
        navigate(`/products/${id}`);
    }
    return (
        <div className="mx-4 mt-14 mb-6">
            <div className="text-2xl font-serif font-semibold w-fit mx-auto my-4 border-b border-b-amber-500">
                New Arrival
            </div>


            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} duration={3000}>
                {data.map((each, index) => (
                    <div className="card card-compact glass shadow-xl min-h-full" key={index} style={{ width: "98%" }}>
                        <div className="card-body">
                            <img onClick={() => handleSelected(each?._id)}
                                style={{ objectFit: "cover", width: "95%", height: "180px", borderRadius: "20px" }} alt="Slide Image" src={each?.image} className="mx-auto cursor-pointer" />
                        </div>
                    </div>
                ))}

            </Slide>
        </div>

    );
};

export default ExtraThree;