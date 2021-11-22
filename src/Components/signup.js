export const Signup = ({ setUsername, setEmail, setPass, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e) => setPass(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
};
//e i event, put in anomiynous funciton so doesn't call. onyl arg reciveed
// is event.
