const perguntas = [
  {
    pergunta: "Se você compra um produto de R$ 80 com 25% de desconto, quanto paga?",
    alternativas: ["R$ 55", "R$ 60", "R$ 65", "R$ 70"],
    correta: 1,
    explicacao: "25% de R$ 80 são R$ 20. Então, R$ 80 − R$ 20 = R$ 60."
  },
  {
    pergunta: "Qual destas senhas é a mais segura?",
    alternativas: ["12345678", "pedro2026", "senha123", "T7!mQ9#vLp2"],
    correta: 3,
    explicacao: "Uma senha longa, imprevisível e com diferentes tipos de caracteres é mais difícil de adivinhar."
  },
  {
    pergunta: "Qual é a principal função de um navegador, como Chrome ou Firefox?",
    alternativas: [
      "Editar vídeos profissionais",
      "Acessar e visualizar páginas da internet",
      "Aumentar a memória RAM",
      "Proteger o computador contra qualquer vírus"
    ],
    correta: 1,
    explicacao: "Navegadores permitem acessar sites e utilizar aplicações disponíveis na web."
  },
  {
    pergunta: "Qual destes países fica na América do Sul?",
    alternativas: ["Portugal", "México", "Chile", "Espanha"],
    correta: 2,
    explicacao: "O Chile está localizado na América do Sul, ao longo da costa oeste do continente."
  },
  {
    pergunta: "Qual é o resultado de 15 × 8?",
    alternativas: ["100", "110", "120", "130"],
    correta: 2,
    explicacao: "15 × 8 = 120."
  },
  {
    pergunta: "O que significa a sigla Wi-Fi no uso cotidiano?",
    alternativas: [
      "Uma conexão sem fio para redes",
      "Um tipo de cabo USB",
      "Um aplicativo de mensagens",
      "Um sistema operacional"
    ],
    correta: 0,
    explicacao: "Wi-Fi é uma tecnologia usada para conectar dispositivos a redes sem a necessidade de cabos."
  },
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    alternativas: ["Terra", "Saturno", "Júpiter", "Netuno"],
    correta: 2,
    explicacao: "Júpiter é o maior planeta do Sistema Solar."
  },
  {
    pergunta: "Se hoje é terça-feira, que dia será daqui a 10 dias?",
    alternativas: ["Quinta-feira", "Sexta-feira", "Sábado", "Domingo"],
    correta: 1,
    explicacao: "Sete dias depois será terça-feira novamente. Mais três dias: sexta-feira."
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    alternativas: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correta: 2,
    explicacao: "Brasília é a capital federal do Brasil desde 1960."
  },
  {
    pergunta: "Qual componente do computador executa instruções e realiza cálculos?",
    alternativas: ["Monitor", "Processador", "Teclado", "Gabinete"],
    correta: 1,
    explicacao: "O processador (CPU) executa instruções e realiza operações fundamentais para o funcionamento do computador."
  },
  {
    pergunta: "Qual destes alimentos é uma fonte importante de proteínas?",
    alternativas: ["Ovo", "Refrigerante", "Açúcar", "Óleo de cozinha"],
    correta: 0,
    explicacao: "O ovo fornece proteínas, importantes para a construção e manutenção dos tecidos do corpo."
  },
  {
    pergunta: "O que é a inflação?",
    alternativas: [
      "A diminuição de todos os salários",
      "O aumento geral dos preços ao longo do tempo",
      "A redução da população",
      "O aumento da quantidade de produtos nas lojas"
    ],
    correta: 1,
    explicacao: "A inflação é o aumento generalizado dos preços, que reduz o poder de compra do dinheiro."
  },
  {
    pergunta: "Qual destes animais é um mamífero?",
    alternativas: ["Tartaruga", "Sardinha", "Golfinho", "Pinguim"],
    correta: 2,
    explicacao: "Apesar de viver na água, o golfinho é mamífero: respira por pulmões e amamenta seus filhotes."
  },
  {
    pergunta: "Qual é o idioma oficial predominante no Brasil?",
    alternativas: ["Espanhol", "Português", "Inglês", "Italiano"],
    correta: 1,
    explicacao: "O português é a língua oficial do Brasil."
  },
  {
    pergunta: "Uma camiseta custa R$ 50. Se você comprar duas, sem desconto, quanto pagará?",
    alternativas: ["R$ 75", "R$ 90", "R$ 100", "R$ 110"],
    correta: 2,
    explicacao: "Duas camisetas de R$ 50 custam R$ 100."
  },
  {
    pergunta: "Para que serve principalmente o GPS de um celular?",
    alternativas: [
      "Medir a temperatura do processador",
      "Determinar a localização e ajudar na navegação",
      "Aumentar o volume do aparelho",
      "Melhorar a qualidade da câmera"
    ],
    correta: 1,
    explicacao: "O GPS ajuda a determinar a localização e é utilizado por aplicativos de mapas e navegação."
  },
  {
    pergunta: "Qual destes é um exemplo de energia renovável?",
    alternativas: ["Carvão mineral", "Petróleo", "Energia solar", "Gasolina"],
    correta: 2,
    explicacao: "A energia solar utiliza a luz do Sol, uma fonte naturalmente renovada."
  },
  {
    pergunta: "O que você deve fazer ao receber uma mensagem suspeita pedindo a senha do seu banco?",
    alternativas: [
      "Enviar a senha para confirmar sua identidade",
      "Clicar no link para descobrir do que se trata",
      "Não fornecer os dados e verificar pelos canais oficiais",
      "Encaminhar a mensagem para todos os contatos"
    ],
    correta: 2,
    explicacao: "Bancos não precisam que você envie sua senha por mensagem. Verifique qualquer solicitação pelos canais oficiais."
  },
  {
    pergunta: "Qual é o resultado de 144 ÷ 12?",
    alternativas: ["10", "11", "12", "14"],
    correta: 2,
    explicacao: "12 × 12 = 144, portanto 144 ÷ 12 = 12."
  },
  {
    pergunta: "Qual órgão do corpo humano é responsável por bombear o sangue?",
    alternativas: ["Pulmão", "Estômago", "Coração", "Fígado"],
    correta: 2,
    explicacao: "O coração bombeia o sangue pelo sistema circulatório."
  },
  {
    pergunta: "O que significa a expressão 'fake news'?",
    alternativas: [
      "Notícias antigas",
      "Notícias falsas ou enganosas",
      "Notícias esportivas",
      "Notícias publicadas em jornais impressos"
    ],
    correta: 1,
    explicacao: "A expressão se refere a informações falsas ou enganosas divulgadas como se fossem verdadeiras."
  },
  {
    pergunta: "Qual destes países é conhecido pela Torre Eiffel?",
    alternativas: ["Itália", "França", "Alemanha", "Grécia"],
    correta: 1,
    explicacao: "A Torre Eiffel é um dos monumentos mais conhecidos de Paris, na França."
  },
  {
    pergunta: "Na internet, o que significa fazer um download?",
    alternativas: [
      "Enviar um arquivo do computador para a internet",
      "Baixar um arquivo para o seu dispositivo",
      "Apagar um arquivo permanentemente",
      "Desligar a conexão de rede"
    ],
    correta: 1,
    explicacao: "Download é a transferência de dados de um sistema remoto para o seu dispositivo."
  },
  {
    pergunta: "Qual é o plural correto de 'cidadão'?",
    alternativas: ["Cidadões", "Cidadães", "Cidadãos", "Cidadãoses"],
    correta: 2,
    explicacao: "O plural de cidadão é cidadãos."
  },
  {
    pergunta: "Uma turma tem 40 alunos, e 10 faltaram. Qual porcentagem da turma faltou?",
    alternativas: ["10%", "20%", "25%", "40%"],
    correta: 2,
    explicacao: "10 ÷ 40 = 0,25, ou seja, 25% da turma."
  },
  {
    pergunta: "Qual é a principal função dos pulmões?",
    alternativas: [
      "Filtrar o sangue para produzir urina",
      "Realizar trocas gasosas, captando oxigênio e eliminando gás carbônico",
      "Produzir os movimentos do corpo",
      "Bombear o sangue"
    ],
    correta: 1,
    explicacao: "Nos pulmões ocorre a troca de gases entre o ar e o sangue."
  },
  {
    pergunta: "Qual destes programas é utilizado principalmente para criar apresentações de slides?",
    alternativas: ["PowerPoint", "Bloco de Notas", "Calculadora", "Paint"],
    correta: 0,
    explicacao: "O PowerPoint é um programa usado para montar apresentações de slides."
  },
  {
    pergunta: "Se um produto custa R$ 200 e aumenta 10%, qual será o novo preço?",
    alternativas: ["R$ 210", "R$ 215", "R$ 220", "R$ 230"],
    correta: 2,
    explicacao: "10% de R$ 200 são R$ 20. O novo preço é R$ 220."
  },
  {
    pergunta: "Qual é o nome do processo pelo qual a água passa do estado líquido para o gasoso?",
    alternativas: ["Condensação", "Solidificação", "Evaporação", "Fusão"],
    correta: 2,
    explicacao: "A evaporação é a passagem do estado líquido para o gasoso que ocorre na superfície de um líquido."
  },
  {
    pergunta: "Qual é o principal objetivo de uma Constituição em um país?",
    alternativas: [
      "Definir somente os preços dos produtos",
      "Estabelecer regras fundamentais de organização do Estado e direitos",
      "Substituir todas as leis municipais diariamente",
      "Determinar os resultados das competições esportivas"
    ],
    correta: 1,
    explicacao: "A Constituição estabelece a estrutura fundamental do Estado, seus poderes e direitos e garantias."
  },
  {
    pergunta: "Qual destes materiais costuma ser atraído por um ímã?",
    alternativas: ["Madeira", "Vidro", "Ferro", "Papel"],
    correta: 2,
    explicacao: "O ferro é um material ferromagnético e pode ser fortemente atraído por ímãs."
  },
  {
    pergunta: "Qual é a ideia principal da reciclagem?",
    alternativas: [
      "Transformar resíduos em materiais que possam ser aproveitados novamente",
      "Misturar todo o lixo em um único recipiente",
      "Aumentar o consumo de produtos descartáveis",
      "Impedir que qualquer produto seja reutilizado"
    ],
    correta: 0,
    explicacao: "A reciclagem transforma resíduos em matéria-prima ou novos produtos, reduzindo o desperdício de recursos."
  },
  {
    pergunta: "Qual destas atitudes ajuda a economizar energia elétrica em casa?",
    alternativas: [
      "Deixar todas as luzes acesas",
      "Manter aparelhos ligados sem necessidade",
      "Apagar as luzes de ambientes vazios",
      "Abrir a geladeira por vários minutos"
    ],
    correta: 2,
    explicacao: "Apagar as luzes quando não são necessárias reduz o consumo de energia."
  },
  {
    pergunta: "Complete a sequência: 3, 6, 12, 24, __.",
    alternativas: ["30", "36", "42", "48"],
    correta: 3,
    explicacao: "Cada número é o dobro do anterior: 24 × 2 = 48."
  },
  {
    pergunta: "Qual destas atitudes é um exemplo de respeito no ambiente escolar?",
    alternativas: [
      "Interromper todos os colegas",
      "Zombar de quem pensa diferente",
      "Ouvir opiniões diferentes sem humilhar ninguém",
      "Compartilhar fotos dos colegas sem permissão"
    ],
    correta: 2,
    explicacao: "Respeitar as diferenças envolve ouvir, dialogar e tratar as pessoas com dignidade."
  },
  {
    pergunta: "O que acontece com o gelo quando derrete?",
    alternativas: [
      "Passa do estado sólido para o líquido",
      "Passa do estado líquido para o sólido",
      "Transforma-se imediatamente em vapor",
      "Deixa de ser água"
    ],
    correta: 0,
    explicacao: "O derretimento, também chamado de fusão, transforma o gelo em água líquida."
  },
  {
    pergunta: "Qual é a finalidade de um antivírus?",
    alternativas: [
      "Garantir internet mais rápida em qualquer situação",
      "Ajudar a detectar, bloquear ou remover programas maliciosos",
      "Substituir o sistema operacional",
      "Aumentar fisicamente o espaço do HD"
    ],
    correta: 1,
    explicacao: "Antivírus é uma ferramenta de segurança que ajuda a identificar e combater softwares maliciosos."
  },
  {
    pergunta: "Qual é o resultado de 2³?",
    alternativas: ["6", "8", "9", "12"],
    correta: 1,
    explicacao: "2³ significa 2 × 2 × 2, que resulta em 8."
  },
  {
    pergunta: "Qual destes gêneros textuais tem como objetivo principal defender um ponto de vista com argumentos?",
    alternativas: ["Receita culinária", "Texto argumentativo", "Lista de compras", "Manual de montagem"],
    correta: 1,
    explicacao: "Um texto argumentativo apresenta uma posição e utiliza razões e evidências para defendê-la."
  },
  {
    pergunta: "Se você economizar R$ 30 por semana durante 4 semanas, quanto terá guardado?",
    alternativas: ["R$ 90", "R$ 100", "R$ 120", "R$ 150"],
    correta: 2,
    explicacao: "R$ 30 × 4 semanas = R$ 120."
  },
  {
    pergunta: "Por que é importante manter os aplicativos e o sistema operacional atualizados?",
    alternativas: [
      "Porque toda atualização deixa o aparelho mais lento",
      "Porque atualizações podem corrigir falhas e melhorar a segurança",
      "Porque elas eliminam a necessidade de senhas",
      "Porque impedem qualquer defeito físico"
    ],
    correta: 1,
    explicacao: "Atualizações frequentemente corrigem vulnerabilidades, resolvem problemas e adicionam melhorias."
  }
];

let nomeJogador = "";
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const nextBtn = document.querySelector("#next-btn");
const questionCount = document.querySelector("#question-count");
const scoreElement = document.querySelector("#score");
const progressBar = document.querySelector("#progress-bar");
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");
const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");
const recordScore = document.querySelector("#record-score");
const timerElement = document.querySelector("#timer");
const timerBar = document.querySelector("#timer-bar");
const timerPill = document.querySelector(".timer-pill");

const TOTAL_PERGUNTAS = 10;
const TEMPO_POR_PERGUNTA = 15;
const RECORD_KEY = "quizlab-recorde-v1";

let rodada = [];
let indiceAtual = 0;
let pontuacao = 0;
let respondida = false;
let tempoRestante = TEMPO_POR_PERGUNTA;
let intervaloTimer = null;

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function pararTimer() {
  if (intervaloTimer !== null) {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
  }
}

function iniciarTimer() {
  pararTimer();
  tempoRestante = TEMPO_POR_PERGUNTA;
  atualizarTimer();

  intervaloTimer = setInterval(() => {
    tempoRestante--;
    atualizarTimer();

    if (tempoRestante <= 0) {
      pararTimer();
      encerrarPorTempo();
    }
  }, 1000);
}

function atualizarTimer() {
  timerElement.textContent = tempoRestante;
  timerBar.style.width = `${(tempoRestante / TEMPO_POR_PERGUNTA) * 100}%`;
  timerPill.classList.toggle("urgent", tempoRestante <= 5);
  timerBar.classList.toggle("urgent", tempoRestante <= 5);
}

function iniciarQuiz() {
  rodada = embaralhar(perguntas).slice(0, TOTAL_PERGUNTAS);
  indiceAtual = 0;
  pontuacao = 0;
  respondida = false;
  scoreElement.textContent = pontuacao;
  mostrarTela("quiz");
  mostrarPergunta();
}

function mostrarTela(tela) {
  if (tela !== "quiz") pararTimer();
  startScreen.classList.toggle("d-none", tela !== "inicio");
  quizScreen.classList.toggle("d-none", tela !== "quiz");
  resultScreen.classList.toggle("d-none", tela !== "resultado");
}

function mostrarPergunta() {
  respondida = false;
  const atual = rodada[indiceAtual];
  questionCount.textContent = `PERGUNTA ${indiceAtual + 1} DE ${rodada.length}`;
  progressBar.style.width = `${(indiceAtual / rodada.length) * 100}%`;
  questionText.textContent = atual.pergunta;
  answersContainer.replaceChildren();
  feedback.className = "feedback mt-3 d-none";
  feedback.textContent = "";
  nextBtn.classList.add("d-none");

  const alternativas = embaralhar(
    atual.alternativas.map((texto, indice) => ({
      texto,
      correta: indice === atual.correta
    }))
  );

  alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "answer-btn";
    botao.textContent = `${String.fromCharCode(65 + indice)}. ${alternativa.texto}`;
    botao.addEventListener("click", () => selecionarResposta(botao, alternativa, atual));
    answersContainer.appendChild(botao);
  });

  iniciarTimer();
}

function revelarRespostaCorreta(pergunta) {
  const textoCorreto = pergunta.alternativas[pergunta.correta];
  [...answersContainer.querySelectorAll("button")].forEach(botao => {
    botao.disabled = true;
    if (botao.textContent.slice(3) === textoCorreto) {
      botao.classList.add("correct");
    }
  });
}

function selecionarResposta(botaoEscolhido, alternativa, pergunta) {
  if (respondida) return;
  respondida = true;
  pararTimer();
  revelarRespostaCorreta(pergunta);

  if (alternativa.correta) {
    pontuacao++;
    scoreElement.textContent = pontuacao;
    feedback.textContent = `Acertou! ${pergunta.explicacao}`;
    feedback.className = "feedback mt-3 good";
  } else {
    botaoEscolhido.classList.add("wrong");
    feedback.textContent = `Não foi dessa vez. ${pergunta.explicacao}`;
    feedback.className = "feedback mt-3 bad";
  }

  progressBar.style.width = `${((indiceAtual + 1) / rodada.length) * 100}%`;
  nextBtn.textContent = indiceAtual === rodada.length - 1 ? "Ver resultado ✓" : "Próxima →";
  nextBtn.classList.remove("d-none");
}

function encerrarPorTempo() {
  if (respondida) return;
  respondida = true;
  const pergunta = rodada[indiceAtual];
  revelarRespostaCorreta(pergunta);
  feedback.textContent = `Tempo esgotado! ${pergunta.explicacao}`;
  feedback.className = "feedback mt-3 bad";
  progressBar.style.width = `${((indiceAtual + 1) / rodada.length) * 100}%`;
  nextBtn.textContent = indiceAtual === rodada.length - 1 ? "Ver resultado ✓" : "Próxima →";
  nextBtn.classList.remove("d-none");
}

function proximaPergunta() {
  if (!respondida) return;
  indiceAtual++;
  if (indiceAtual < rodada.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

async function salvarPontuacao() {
  try {
    const { error } = await db
      .from("ranking")
      .insert([
        {
          nome: nomeJogador,
          pontuacao: pontuacao
        }
      ]);

    if (error) {
      console.error("Erro ao salvar no Supabase:", error);
      return false;
    }

    console.log("Pontuação salva com sucesso!");
    return true;

  } catch (erro) {
    console.error("Erro de conexão com o Supabase:", erro);
    return false;
  }
}


async function mostrarResultado() {
  pararTimer();

  const recordeAnterior = Number(
    localStorage.getItem(RECORD_KEY) || 0
  );

  const novoRecorde = Math.max(recordeAnterior, pontuacao);

  localStorage.setItem(RECORD_KEY, String(novoRecorde));

  finalScore.textContent = pontuacao;
  recordScore.textContent = novoRecorde;

  resultTitle.textContent =
    pontuacao === rodada.length
      ? "Perfeito! Gabaritou!"
      : pontuacao >= 7
        ? "Mandou bem!"
        : pontuacao >= 4
          ? "Bom começo!"
          : "Bora tentar de novo?";

  resultMessage.textContent =
    `${nomeJogador}, você acertou ${pontuacao} de ${rodada.length} perguntas.`;

  mostrarTela("resultado");

  const salvo = await salvarPontuacao();

  if (!salvo) {
    resultMessage.textContent +=
      " Não foi possível salvar sua pontuação no ranking.";
  }
}



startBtn.addEventListener("click", () => {
  const campoNome = document.querySelector("#player-name");
  const erroNome = document.querySelector("#name-error");

  nomeJogador = campoNome.value.trim();

  if (!nomeJogador) {
    erroNome.textContent = "Digite seu nome antes de jogar.";
    campoNome.focus();
    return;
  }

  erroNome.textContent = "";
  iniciarQuiz();
});
restartBtn.addEventListener("click", iniciarQuiz);
nextBtn.addEventListener("click", proximaPergunta);
recordScore.textContent = Number(localStorage.getItem(RECORD_KEY) || 0);


async function carregarRanking() {
  const lista = document.getElementById("ranking-list");

  lista.replaceChildren();

  const carregando = document.createElement("tr");
  const mensagem = document.createElement("td");

  mensagem.colSpan = 3;
  mensagem.textContent = "Carregando ranking...";
  mensagem.className = "text-center";

  carregando.appendChild(mensagem);
  lista.appendChild(carregando);

  try {
    const { data, error } = await db
      .from("ranking")
      .select("nome, pontuacao")
      .order("pontuacao", { ascending: false })
      .limit(10);

    if (error) throw error;

    lista.replaceChildren();

    if (!data || data.length === 0) {
      const linha = lista.insertRow();
      const celula = linha.insertCell();

      celula.colSpan = 3;
      celula.textContent = "Ainda não há pontuações.";
      celula.className = "text-center";

      return;
    }

    data.forEach((jogador, index) => {
      const linha = lista.insertRow();

      linha.insertCell().textContent = index + 1;
      linha.insertCell().textContent = jogador.nome;
      linha.insertCell().textContent = jogador.pontuacao;

      linha.cells[2].className = "text-end fw-bold";
    });
  } catch (error) {
    console.error("Erro ao carregar ranking:", error);

    lista.replaceChildren();

    const linha = lista.insertRow();
    const celula = linha.insertCell();

    celula.colSpan = 3;
    celula.textContent = "Não foi possível carregar o ranking.";
    celula.className = "text-center";
  }
}

document
  .getElementById("refresh-ranking")
  .addEventListener("click", carregarRanking);

carregarRanking();