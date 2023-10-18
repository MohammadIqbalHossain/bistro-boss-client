import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg';

import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-img overlay bg-fixed  my-20 py-16 text-white">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>

            <div className="md:flex items-center space-x-20 px-32 py-20 text-xl z-10">
                <img className="md:w-[400px]" src={featuredImg} alt="" />
                <div className="space-y-4">
                    <p>March 20, 2023</p>
                    <h4>WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Read more</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;