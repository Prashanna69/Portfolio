import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Main from "./Pages/Main";
import { personalInfoLoader } from "./Pages/AboutMe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} loader={personalInfoLoader} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
