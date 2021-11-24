import "./App.css";
import { useState, useEffect } from "react";
import { Signup } from "./Components/signup";
import {
  fetchRequestAddUser,
  getUser,
  fetchRequestListUsers,
  fetchRequestUpdateEmail,
  fetchRequestDeleteUser,
} from "./Utils";

function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loginToggle, setLoginToggle] = useState(false);

  useEffect(() => {
    getUser(setUser); // on load this renders while getUser does thing.
  }, []);

  const submitHandler = (e) => {
    e.preventDefault(); //stops entire page rerendering when clicked.
    // const userObj = { user: user, email: email, password: pass };
    // setUser(userObj); //entire user stored in state.
    if (username) {
      fetchRequestAddUser(username, email, pass, setUser);
    } else {
      getUser(email, pass, setUser);
    }
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

  const deleteUserHandler = (e) => {
    e.preventDefault();
    fetchRequestDeleteUser(username);
  };

  const logOutHandler = () => {
    setUser();
    localStorage.removeItem("MyToken");
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome {user}</h1>
          <button onClick={logOutHandler}>Log out</button>
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
      {!user && (
        <Signup
          setUsername={setUsername}
          setEmail={setEmail}
          setPass={setPass}
          submitHandler={submitHandler}
          listUserHandler={listUserHandler}
          updateEmailHandler={updateEmailHandler}
          deleteUserHandler={deleteUserHandler}
          loginToggle={loginToggle}
          setLoginToggle={setLoginToggle}
        />
      )}
    </div>
  );
}

export default App;
