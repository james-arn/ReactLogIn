import "./App.css";
import { useState, useEffect } from "react";
import { Signup } from "./Components/signup";
import { getUser } from "./Utils";

function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  useEffect(() => {
    getUser(setUser);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault(); //stops entire page rerendering when clicked.
    const userObj = { user: username, email: email, password: pass };
    setUser(userObj); //entire user stored in state.
    const jsonObj = JSON.stringify(userObj);
    localStorage.setItem("user", jsonObj);
  };

  return (
    <div className="App">
      {user ? <h1> Welcome {user.username} </h1> : <h1>Please log in</h1>}
      {!user && (
        <Signup
          setUsername={setUsername}
          setEmail={setEmail}
          setPass={setPass}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
}

export default App;
