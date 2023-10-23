import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/bird.png";
import img4 from "../../../assets/1.png";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from 'framer-motion';
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
const images = [
    img1, img2, img3, img4
];
const ExtraTwo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-4 rounded-2xl shadow-xl shadow-slate-200 my-2">
            <div className='rounded-lg shadow-lg shadow-orange-400 mb-4'>
                <div className="text-2xl font-serif font-semibold w-fit ms-2 my-4 border-b border-b-teal-500">
                    About Handicrafts
                </div>
                <p className="text-md font-semibold ms-8 flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto laboriosam accusamus dolorum eveniet veniam eius voluptas nemo nobis molestias iusto quasi, necessitatibus quia rerum ipsa amet quibusdam dignissimos minus.</p>
            </div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} duration={2000}>
                {images.map((each, index) => (
                    <div className="card card-compact glass shadow-xl min-h-full" key={index} style={{ width: "98%" }}>
                        <div className="card-body">
                            <img style={{ objectFit: "cover", width: "95%", height: "180px", borderRadius: "20px" }} alt="Slide Image" src={each} className="mx-auto" />
                        </div>
                    </div>
                ))}
            </Slide>
        </motion.div>
    );
};

export default ExtraTwo;