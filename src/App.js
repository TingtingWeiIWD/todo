import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import FormPage from "./pages/FormPage";
import HelpPage from "./pages/HelpPage";
import HelpAddPage from "./pages/HelpPage/HelpAddPage";
import HelpRemovePage from "./pages/HelpPage/HelpRemovePage";
import HelpStatusPage from "./pages/HelpPage/HelpStatusPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="/help" element={<HelpPage />}>
          <Route path="add" element={<HelpAddPage />} />
          <Route path="remove" element={<HelpRemovePage />} />
          <Route path="status" element={<HelpStatusPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
