import { useRef,useEffect,useState  } from "react";
import './scss/main.css'
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%#]).{8,24}$/;

const Register = () =>{

  const [success,setSuccess] = useState(false)
  const [user,setUser] = useState('');
  const [validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);

  const [password,setPassword] = useState('');
  const [ValidPassword,setValidPassword] = useState(false);
  const [PwdFocus,setPwdFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    const v2 = USER_REGEX.test(user);
    
  };

  useEffect(()=>{
    let result = USER_REGEX.test(user);
    setValidName(result)
  },[user]);

  useEffect(()=>{
    let result = PWD_REGEX.test(password);
    setValidPassword(result)
  },[password]);

  

  return(
          <>
            <div className="form">
      
              <ul className="tab-group">
                <li className="tab active"><a href="#signup">Sign Up</a></li>
                <li className="tab"><a href="#login">Log In</a></li>
              </ul>
    
              <div className="tab-content">
                <div id="signup">   
                  <h1>Sign Up for Free</h1>
                  
                  <form onSubmit={handleSubmit}>
                  
                  <div className="top-row">
                    <div className="field-wrap">
                      <label>
                          User Name<span className="req">*</span>
                      </label>
                      <input 
                      type="text" 
                      value={user}
                      required 
                      onChange={(e)=>setUser(e.target.value)} />
                    </div>
                    {validName && <p>Correct Name</p>}
                  </div>

                  <div className="field-wrap">
                    <label>
                      Password<span className="req">*</span>
                    </label>
                    <input 
                    type="password"
                    required 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    {ValidPassword && <p>Valid Password</p>}
                  </div>
                  <button type="submit" className="button button-block">Get Started</button>
                  </form>

                </div>
      
                <div id="login"></div>
                
              </div>
    
             </div>
          </>
  )
}


export default Register;