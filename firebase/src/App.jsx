import './App.css'
import { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Navbar from './components/Navbar'
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';


function App() {

  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });
          setContacts(contactList);
          return contactList;
        })
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    // const contactsSnapshot = await getDocs(contactsRef);
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      )

      setContacts(filteredContacts);
      return filteredContacts;
    });
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className='flex gap-2'>
          <div className='flex relative flex-grow items-center'>
            <FaSearch className='absolute text-white text-2xl ml-1' />
            <input 
                onChange={filterContacts}
                type='text' className=" flex-grow border border-white 
                          bg-transparent rounded-md h-10 text-white pl-9"/>
          </div>
          <div>
            <CiCirclePlus onClick={onOpen} className='text-5xl cursor-pointer text-white' />
          </div>
        </div>
        <div className='mt-4 gap-4 flex flex-col'>
          {contacts.length<= 0 ?(<NotFoundContact/>): (contacts.map((contact) =>
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer
        position="bottom-left"
        autoClose={3000} />
    </>
  )
}

export default App
