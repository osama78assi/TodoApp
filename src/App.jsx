import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Price from "./pages/Price";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ToDo from "./pages/ToDo";
import FormAddGroup from "./components/toDo/FormAddGroup";
import FormAlterGroup from "./components/toDo/FormAlterGroup";
import FormAddTask from "./components/toDo/FormAddTask";
import FormAlterTask from "./components/toDo/FormAlterTask";

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="todoApp/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="price" element={<Price />} />
          <Route path="about" element={<About />} />
          <Route path="app" element={<ToDo />}>
            <Route path="newGroup" element={<FormAddGroup />} />
            <Route path="editGroup" element={<FormAlterGroup />} />
            <Route path="newTask" element={<FormAddTask />} />
            <Route path="editTask" element={<FormAlterTask />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
