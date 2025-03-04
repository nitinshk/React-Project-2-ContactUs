import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
  <nav className={`${styles.navigation} container`}>
    <div className="logo">
        <img className={`${styles.cwclogo}`} src="/images/CwC_without_bg.png" alt="logo_cwc"/>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>
  );
}

export default Navigation;