
import { useDispatch, useSelector } from 'react-redux';
import { logout,toggleTheme } from '../../state/action-creator/index'; 


function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const theme = useSelector((state) => state.theme);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}

      {user ? (
        <div>
          <p>Change theme here</p>
          <button onClick={handleChangeTheme}>Toggle Theme</button>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
