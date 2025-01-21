import styles from "./COntactHeader.module.css"

const ContactHeader = () => {
  
  return (
    <div className={`${styles.contact_content} container`}>
      <h1>Contact Us</h1>
      <p>Contact Us for Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores provident accusantium, praesentium maxime nihil consequuntur ducimus dolorum dolor voluptatem natus illum alias a ipsam nemo?</p>
    </div>
  )
}

export default ContactHeader