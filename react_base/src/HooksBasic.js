import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./hooks-basic/useEffect/Home";
import Posts from "./hooks-basic/useEffect/Posts";
import User from "./hooks-basic/useEffect/User";
import User1 from "./hooks-basic/useEffect/User1";
import User2 from "./hooks-basic/useEffect/User2";

function HooksBasic() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/users/:id" element={<User/>}/>
      <Route path="/users1/:id" element={<User1/>}/>
      <Route path="/users2/:id" element={<User2/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default HooksBasic;
