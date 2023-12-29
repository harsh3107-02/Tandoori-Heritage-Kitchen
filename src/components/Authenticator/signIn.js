import { useState } from "react";

export default Login = () => {
  const [islogedIn, setisLogenIn] = useState(true);
  return <>{islogedIn ? <button>Login</button> : <button>Logout</button>}</>;
};
