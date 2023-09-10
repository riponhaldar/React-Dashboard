import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/reduxSlicer/exampleSlice";
import { RouterProvider } from "react-router-dom";

import { router } from "./route";
function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // const handelIncrment = ()=>{

  //   dispatch(increment())
  // }

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
