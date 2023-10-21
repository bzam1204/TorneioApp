import styled from "styled-components";
import colors from "../../../js/colors.js";

export const Card_jogador = styled.article`
  border-radius: 12px;
  border: 2px solid rgba(108, 108, 108, 0.59);
  background: linear-gradient(0deg, #00010F 0%, #00010F 100%), rgba(8, 9, 19, 0.00);
  display: inline-flex;
  padding-bottom: 0px;
  height: 168px;
  width: 151px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Btn_Jogador_Default = styled.button`
  border-radius: 500px;
  border: 2px solid ${colors.bordas};
  display: flex;
  width: 40px;
  height: 40px;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${colors.txt_botoes_jogador};
  font-family: Orbitron;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NomeJogador = styled.p`
  align-self: stretch;
  color: #FFF;
  text-align: center;
  word-wrap: break-word;
  width: 151px;
  font-family: Orbitron;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const ImagemJogador = styled.div`
  border-radius: 0px 0px 20px 0px;
  border-right: 2px solid rgba(34, 34, 34, 0.60);
  border-bottom: 2px solid rgba(34, 34, 34, 0.60);
  display: flex;
  background-size: cover;
  background-position: center center;
  width: 80px;
  height: 106.667px;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
`;

export const ContainerButton = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
`

export const Botao = styled.div`border-radius: 50px;
  border-bottom: 1px solid #FFF;
  display: flex;
  padding: 9px 5px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`

export const TextoBotao = styled.div`
  color: #FFF;
  text-align: center;
  font-family: Orbitron;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;
  text-transform: uppercase;
`
export const IconeBotao = styled.div`width: 16px;
  height: 16px;
`


export const BotaoStats = styled.div`width: 40px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  background-size: contain; /* Mantém a proporção original da imagem */
  background-position: center center; 
  border-radius: 50px;
`
