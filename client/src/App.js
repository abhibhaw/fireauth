import { useRoutes } from "react-router-dom";
import "./app.css";
import "./configs/Firebase";
import routes from "./routes";

export default function App() {
  const routing = useRoutes(routes);
  return routing;
}
