import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");
    console.log("Form Submitted:", { username, email, password });
    validate();
  };

  const validate = () => {
    let newErrors = {};

    if (!username) {
      console.log("Enter username!");
      newErrors.username = "Username required!";
    }
    if (!email) {
      console.log("Enter email!");
      newErrors.email = "Email required!";
    }
    if (!password) {
      console.log("Enter password!");
      newErrors.password = "Password required!";
    } else if (password.length < 8) {
      newErrors.password = "Password must be 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between items-center mt-20 gap-10 border-2 border-blue-400 rounded mx-80 py-10"
    >
      <h1 className="text-blue-500 text-xl">Controlled Components Setup</h1>
      <input
        type="text"
        name="username"
        placeholder="Enter username.."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 p-2 w-2xl rounded"
      />
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username}</p>
      )}
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter email.."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 p-2 w-2xl rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      <input
        type="password"
        name="password"
        placeholder="Enter password.."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 p-2 w-2xl rounded"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}
      <div className="flex flex-row gap-2">
        <button type="submit" className="bg-gray-400 p-2 rounded">
          Submit
        </button>
        <button
          type="button"
          onClick={clear}
          className="bg-gray-400 p-2 rounded"
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
