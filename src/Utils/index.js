// below is request obj we would send to rest api. exactly the same as thunderlient.
//this is the bridge between react app and back end rest api.

//USERS
//stay logged in on page load useeffect
export const getUser = async (setUser) => {
  try {
    const token = localStorage.getItem("MyToken"); //gets token
    const response = await fetch(`${process.env.REACT_APP_REST_API}token`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    const savedUser = data.user; // now JS object
    console.log(savedUser);
    if (savedUser) {
      setUser(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};

//new log in from login button
export const Login = async (email, pass, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });
    const data = await response.json();
    setUser(data.user);
    localStorage.setItem("MyToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

//add user to database
export const fetchRequestAddUser = async (
  username,
  email,
  password,
  setUser
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data.user); //saves data to user
    localStorage.setItem("MyToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

// READ lists all users in database
export const fetchRequestListUsers = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.userList);
  } catch (error) {
    console.log(error);
    console.log(`${process.env.REACT_APP_REST_API}user`);
  }
};

//Update
export const fetchRequestUpdateEmail = async (username, email) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const fetchRequestDeleteUser = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}user/${username}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        params: JSON.stringify({
          username: username,
        }),
      }
    );
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};

//MOVIES
export const fetchRequestListMovies = async (setMovies) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}movie`, {
      method: "GET",
    });
    const data = await response.json();
    setMovies(data.movieList);
    console.log(data.movieList);
  } catch (error) {
    console.log(error);
    console.log(`${process.env.REACT_APP_REST_API}user`);
  }
};
