import "./App.css";
import { useState, useEffect } from "react";
import { Signup } from "./Components/signup";
import {
  fetchRequestAddUser,
  getUser,
  fetchRequestListUsers,
  fetchRequestUpdateEmail,
} from "./Utils";

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
    // const userObj = { user: user, email: email, password: pass };
    // setUser(userObj); //entire user stored in state.
    fetchRequestAddUser(username, email, pass, setUser);
    //// FOR LOCAL STORAGE:
    // const jsonObj = JSON.stringify(userObj);
    // localStorage.setItem("user", jsonObj);
  };

  const listUserHandler = () => {
    fetchRequestListUsers();
  };

  const updateEmailHandler = (e) => {
    e.preventDefault();
    fetchRequestUpdateEmail(username, email, setUser);
  };

  return (
    <div className="App">
      {user ? <h1> Welcome {user} </h1> : <h1>Please log in</h1>}
      {!user && (
        <Signup
          setUsername={setUsername}
          setEmail={setEmail}
          setPass={setPass}
          submitHandler={submitHandler}
          listUserHandler={listUserHandler}
          updateEmailHandler={updateEmailHandler}
        />
      )}
    </div>
  );
}

export default App;
