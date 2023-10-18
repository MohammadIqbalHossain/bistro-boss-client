import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import menuCover from '../../../assets/menu/banner3.jpg';
import pizzaCover from '../../../assets/menu/pizza-bg.jpg';
import saladCover from '../../../assets/menu/salad-bg.jpg';
import soupCover from '../../../assets/menu/soup-bg.jpg';
import dessertCover from '../../../assets/menu/dessert-bg.jpeg';



const Menu = () => {
    return (
        <div>
            {/* For title of favicon */}
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Menu page cover and title */}
            <Cover
                img={menuCover}
                title="OUR MENU"
                description="Would you like to try a dish?">
            </Cover>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"---Don't miss---"}
            ></SectionTitle>
            {/* Offered category */}
            <MenuCategory categoryName="offered"></MenuCategory>

            {/* Pizza category */}
            <Cover
                img={pizzaCover}
                title="PIZZA"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
            </Cover>
            <MenuCategory categoryName="pizza"></MenuCategory>

              {/* salads category */}
              <Cover
                img={saladCover}
                title="salads"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
            </Cover>
            <MenuCategory categoryName="salad"></MenuCategory>

             {/* soups category */}
             <Cover
                img={soupCover}
                title="soups"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
            </Cover>
            <MenuCategory categoryName="soup"></MenuCategory>


        </div>
    );
};

export default Menu;