import { useRef,useEffect,useState  } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%#]).{8,24}$/;

const Register = () =>{

  const [formData,setFormData] = useState({
    userName:'',
    password:'',
    matchPwd:''
  });

  const [validData,setValidData] = useState(
    {
      validName:false,
      ValidPassword:false,
      validMatch:false
    }
  )
  const [success,setSuccess] = useState(false)
  const [user,setUser] = useState('');
  const [validName,setValidName] = useState(false);
  const [userFocus,setUserFocus] = useState(false);

  const [password,setPassword] = useState('');
  const [ValidPassword,setValidPassword] = useState(false);
  const [PwdFocus,setPwdFocus] = useState(false);

  const [matchPwd,setMatchPwd] = useState('');
  const [validMatch,setValidMatch] = useState(false);
  const [matchFocus,setMatchFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = PWD_REGEX.test(password);
    const v2 = USER_REGEX.test(user);
    if(!v1||!v2){
      console.log('entry inCorrect')
    }else{
      setSuccess(true)
    }
  };

  useEffect(()=>{
    let result = USER_REGEX.test(user);
    setValidName(result)
  },[user]);

  useEffect(()=>{
    let result = PWD_REGEX.test(password);
    setValidPassword(result)
  },[password]);

  useEffect(()=>{
    let result = PWD_REGEX.test(password);
    setValidPassword(result);
    if(password!==''){
      let matched = password === matchPwd;
      console.log(matched);
    }
  },[password,matchPwd]);

  return(

    <>
      {
        success?(
          <section>
            <h1>YOU SUCCESFULLY LOGGED IN</h1>
          </section>
        ):(
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
                        First Name<span className="req">*</span>
                      </label>
                      <input type="text" required onChange={(e)=>setUser(e.target.value)} />
                    </div>
                    {validName && <p>Correct Name</p>}
                  </div>

                  <div className="field-wrap">
                    <label>
                      Set A Password<span className="req">*</span>
                    </label>
                    <input 
                    type="password"
                    required 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    {ValidPassword && <p>Valid Password</p>}
                  </div>
                  
                  <div className="field-wrap">
                    <label>
                    Confirm Password<span className="req">*</span>
                    </label>
                    <input 
                    type="password" 
                    required 
                    onChange={(e)=>setMatchPwd(e.target.value)}
                    />
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
    </>

  )
}


export default Register;