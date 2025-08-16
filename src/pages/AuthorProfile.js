import { Link } from 'react-router-dom';
import styles from '../css/home.module.css';
import imgs from '../assets/images.jpg'

const AuthorProfile = () => {
  return (
    <div className={styles.aurthorPage}>
      <h1>Author Profile Page</h1>
      <img src={imgs} alt="profile pic" />
      <p>This is a dummy profile page for the author.</p>
      <Link to="/" className={styles.authorLink}>
        Back to Home
      </Link>
    </div>
  );
};

export default AuthorProfile;