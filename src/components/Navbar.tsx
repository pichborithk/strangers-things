import { Link } from 'react-router-dom';
import { NavbarProps } from '../types/types';

const Navbar = ({ token, setToken, setUserData }: NavbarProps) => {
  function handleSignOut(): void {
    setToken(null);
    localStorage.clear();
    setUserData(null);
  }

  return (
    <nav className='navbar'>
      <p>Stranger's Things</p>
      <div className='nav-link'>
        <Link to='/'>HOME</Link>
        {token ? (
          <>
            <Link to='/profile'>PROFILE</Link>
            <Link to='/' onClick={handleSignOut}>
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to='/register'>SIGN UP</Link>
            <Link to='/signin'>SIGN In</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
