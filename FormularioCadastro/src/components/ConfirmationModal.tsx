import React from 'react';

interface DisciplinaData {
  nome: string;
  cargaHoraria: string | number;
  professor: string;
  descricao?: string;
}

interface ConfirmationModalProps {
  isOpen: boolean;           
  onClose: () => void;       
  dados: DisciplinaData;     
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, dados }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, 
      }}
    >
      <div 
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          width: '90%',
          maxWidth: '500px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ marginTop: 0, color: '#28a745' }}>Disciplina Cadastrada!</h2>
        <p style={{ color: '#666' }}>Confira os dados enviados abaixo:</p>

        <div 
          style={{
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '4px',
            marginBottom: '1.5rem',
            lineHeight: '1.6',
          }}
        >
          <p><strong>Nome:</strong> {dados.nome}</p>
          <p><strong>Carga Horária:</strong> {dados.cargaHoraria} horas</p>
          <p><strong>Professor:</strong> {dados.professor}</p>
          {dados.descricao && <p><strong>Descrição:</strong> {dados.descricao}</p>}
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Fechar e Limpar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;