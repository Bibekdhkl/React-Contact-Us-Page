// rafce
import styles from './Navigation.module.css'
const Navigation = () => {
  // console.log(styles);

//   Objectlogo: "_logo_18gs8_21"
//   navigation: "_navigation_18gs8_3" -> Class Nmae

// Objectlogo: "_logo_18gs8_21"
// navigation: "_navigation_18gs8_3"


  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
            <img src="/images/aster-logo.jpg" alt="aster-logo"></img>
      </div>
      <ul>  
            <li>Home</li>
            <li>About Me</li>
            <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation;