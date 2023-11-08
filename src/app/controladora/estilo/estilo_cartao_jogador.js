import styled from "styled-components";

export const Container_Cartao_Jogador_Time_A = styled.article`
  border-radius: 20px;
  background: ${props => props.background_color};
  height: 17.44vh;
  align-items: center;
  align-self: stretch;
`
export const Container_Cartao_Jogador_Time_B = styled(Container_Cartao_Jogador_Time_A)`
  background: ${props => props.background_color};
`