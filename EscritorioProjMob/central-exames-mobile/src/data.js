export const exams = [
  { id: 'hemograma', name: 'Hemograma completo', category: 'Laboratório', price: '35,00', detail: 'Exame de sangue · Resultado digital', icon: '≋' },
  { id: 'glicemia', name: 'Glicemia em jejum', category: 'Laboratório', price: '18,00', detail: 'Exame de sangue · Resultado digital', icon: '◌' },
  { id: 'ultrassom', name: 'Ultrassom abdominal', category: 'Imagem', price: '120,00', detail: 'Ultrassonografia · Agendamento', icon: '◉' },
  { id: 'mamografia', name: 'Mamografia digital', category: 'Imagem', price: '90,00', detail: 'Exame de imagem · Agendamento', icon: '✳' },
  { id: 'eletrocardiograma', name: 'Eletrocardiograma', category: 'Cardiologia', price: '65,00', detail: 'Avaliação cardíaca · Agendamento', icon: '⌁' },
];

export const clinics = [
  { id: 'centro', name: 'Clínica Bem-Estar', neighborhood: 'Centro', address: 'Av. Eduardo Ribeiro, 520', specialties: 'Laboratório · Imagem', hours: 'Seg a sex, 7h às 17h' },
  { id: 'adrianopolis', name: 'Centro Médico Adrianópolis', neighborhood: 'Adrianópolis', address: 'Rua Recife, 840', specialties: 'Imagem · Cardiologia', hours: 'Seg a sáb, 7h às 18h' },
  { id: 'cidade-nova', name: 'Unidade Cidade Nova', neighborhood: 'Cidade Nova', address: 'Av. Noel Nutels, 1.200', specialties: 'Laboratório', hours: 'Seg a sex, 6h30 às 16h' },
];

export const sampleProfile = {
  name: 'João Pedro da Silva',
  cpf: '000.000.000-00',
  birthDate: '01/01/1990',
  code: 'CE-EXEMPLO-001',
};
