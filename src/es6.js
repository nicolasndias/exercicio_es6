const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 6 },
  { nome: "Diego", nota: 9 },
  { nome: "Eduarda", nota: 4 }
];

function filtrarAprovados(listaAlunos) {
  return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);

console.log("Alunos aprovados:");
console.log(aprovados);
