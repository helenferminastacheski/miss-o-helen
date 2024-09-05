   
   const caixaPrincipal = document.querySelector(".caixa-principal");
   const caixaPerguntas = document.querySelector(".caixa-perguntas");
   const caixaAlternativas = document.querySelector(".caixa-alternativas");
   const caixaResultado = document.querySelector(".caixa-resultado");
   const textoResultado = document.querySelector(".texto-resultado");
   
   const perguntas = [
       {
           enunciado: "Como a comunicação entre membros da equipe impacta a colaboração?",
           alternativas: [
               {
                   texto: " A comunicação aberta e transparente entre membros da equipe melhora a colaboração.",
                   afirmacao: "Quando a comunicação é aberta e transparente, os membros da equipe compartilham informações e ideias mais livremente, o que fortalece o trabalho em equipe e a colaboração."
               },
               {
                   texto: " A comunicação restrita e seletiva entre membros da equipe aumenta a eficiência",
                   afirmacao: "A comunicação restrita pode criar uma sensação de especialização e foco, permitindo que os membros da equipe trabalhem de forma mais eficiente em tarefas específicas sem distrações externas."
               }
              
           ]
       },
       {
           enunciado: "Qual tipo de horário de trabalho contribui melhor para o equilíbrio entre vida pessoal e profissional?",
           alternativas: [
               {
                   texto: "Flexibilidade no horário de trabalho contribui para um melhor equilíbrio entre vida pessoal e profissional.",
                   afirmacao: "Horários flexíveis permitem que os funcionários ajustem suas jornadas de trabalho para atender às necessidades pessoais, promovendo um equilíbrio saudável entre trabalho e vida pessoal."
               },
               {
                   texto: "Horários rígidos e fixos são essenciais para manter a produtividade e a disciplina no trabalho.",
                   afirmacao: "Horários rígidos garantem que todos os membros da equipe estejam disponíveis ao mesmo tempo, o que pode ajudar a manter a produtividade e a organização no ambiente de trabalho."
               }
              
           ]
       },
       {
           enunciado: "Qual é o efeito da adoção de novas tecnologias no ambiente de trabalho?",
           alternativas: [
               {
                   texto: "A adoção de novas tecnologias facilita a execução das tarefas e a inovação no ambiente de trabalho.",
                   afirmacao:"Novas tecnologias podem agilizar processos e introduzir soluções inovadoras, tornando o trabalho mais eficiente e possibilitando novas formas de realizar tarefas."
               },
               {
                   texto: " Manter os métodos tradicionais e evitar mudanças tecnológicas preserva a estabilidade e a familiaridade.",
                   afirmacao:"Optar por métodos tradicionais pode manter a consistência e reduzir a curva de aprendizado associada a novas tecnologias, proporcionando um ambiente de trabalho mais estável e familiar."
               }
           ]
       }
   ];
   let atual = 0;
   let perguntaAtual;
   let historiaFinal = ""
   
   function mostraPergunta() {
      if (atual >= perguntas.length) {
          mostraResultado();
          return;
         }
      }
   
   perguntaAtual = perguntas [atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   textoResultado.textContent = "";
   mostraAlternativas();
   
   function mostraAlternativas () {
   
   for (const alternativa of perguntaAtual.alternativas) { 
       const botaoAlternativa = document.createElement("button");
       botaoAlternativa.textContent = alternativa.texto; 
       botaoAlternativa.addEventListener("click", () =>
respostaSelecionada (alternativa));
   caixaAlternativas.appendChild(botaoAlternativa);
     }
} 
function respostaSelecionada (opcaoSelecionada) {
   const afirmacao = opcaoSelecionada.afirmacao; historiaFinal + afirmacao +
   atual++
   mostraPergunta();
}
   
   function mostraResultado () {
   caixaPerguntas.textContent = "Resumindo...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}
   
   mostraPergunta();

   


