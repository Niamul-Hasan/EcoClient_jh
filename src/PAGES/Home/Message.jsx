// eslint-disable-next-line no-unused-vars
import React from 'react';
import bird from "../../assets/bird.png";
import bg from "../../assets/banner02.jpg";
import { motion } from 'framer-motion';
import { BsRocketTakeoff } from "react-icons/bs";
import { GoTelescope } from "react-icons/go";

const Message = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-16 min-h-screen my-8 bg-base-100">

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="hero-content flex-col lg:flex-row border rounded-xl shadow-2xl" >
                    <img src={bird} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-10'>
                        <h1 className="text-5xl font-bold">Message From Chairman</h1>
                        <p className="pt-6">Warm welcome to the world of creativity and craftsmanship at EcoCraftz. As the Chairman, I&#39;m stimulate to present our captivating range of jute and handicraft products. Each piece is a testament to our artisans&#39; dedication and skill, showcasing the beauty of traditional techniques blended with contemporary design.</p>
                        <p className="py-2">At EcoCraftz, we&#39;re committed to sustainability, supporting local communities, International communities and preserving cultural heritage. Our jute and handicraft products not only enhance your circumstance but also reflect our passion for responsible production.</p>
                        <p className="py-2">We&#39;re dignified by your trust in us and invite you to explore our collection. Thank you for being a part of our journey.</p>
                        <div className='pt-2'>
                            <h3 className='font-serif'>With heartfelt gratitude,</h3>
                            <h3 className='font-'><i>Md....</i>.</h3>
                            <h3 className='text-lg font-semibold'>Chairman, EcoCraftz</h3></div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="hero-content flex-col lg:flex-row-reverse  border rounded-xl shadow-2xl">
                    <img src={bird} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-10 flex-shrink'>
                        <h1 className="text-5xl font-bold">Message From Managing Derector</h1>
                        <h2 className="pt-6">
                            <p> Dear Valued Customers and Eco-Conscious Enthusiasts,</p>
                            I am delighted to extend my warmest greetings to you as the Managing Director of Eco Craftz. At Eco Craftz, we are on a mission to make a positive impact on the world by promoting sustainable and eco-friendly practices through our exceptional handcrafted products.
                        </h2>
                        <p className="py-2">As advocates of environmental stewardship, we believe that small actions can lead to significant change. That&#39;s why we are committed to offering a diverse range of beautifully crafted products that not only captivate your senses but also contribute to a greener and more sustainable future.</p>
                        <p className="py-2">Each item in our collection is a labor of love, meticulously crafted by skilled artisans who share our vision for a better world. From recycled materials to natural fibers, we embrace eco-conscious sourcing and prioritize ethical production practices, ensuring that our creations have a minimal environmental footprint.</p>
                        <p className="py-2">
                            Eco Craftz stands for more than just products; it represents a lifestyle that celebrates responsible consumption and appreciation for the natural beauty of our planet. By choosing our handcrafted treasures, you become a part of this movement, supporting local artisans and promoting sustainable livelihoods.</p>
                        <p className="py-2">As a company, we are committed to transparency and continuous improvement. We are constantly seeking innovative ways to reduce waste, conserve resources, and support initiatives that protect our environment. Your feedback and suggestions are invaluable in our journey towards becoming even more eco-friendly.</p>
                        <p className="py-2">Thank you for being a part of the Eco Craftz community. Your support inspires us to keep pushing the boundaries of sustainable craftsmanship and enriching lives around the world. Together, let&#39;s build a brighter and greener future, one beautifully crafted product at a time.</p>

                        <div className='pt-2'>
                            <h3 className='font-serif'>With heartfelt gratitude,</h3>
                            <h3 className='font-'><i>Md....</i>.</h3>
                            <h3 className='text-lg font-semibold'>Managing Director, EcoCraftz</h3></div>

                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="hero max-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content flex-col">
                    <div>
                        <h1 className="text-5xl font-bold text-orange-500 flex flex-row gap-4">Our Mission <span><BsRocketTakeoff /></span></h1>
                        <p className='text-lg text-white font-serif'>Our mission for Jute and Handicrafts products is to promote sustainable and eco-friendly alternatives, celebrate traditional craftsmanship, and empower local artisans. We aim to create high-quality, innovative, and stylish products that showcase the beauty of jute and various handicraft techniques, while also supporting the livelihoods of artisans and contributing to environmental.</p></div>
                    <div>
                        <h1 className="text-5xl font-bold text-teal-500 flex flex-row gap-4">Our Vission <span><GoTelescope /></span></h1>
                        <p className='text-lg text-white font-serif'>Our vision is to establish ourselves as a global leader in the Jute and Handicrafts industry, recognized for our commitment to ethical practices, social responsibility, and environmental sustainability. We aspire to be a driving force in preserving traditional art forms, revitalizing rural economies, and fostering a greater appreciation for culturally rich and environmentally conscious products worldwide.
                        </p></div>

                </div>
            </motion.div>

        </div>
    );
};

export default Message;