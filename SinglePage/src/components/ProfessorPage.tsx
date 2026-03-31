import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Divider,
  Paper
} from "@mui/material";

interface ProfProps {
  nome: string;
  disciplinas: { nome: string; curso: string; semestre: string }[];
}

export default function ProfessorPage({ nome, disciplinas }: ProfProps) {
  const [nomeAluno, setNomeAluno] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setOpenModal(true); 
  };

  const handleClose = () => {
    setOpenModal(false);
    setNomeAluno("");
    setAssunto("");
    setMensagem("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        {nome}
      </Typography>

      <Paper elevation={2} sx={{ p: 2, mb: 4, bgcolor: '#f9f9f9' }}>
        <Typography variant="h6">Disciplinas Ministradas:</Typography>
        <Divider sx={{ my: 1 }} />
        <ul>
          {disciplinas.map((d, i) => (
            <li key={i}>
              <Typography variant="body1">
                <strong>{d.nome}</strong> — {d.curso} ({d.semestre}º Semestre)
              </Typography>
            </li>
          ))}
        </ul>
      </Paper>

      <Typography variant="h6" gutterBottom>Entrar em Contato</Typography>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px' }}
      >
        <TextField 
          label="Nome do Aluno" 
          variant="outlined" 
          fullWidth 
          required 
          value={nomeAluno}
          onChange={(e) => setNomeAluno(e.target.value)}
        />
        <TextField 
          label="Assunto" 
          variant="outlined" 
          fullWidth 
          required 
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />
        <TextField 
          label="Mensagem" 
          variant="outlined" 
          multiline 
          rows={4} 
          fullWidth 
          required 
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar Contato
        </Button>
      </Box>

      <Dialog open={openModal} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
          Informações de Contato Enviadas
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Typography variant="body1"><strong>De:</strong> {nomeAluno}</Typography>
          <Typography variant="body1"><strong>Para Prof.:</strong> {nome}</Typography>
          <Typography variant="body1"><strong>Assunto:</strong> {assunto}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1"><strong>Mensagem:</strong></Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>"{mensagem}"</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}