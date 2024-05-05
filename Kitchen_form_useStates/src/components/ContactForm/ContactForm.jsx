import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';



function ContactForm() {

    const[name,setName]=useState('Shanu');
    const[email,setEmail]=useState('xyz@yt.com');
    const[text,setText]=useState('Hello');

    const onViaCallSubmit=()=>{
        alert("Call connected")
    }

    const onSubmit=(e)=>{
        e.preventDefault();
       setName(e.target.name.value);
       setEmail(e.target.email.value);
       setText(e.target.text.value);
    }
    

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text="Kitchen Support"
                        icon={<MdMessage fontSize="20px" />}
                    />
                    <Button
                        onClick={onViaCallSubmit}
                        text="Call Us"
                        icon={<IoCallSharp fontSize="20px" />}
                    />
                </div>
                <Button
                    isOutline={true}
                    text="Via Email Form"
                    icon={<MdEmail fontSize="24px" />}
                />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email:</label>
                        <input mail="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text:</label>
                        <textarea name='text' rows="10"/>
                    </div>
                    <div style={{display: "flex",justifyContent: "end",padding:"5px"}}>
                        <Button
                            text="Subit Button"
                        />
                    </div>
                    <div>
                        {name +" " +email+" "+text}
                    </div>
                </form>

            </div>
            <div className={styles.foodImage}>
                <img src="/images/main.jpg" alt="food image" />
            </div>
        </section>
    )
}

export default ContactForm
