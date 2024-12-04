import { Routes,Route } from "react-router-dom";
const App=()=>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>IEWOWD</h1>}></Route>
        <Route path="/counter" element={<h1>Counter App</h1>}></Route>
        <Route path="/stopwatch" element={<h1>StopWatch app</h1>}></Route>
        <Route path="*" element={<h1>INVALID PAGE</h1>}></Route>
      </Routes>
    </div>
  );
}
export default App;