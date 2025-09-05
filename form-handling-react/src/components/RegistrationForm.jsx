import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //   const [erorrs, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleChange) {
      console.log("Form Submitted", formData);
    } else {
      console.log("Form Error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    // // Clear error for the field being edited
    // setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //   const validation = () => {
  //     let newErrors = {};

  //     if (!formData.username.trim()) {
  //       newErrors.username = "Username is required";
  //     }
  //     if (!formData.email.trim()) {
  //       newErrors.email = "Email is required";
  //     }
  //     if (!formData.password.trim()) {
  //       newErrors.password = "Password is required";
  //     } else if (formData.password.length < 8) {
  //       newErrors.password = "Password must be at least 8 characters long.";
  //     }

  //     setErrors(newErrors);
  //     return Object.keys(newErrors).length === 0;
  //   };

  //   const clear = () => {
  //     setFormData({ username: "", email: "", password: "" });
  //     setErrors({});
  //   };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between items-center mt-20 gap-10"
    >
      <input
        type="text"
        name="username"
        placeholder="Enter username.."
        value={formData.username}
        onChange={handleChange}
        className="border-2 p-2 w-2xl rounded"
      />
      {/* {errors.username && (
        <p className="text-red-500 text-sm">{errors.username}</p>
      )} */}
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter email.."
        value={formData.email}
        onChange={handleChange}
        className="border-2 p-2 w-2xl rounded"
      />
      {/* {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} */}
      <input
        type="password"
        name="password"
        placeholder="Enter password.."
        value={formData.password}
        onChange={handleChange}
        className="border-2 p-2 w-2xl rounded"
      />
      {/* {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )} */}
      <div className="flex flex-row gap-2">
        <button type="submit" className="bg-gray-400 p-2 rounded">
          Submit
        </button>
        {/* <button onClick={clear} className="bg-gray-400 p-2 rounded">
          {" "}
          Clear
        </button> */}
      </div>
    </form>
  );
}

export default RegistrationForm;
