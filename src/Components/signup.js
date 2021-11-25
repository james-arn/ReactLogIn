export const Signup = ({
  setUsername,
  setEmail,
  setPass,
  submitHandler,
  listUserHandler,
  updateEmailHandler,
  deleteUserHandler,
  loginToggle,
  setLoginToggle,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          {!loginToggle && (
            <input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit"> {!loginToggle ? "Sign up" : "Log in"} </button>
        </form>
        <button
          onClick={(e) => {
            setLoginToggle(!loginToggle);
            setUsername();
          }}
        >
          {!loginToggle ? "Already have an account?" : "Need to register?"}
        </button>
      </div>
      <h3>Read Users</h3>
      <button onClick={listUserHandler}> List users (check console) </button>
      <div>
        <form onSubmit={updateEmailHandler}>
          <h3>
            Update: Enter your username & the email that you want to change to{" "}
          </h3>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="updated email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit"> Update email </button>
        </form>
        <form onSubmit={deleteUserHandler}>
          <h3> Delete User </h3>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit"> Delete user </button>
        </form>
      </div>
    </div>
  );
};
//e i event, put in anomiynous funciton so doesn't call. onyl arg reciveed
// is event.
