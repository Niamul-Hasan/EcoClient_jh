import { RiAlarmWarningLine } from 'react-icons/ri';
const DeleteBooking = () => {
    return (
        <div>
            <input type="checkbox" id="delete-user" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='text-4xl text-error'><RiAlarmWarningLine /></h1>
                    <h3 className="font-bold text-lg text-red-500">Are you SURE to DELETE!</h3>
                    <p className="py-4 text-yellow-500 text-xl">Once a user is deleted can never be restored!!!</p>
                    <div className="modal-action">
                        <button
                            onClick=""
                            className="btn btn-xs border-0 bg-red-500 text-black">Remove User</button>
                        <label htmlFor="delete-user" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBooking;