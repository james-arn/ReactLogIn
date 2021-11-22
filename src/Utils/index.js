//no need to desructure - as  this ins't jsx it's  ajs function.
export const getUser = (setUser) => {
  try {
    const jsonUser = localStorage.getItem("user"); //gets
    const savedUser = JSON.parse(jsonUser); // now JS object
    if (savedUser) {
      setUser(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};

// below is request obj we would send to rest api. exactly the same as thunderlient.
//this is the bridge between react app and back end rest api.
export const fetchRequestAddUser = async (
  username,
  email,
  password,
  setUser
) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
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
    // localStorage.setItem("MyToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const fetchRequestListUsers = async (username) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.userList);
  } catch (error) {
    console.log(error);
  }
};

export const fetchRequestUpdateEmail = async (username, email) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
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
