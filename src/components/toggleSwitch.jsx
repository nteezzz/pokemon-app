import './toggleSwitch.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme} from '../features/themeSlice.jsx';

export const ToggleSwitch = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => state.auth.loggedIn);

    const handleToggle= () => {
      if(loggedIn){
        dispatch(toggleTheme());
      }else{
        window.alert("Please login to change theme");
      }  
  };
  return (
    <div className="toggle-container">
      <input type="checkbox" className="toggle-button" onClick={handleToggle}/>
   </div>
    
  );
};