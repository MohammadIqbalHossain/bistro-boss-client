import useMenu from "../../../Hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ categoryName }) => {
    const [menu, loading] = useMenu();
    const offer = menu.filter(item => item.category === `${categoryName}`);
    return (

        <div>
            <div className="grid md:grid-cols-2 gap-10 my-12 ">
                {
                    offer.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                {loading}
            </div>
            <button className="btn btn-outline capitalize block mx-auto my-6">Order your favourite food</button>
        </div>

    );
};

export default MenuCategory;