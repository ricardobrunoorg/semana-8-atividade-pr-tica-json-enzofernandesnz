const disciplinas = [
  { titulo: "Matemática",   notas: [7.5, 8.0, 6.5, 9.0] },
  { titulo: "Português",    notas: [6.0, 7.0, 8.5, 7.5] },
  { titulo: "História",     notas: [5.5, 6.5, 7.0, 6.0] },
  { titulo: "Ciências",     notas: [9.0, 8.5, 9.5, 10.0] },
  { titulo: "Geografia",    notas: [4.5, 5.0, 6.0, 5.5] },
];

// 1. Listagem de títulos
console.log("=== Listagem de Títulos ===");
disciplinas.forEach(d => console.log(d.titulo));

// 2. Cálculo das médias
console.log("\n=== Cálculo de Médias ===");
const medias = disciplinas.map(d => {
  const media = d.notas.reduce((acc, n) => acc + n, 0) / d.notas.length;
  console.log(`${d.titulo}: ${media.toFixed(2)}`);
  return { titulo: d.titulo, media };
});

// 3. Resumo das checagens (some e every)
console.log("\n=== Resumo de Verificações ===");
const algumReprovado = disciplinas.some(d => {
  const media = d.notas.reduce((acc, n) => acc + n, 0) / d.notas.length;
  return media < 6;
});
const todosAprovados = disciplinas.every(d => {
  const media = d.notas.reduce((acc, n) => acc + n, 0) / d.notas.length;
  return media >= 6;
});
console.log("Alguma disciplina com média < 6 (some):", algumReprovado);
console.log("Todas as disciplinas com média >= 6 (every):", todosAprovados);

// 4. Resumo na div#output
const output = document.getElementById("output");
output.innerHTML = `
  <h2>Resumo das Disciplinas</h2>
  <ul>
    ${medias.map(d => `<li>${d.titulo}: média ${d.media.toFixed(2)} — ${d.media >= 6 ? "✅ Aprovado" : "❌ Reprovado"}</li>`).join("")}
  </ul>
  <p><strong>Alguma disciplina reprovada (some):</strong> ${algumReprovado}</p>
  <p><strong>Todas aprovadas (every):</strong> ${todosAprovados}</p>
`;
