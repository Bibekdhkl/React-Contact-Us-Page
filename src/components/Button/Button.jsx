import styles from "./Button.module.css";

const Button = ( {isOutline,icon,text,...rest}) => {

  // destrcutured with this
  // const {isOutline,icon,text} = props;
//   console.log(props);
  // const Button = (props) => {
  //       console.log(props)
  // It gives two parameters
  return (
    // the rest operator takes all the remaining properties that is received at the button
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
