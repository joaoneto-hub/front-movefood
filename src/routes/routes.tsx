import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "@/pages/Login";
import Home from "@/pages/Home";
import Itens from "@/pages/Itens";
import { Layout } from "../layout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route
            path="/Dashboard"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route
            path="/Itens"
            element={
              <Layout>
                <Itens />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
