import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        googleSignIn()
            // .then(res => res.json())
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => {
                        res.json()
                        console.log(res)
                    })
                    .then(() => {
                        navigate('/');
                    })
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center py-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;