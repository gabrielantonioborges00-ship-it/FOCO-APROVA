// Inteligência da Professora IA Gemini & Sistema de Simulados

// Banco de dados de questões para o simulado
const bancoQuestoes = [
    {
        pergunta: "Qual é o princípio constitucional que garante que a administração pública deve agir com transparência?",
        opcoes: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade"],
        correta: "D"
    },
    {
        pergunta: "Em qual alternativa a crase foi empregada CORRETAMENTE?",
        opcoes: ["A) Entreguei o relatório à diretora.", "B) Ele começou à caminhar cedo.", "C) Fomos à pé para o cursinho.", "D) Vendeu o carro à prazo."],
        correta: "A"
    }
];

// Função para a Professora IA responder dúvidas (Simulação de integração Gemini)
function perguntarProfessora() {
    const duvida = prompt("Digite sua dúvida de concurso para a Professora IA Gemini:");
    if (!duvida) return;

    const respostaInterativa = 🤖 [Professora IA Gemini]: Excelente dúvida! Com base nos editais recentes, foque sempre na base teórica e na resolução de questões similares. Para a sua pergunta sobre "${duvida}", recomendo revisar a lei seca e fazer resumos esquematizados. Mantenha a constância!;
    
    alert(respostaInterativa);
}

// Função para iniciar o Simulado Automatizado (Etapa 8)
function iniciarSimulado() {
    alert("📝 Iniciando Simulado com Correção Automática...");
    let acertos = 0;

    bancoQuestoes.forEach((q, index) => {
        let mensagem = Questão ${index + 1}:\n${q.pergunta}\n\n${q.opcoes.join("\n")}\n\nDigite a letra da resposta correta (A, B, C ou D):;
        let respostaUsuario = prompt(mensagem);
        
        if (respostaUsuario && respostaUsuario.toUpperCase().trim() === q.correta) {
            acertos++;
        }
    });

    // Painel de Notas e Desempenho
    const notaFinal = (acertos / bancoQuestoes.length) * 10;
    alert(📊 SEU DESEMPENHO:\n\nVocê acertou ${acertos} de ${bancoQuestoes.length} questões.\nNota Final: ${notaFinal.toFixed(1)}/10.0\n\n${notaFinal >= 7 ? "🎉 Excelente! Você está no caminho da aprovação!" : "📚 Continue estudando! Revise os pontos fracos."});
}

// Conectar as funções aos blocos da tela quando carregar
document.addEventListener("DOMContentLoaded", () => {
    console.log("FOCO APROVA - Inteligência e Simulados Prontos!");
});
