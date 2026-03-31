// src/App.tsx
import React from "react";
import MenuAppBar from "./components/MenuAppBar";
import ProfessorPage from "./components/ProfessorPage";
import { Typography } from "@mui/material";

type Page = 'home' | 'prof1' | 'prof2' | 'prof3';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<Page>('home');

  const profData = {
    prof1: { nome: "Antônio", disciplinas: [{ nome: "POO", curso: "ADS", semestre: "2" }] },
    prof2: { nome: "Rodolfo", disciplinas: [{ nome: "IA", curso: "ADS", semestre: "5" }, { nome: "DAW3", curso: "ADS", semestre: "5" }] },
    prof3: { nome: "Renata", disciplinas: [{ nome: "PJ1", curso: "ADS", semestre: "5" }, { nome: "Redes", curso: "ADS", semestre: "2" }] },
  };

  return (
    <>
      <MenuAppBar onNavigate={setCurrentPage} title={currentPage} />
      
      <main style={{ padding: '20px' }}>
        {currentPage === 'home' && (
          <Typography variant="h3">Bem-vindo ao Sistema Acadêmico</Typography>
        )}
        
        {currentPage === 'prof1' && <ProfessorPage {...profData.prof1} />}
        {currentPage === 'prof2' && <ProfessorPage {...profData.prof2} />}
        {currentPage === 'prof3' && <ProfessorPage {...profData.prof3} />}
      </main>
    </>
  );
}