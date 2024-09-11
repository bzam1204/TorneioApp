import styled from "styled-components";

export const Container_Cartao = styled.div`
  background: url('${props => props.imagem_url}') no-repeat;
  display: flex;
  width: calc(100% - 1.75vw * 2);
  height: 9.80vw;
  justify-content: space-between;
  align-items: center;
  background-size: 100% 100%;
  cursor: pointer;
  padding: 0 1.75vw;
  transition: 50ms;
  user-select: none;

  &:hover {
    backdrop-filter: brightness(130%);
    -webkit-filter: brightness(130%);
  }

  &:active {
    backdrop-filter: brightness(160%);
    -webkit-filter: brightness(160%);
  }

`

export const Nome_Jogador = styled.div`
  color: #FFF;
  width: fit-content;
  text-transform: uppercase;
  text-align: left;
  font-family: Orbitron, serif;
  font-size: 1.46vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Numero_Camisa = styled(Nome_Jogador)`
  font-size: 3.66vw; // 
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