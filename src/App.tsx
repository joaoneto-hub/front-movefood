import { Router } from "@/routes/routes";
import { AuthProvider } from "@/Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
