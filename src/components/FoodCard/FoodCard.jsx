import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, price, recipe, image, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleFoodOrder = item => {
        console.log(item);
        if (user && user.email) {

            const cartItem = {
                menuItemId: _id,
                name,
                price,
                image,
                email: user.email
            }

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your order is successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now.'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location });
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute top-4 right-4 px-4 rounded-md bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleFoodOrder(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-300">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;