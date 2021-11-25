import "./App.css";
import { useState, useEffect } from "react";
import { Signup } from "./Components/signup";
import ListMovies from "./Components/movies";
import {
  fetchRequestAddUser,
  getUser,
  fetchRequestListUsers,
  fetchRequestUpdateEmail,
  fetchRequestDeleteUser,
  Login,
  fetchRequestListMovies,
} from "./Utils";

function App() {
  //USER states
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loginToggle, setLoginToggle] = useState(false);
  //MOVIE states
  const [movieArr, setMovieArr] = useState([]); //map is an array method - needs to map through array. cannot be empty on load.

  useEffect(() => {
    getUser(setUser); // on load this renders while getUser does thing.
  }, []);

  //USER HANDLERS
  const submitHandler = (e) => {
    e.preventDefault(); //stops entire page rerendering when clicked.
    // const userObj = { user: user, email: email, password: pass };
    // setUser(userObj); //entire user stored in state.
    if (username) {
      fetchRequestAddUser(username, email, pass, setUser);
    } else {
      Login(email, pass, setUser);
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

  //MOVIE HANDLERS
  const getMoviesHandler = () => {
    fetchRequestListMovies(setMovieArr);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome {user.username}</h1>
          <button onClick={logOutHandler}>Log out</button>
          <button onClick={getMoviesHandler}> Get Movies </button>
          <ListMovies movieArr={movieArr} />
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
