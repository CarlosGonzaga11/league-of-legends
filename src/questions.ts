import rabadon from "../public/rabadon.png";
import luden from "../public/ecodeluden.png";

import morelo from "../public/morelo.png";
import placagargolica from "../public/rabadon.png";
import trindade from "../public/trindade.png";
import rylai from "../public/rylai.png";
import rei from "../public/rei.png";
import zonya from "../public/Zonias.png";
import cutelo from "../public/cutelo.png";
import guardiao from "../public/guardiao.png";
import manamune from "../public/manamune.png";
import danca from "../public/dancadamorte.png";
import cajado from "../public/cajadovazio.png";
import warmong from "../public/warmong.png";
import statik from "../public/static.png";

export const questions = [
  {
    id: 1,
    question:
      "A passiva do 'Força da Trindade' aumenta a velocidade de movimento permanentemente em 10%.",
    answer: false,
    explanation:
      "Falso. Ela aumenta velocidade de ataque e concede um bônus temporário de movimento ao atacar após usar habilidades.",
    image: trindade,
  },
  {
    id: 2,
    question:
      "O 'Rylai's Crystal Scepter' aplica lentidão em inimigos atingidos por habilidades.",
    answer: true,
    explanation:
      "Verdadeiro. Essa sempre foi a principal característica do Cetro de Cristal de Rylai.",
    image: rylai,
  },
  {
    id: 3,
    question:
      "A passiva do 'Placa Gargolítica' concede escudo baseado na vida máxima ao ser ativada.",
    answer: true,
    explanation:
      "Verdadeiro. Esse é o efeito ativo principal da Placa Gargolítica.",
    image: placagargolica,
  },
  {
    id: 4,
    question:
      "O item 'Espada do Rei Destruído' causa dano mágico baseado na vida atual do inimigo em ataques básicos.",
    answer: true,
    explanation:
      "Verdadeiro. Essa é a característica da passiva Lâmina Mágica do item.",
    image: rei,
  },
  {
    id: 5,
    question:
      "O 'Zhonya's Hourglass' aumenta o poder de habilidade permanentemente em 50 enquanto a estase está ativa.",
    answer: false,
    explanation:
      "Falso. O efeito da Ampulheta de Zhonya é a estase, que deixa o campeão invulnerável e inalvejável, mas sem poder agir.",
    image: zonya,
  },
  {
    id: 6,
    question:
      "A passiva do 'Anjo Guardião' revive o campeão após a morte uma vez a cada 300 segundos.",
    answer: true,
    explanation:
      "Verdadeiro. Esse é o famoso efeito de ressureição do Anjo Guardião.",
    image: guardiao,
  },
  {
    id: 7,
    question:
      "O 'Capuz da Morte de Rabadon' aumenta o poder de habilidade em 35%.",
    answer: true,
    explanation: "Verdadeiro. Esse é o efeito passivo mais icônico para magos.",
    image: rabadon,
  },

  {
    id: 8,
    question:
      "O 'Cutelo Negro' aplica redução de armadura acumulativa ao causar dano físico.",
    answer: true,
    explanation:
      "Verdadeiro. É conhecido por enfraquecer tanques ao reduzir armadura em múltiplas instâncias.",
    image: cutelo,
  },
  {
    id: 9,
    question:
      "O 'Morellonomicon' concede roubo de vida mágico ao causar dano com habilidades.",
    answer: false,
    explanation:
      "Falso. Ele aplica feridas dolorosas, reduzindo a cura dos inimigos atingidos.",
    image: morelo,
  },
  {
    id: 10,
    question:
      "A passiva do 'Manamune' transforma-se em 'Muramana' quando acumula mana suficiente.",
    answer: true,
    explanation: "Verdadeiro. Esse é o famoso upgrade da Manamune.",
    image: manamune,
  },

  {
    id: 11,
    question:
      "A 'Dança da Morte' cura o usuário ao causar dano físico com ataques básicos.",
    answer: false,
    explanation:
      "Falso. Ela cura ao eliminar campeões, e retarda parte do dano recebido.",
    image: danca,
  },
  {
    id: 12,
    question: "O 'Cajado do Vazio' concede penetração mágica percentual.",
    answer: true,
    explanation:
      "Verdadeiro. Esse é o motivo pelo qual é essencial contra tanques mágicos.",
    image: cajado,
  },

  {
    id: 13,
    question:
      "A 'Adaga de Statikk' aplica crítico adicional ao carregar energia.",
    answer: false,
    explanation: "Falso. Ela aplica dano mágico em cadeia, não crítico.",
    image: statik,
  },
  {
    id: 14,
    question:
      "O 'Warmog's Armor' regenera rapidamente a vida fora de combate se o usuário tiver muita vida máxima.",
    answer: true,
    explanation:
      "Verdadeiro. Esse é o famoso efeito de regeneração absurda do Warmog.",
    image: warmong,
  },
  {
    id: 15,
    question: "A 'Redenção' pode ser usada mesmo após a morte do usuário.",
    answer: true,
    explanation: "Verdadeiro. Essa é uma característica única do item.",
  },

  {
    id: 16,
    question:
      "O 'Eco de Luden' acumula cargas e causa dano extra em área ao atingir inimigos com habilidades.",
    answer: true,
    explanation: "Verdadeiro. Esse é seu efeito explosivo característico.",
    image: luden,
  },

  {
    id: 17,
    question: "O 'Punhal de Statikk' aumenta a chance de crítico em 50%.",
    answer: false,
    explanation:
      "Falso. Ele nunca concedeu tanto crítico; seu efeito é baseado em dano mágico em cadeia.",
    image: statik,
  },
];
