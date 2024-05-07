import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email:Yup.string().email("Email is required").required("Email is required")
})

function AddAndUpdateContact({ isOpen, onClose ,isUpdate,contact }) {

    const addContact = async(contact)=>{
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            toast.success("Contact Added Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }
    const updateContact = async(contact,id)=>{
        try {
            const contactRef = doc(db, "contacts",id);
            await updateDoc(contactRef, contact);
            toast.success("Contact Updates Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    validationSchema={contactSchemaValidation}
                    initialValues={
                        isUpdate 
                        ? {
                        name:contact.name,
                        email:contact.email,
                    }
                    :{
                        name:"",
                        email:"",
                    }}
                    onSubmit={(values)=>{
                        isUpdate?updateContact(values,contact.id):
                        addContact(values)
                        }}
                >
                    <Form className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <Field name="name" 
                                className="rounded-lg border h-10" />
                            <div className='text-xs text-red-500'>
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <Field type="email"
                                     name="email"
                                     className="rounded-lg border h-10" />
                            <div className='text-xs text-red-500'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <button className='self-end bg-dark-yellow rounded-lg font-bold px-3 py-1.5  '>
                            {isUpdate ? "Update" : "Add"}
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdateContact
