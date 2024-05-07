import { FaRegCircleUser } from "react-icons/fa6";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

function ContactCard({ contact }) {

    const {isOpen,onOpen,onClose} = useDisclouse();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Successfully");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div
                key={contact.id}
                className='flex items-center 
                    justify-between bg-yellow p-2 rounded-lg'>
                <div
                    className='flex gap-1'>
                    <FaRegCircleUser
                        className='text-orange text-4xl' />
                    <div >
                        <h2 className='font-medium'>{contact.name}</h2>
                        <p className='text-sm'>{contact.email}</p>
                    </div>
                </div>
                <div
                    className='flex text-2xl'>
                    <RiEditCircleLine 
                        onClick={onOpen} 
                        className="cursor-pointer" />
                    <MdDeleteOutline
                        onClick={() => deleteContact(contact.id)}
                        className='text-orange cursor-pointer' />
                </div>
            </div>
            <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </>

    )
}

export default ContactCard
