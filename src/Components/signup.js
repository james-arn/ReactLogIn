export const Signup = ({
  setUsername,
  setEmail,
  setPass,
  submitHandler,
  listUserHandler,
  updateEmailHandler,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <button onClick={listUserHandler}> List users </button>
      <div>
        <form onSubmit={updateEmailHandler}>
          <h3>Enter your username & the email that you want to change to </h3>
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
      </div>
    </div>
  );
};
//e i event, put in anomiynous funciton so doesn't call. onyl arg reciveed
// is event.
