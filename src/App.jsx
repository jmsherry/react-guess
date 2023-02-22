import { useState } from "react";
import "./App.css";
// import MyComponent from './components/MyComponent'
// import Surround from "./components/Surround";
// import Slots from "./components/Slots";
// import Intervene from "./components/Intervene";
// import List from "./components/List";
// import EventButtons from "./components/EventButtons";
// import Counter from "./components/counter/Counter";
// import TodoApp from "./components/todos/TodoApp";
// import Controlled from "./components/forms/Controlled";
// import FirstHookForm from "./components/forms/FirstHookForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import MessageDisplay from "./pages/MessageDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="param/:message" element={<MessageDisplay />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
