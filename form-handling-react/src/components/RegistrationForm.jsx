import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");
    console.log("Form Submitted:", { username, email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between items-center mt-20 gap-10"
    >
      <input
        type="text"
        name="username"
        placeholder="Enter username.."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 p-2 w-2xl rounded"
      />

      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter email.."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 p-2 w-2xl rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password.."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 p-2 w-2xl rounded"
      />

      <div className="flex flex-row gap-2">
        <button type="submit" className="bg-gray-400 p-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
