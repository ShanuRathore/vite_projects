import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {
        isOpen && (
          <div
            onClick={onClose}
            className='grid place-items-center backdrop-blur h-screen z-40 absolute top-0 w-screen'>
            <div className='m-auto min-h-[200px] z-50 relative max-w-[80%] bg-white p-4'>
              <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} className='self-end text-2xl cursor-pointer' />
              </div>
              {children}
            </div>
          </div>
        )
      }
    </>
    , document.getElementById('modal-root'));
}

export default Modal;
