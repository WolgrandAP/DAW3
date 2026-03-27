import { useState } from 'react'
import FormControl from './components/FormControl'
import TextAreaControl from './components/TextAreaControl'
import ConfirmationModal from './components/ConfirmationModal'

interface DisciplinaData {
  nome: string;
  cargaHoraria: string | number;
  professor: string;
  curso: string;
  periodo: string;
  quantidadeAlunos: string | number;
  descricao: string;
}

function App() {

  const initialFormState: DisciplinaData = {
    nome: '',
    cargaHoraria: '',
    professor: '',
    curso: '',
    periodo: '',
    quantidadeAlunos: '',
    descricao: ''
  };

  const [formData, setFormData] = useState<DisciplinaData>(initialFormState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(initialFormState);
  };

  return (
    <div className="container">
      <h1>Cadastro de Disciplinas</h1>
      
      <form onSubmit={handleSubmit}>
        <FormControl
          label='Nome da Disciplina'
          name='nome'
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <FormControl
            label='Curso'
            name='curso'
            value={formData.curso}
            onChange={handleChange}
            required
          />
          <FormControl
            label='Período'
            name='periodo'
            value={formData.periodo}
            onChange={handleChange}
            required
          />
        </div>

        <FormControl
          label='Professor'
          name='professor'
          value={formData.professor}
          onChange={handleChange}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <FormControl
            label='Carga Horária'
            name='cargaHoraria'
            type='number'
            value={formData.cargaHoraria}
            onChange={handleChange}
            required
          />
          <FormControl
            label='Alunos'
            name='quantidadeAlunos'
            type='number'
            value={formData.quantidadeAlunos}
            onChange={handleChange}
            required
          />
        </div>

        <TextAreaControl
          label='Descrição da Disciplina'
          name='descricao'
          value={formData.descricao}
          onChange={handleChange}

        />

        <button type="submit">Cadastrar Disciplina</button>
      </form>

      <ConfirmationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        dados={formData} 
      />
    </div>
  )
}

export default App
