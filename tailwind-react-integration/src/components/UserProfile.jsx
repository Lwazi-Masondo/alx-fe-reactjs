function UserProfile() {
  return (
    <div className="user-profile  bg-gray-100 md:p-8 md:max-w-sm sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg  sm:p-4 ">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91pnfC2-2n7skAx2c1IC8ljphj8OxC-I27AZJRNYcf9r8pQGDOhZAG_6IY_ShTPhyVbo&usqp=CAU"
        alt="User"
        className="rounded-full md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24"
      />
      <h1 className="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 md:text-base sm:text-sm ">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
