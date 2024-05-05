import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeaders from './components/ContactHeader/ContactHeaders'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <Navigation/>
      <main className='main_container'>
          <ContactHeaders/>
          <ContactForm/>
      </main>
    </>
  )
}

export default App
