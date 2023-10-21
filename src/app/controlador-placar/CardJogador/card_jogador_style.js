import styled from "styled-components";
import colors from "../../../js/colors.js";

export const CardJogadorTime1 = styled.article`
  border-bottom: 2px solid ${colors.bordas};
  display: flex;
  width: 517px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
export const Btn_Falta = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_Falta};
`;
export const Btn_3_Ponto = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_3_Ponto};
`;
export const Btn_2_Ponto = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_2_Ponto};
`;
export const Btn_1_Ponto = styled(Btn_Jogador_Default)`
  background: ${colors.Btn_1_Ponto};
`;
export const NomeJogador = styled.p`
  color: ${colors.nome_jogador};
  width: 100%;
  text-align: left;
  overflow: hidden; /* Oculta o conteúdo que excede a largura máxima */
  white-space: nowrap; /* Impede a quebra de texto em várias linhas */
  text-overflow: ellipsis;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  outline: none;
  border: none;
  height: 50px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;

  :focus-visible {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: none !important;
  }
`;
export const PontosIndividuais = styled(Btn_Jogador_Default)`
  background-color: transparent;
  font-size: 20px;
`;