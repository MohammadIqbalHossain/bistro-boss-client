
const FoodCard = ({ item }) => {
    const { name, price, recipe, image } = item;
    console.log(name);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute top-4 right-4 px-4 rounded-md bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-300">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;