import styled from "styled-components";

export const Container_Cartao = styled.div`
  display: flex;
  height: 100%;
  background-size: 100% 100%;
  justify-content: space-between;
  align-items: center;
  background: url(${props => props.imagem_url}) no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  padding: 0 1.75vw;

`

export const Nome_Jogador = styled.p`
  color: #FFF;
  text-transform: uppercase;
  text-align: left;
  font-family: Orbitron, serif;
  font-size: 1.46vw;
  font-style: normal;
  width: 9.80vw;
  font-weight: 400;
  line-height: normal;
`

export const Numero_Camisa = styled(Nome_Jogador)`
  font-size: 3.66vw;
  font-weight: 700;
  width: 6.14vw;


`

export const Imagem_Jogador = styled.article`
  display: flex;
  width: 8.63vw;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  background-size: 100% 9.80vw;
  cursor: pointer;
`

