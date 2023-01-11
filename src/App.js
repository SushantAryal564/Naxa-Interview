import Services from "./component/Servies/Services";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Services />} />
    </Routes>
  );
}

export default App;
