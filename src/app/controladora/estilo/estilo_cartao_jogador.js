import styled from "styled-components";

export const Container_Cartao_Jogador_Time_A = styled.article`
  border-radius: 1.46vw;
  cursor: pointer;
  background: ${props => props.background_color};
  height: 17.44vh;
  align-items: center;
  align-self: stretch;
  display: flex;

  &:hover {
    backdrop-filter: brightness(140%);
    -webkit-filter: brightness(140%);
  }
`
export const Container_Cartao_Jogador_Time_B = styled(Container_Cartao_Jogador_Time_A)`
  background: ${props => props.background_color};
  justify-content: flex-end;
`

export const Dica_Cor_Botao = styled.div`
  background: ${props => props.cor};
  ${props => props.borda}
  width: 24px;
  height: 100%;
  align-self: stretch;
`
export const Imagem_Jogador = styled.div`
  width: 8.63vw;
  height: 100%;
  align-self: stretch;
  background: url(${props => props.imagem_url});
  background-size: cover;
  background-position: center;
`
export const Numero_Camisa = styled.div`
  color: #FFF;
  text-align: center;
  font-family: Orbitron;
  font-size: 3.66vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const Nome_Jogador = styled.div`
  color: #FFF;
  text-align: left;
  font-family: Orbitron, serif;
  text-transform: uppercase;
  font-size: 1.46vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Select_Jogador = styled.div`
  position: absolute;
  
`
