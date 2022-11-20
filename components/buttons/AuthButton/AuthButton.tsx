import { useContext } from 'react';
import AuthContext from '../../../state/auth/authContext';
import styles from './AuthButton.module.scss';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logOut } = useContext(AuthContext);

  return (
    <button
      onClick={authenticated ? logOut : login}
      className={`${styles.container} ${styles.primary_button} ${className} `}
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;
