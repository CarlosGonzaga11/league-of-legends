import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Main from "./components/pages/main/main";
import AboutChampion from "./components/pages/aboutChampion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChampionsProvider } from "./hooks/championContext";
import Quizz from "./components/pages/quizz";
import { QuizzProvider } from "./hooks/useQuizzContext";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChampionsProvider>
          <QuizzProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/champion/:id" element={<AboutChampion />} />
              <Route path="/quizz" element={<Quizz />} />
            </Routes>
          </QuizzProvider>
        </ChampionsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
