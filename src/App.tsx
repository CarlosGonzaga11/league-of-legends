import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Main from "./components/pages/main/main";
import AboutChampion from "./components/pages/aboutChampion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChampionsProvider } from "./hooks/championContext";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChampionsProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/champion/:id" element={<AboutChampion />} />
          </Routes>
        </ChampionsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
