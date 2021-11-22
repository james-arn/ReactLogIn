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
