import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {

 const onSubmitButton = (event) => {
      event.preventDefault();
      console.log(event)
 }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCallSharp fontSize="24px" />} />
        </div>
        <Button
          isOutline="True"
          text="VIA Email Form"
          icon={<IoIosMail fontSize="24px" />}
        />
        <form onSubmit={onSubmitButton}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className={styles.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5"></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
            <img src="./images/Contact-Us-Vector-Illustration-Part-02-1.jpg"></img>
      </div>
    </section>
  );
};

export default ContactForm;
