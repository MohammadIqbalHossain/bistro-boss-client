import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(
        {
            queryKey: ['users'],
            queryFn: async () => {
                const res = await fetch('http://localhost:5000/users')
                return res.json();
            }
        })

    const handleDelete = () => {
        //Todo:
    }

    return (
        <div>
            <h2 className="text-3xl font-bold my-4">Toal users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user.role === 'admin' ? 'Admin' : (
                                        <button className="btn btn-ghost bg-orange-600 text-xl text-white">
                                            <FaUserShield />
                                        </button>
                                    )
                                }
                            </td>
                            <td>
                                <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-xl text-white">
                                    <FaTrashAlt />
                                </button>
                            </td>

                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;