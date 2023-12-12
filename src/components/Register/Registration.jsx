
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerSuccess } from '../../state/action-creator/index';
function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRegister = () => {
     dispatch(registerSuccess({ username }));
    navigate('/');
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <br></br>
      <Link to="/">
      <button >login</button>
      </Link>
    </div>
  );
}

export default Registration;
