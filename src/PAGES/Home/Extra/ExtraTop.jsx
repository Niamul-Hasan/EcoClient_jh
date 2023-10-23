import { NavLink } from "react-router-dom";

const ExtraTop = () => {
    return (

        <div className="mx-4 my-4">

            <div className="grid grid-cols-2 justify-between items-center lg:hidden gap-4">
                <div className="text-xl text-center p-2 border border-amber-500">
                    <NavLink to='/catagory'
                    >All Catagories</NavLink>

                </div>
                <div className="text-xl text-center p-2 border border-red-500">
                    <NavLink to='/dashboard'
                    >Dashboard</NavLink>
                </div>
                <div className="text-xl text-center p-2 border border-green-500">
                    <NavLink to='/about'
                    >About</NavLink>
                </div>
                <div className="text-xl text-center p-2 border border-blue-500">
                    <NavLink to='/about'
                    >Contact</NavLink>
                </div>

            </div>
        </div>
    );
};

export default ExtraTop;