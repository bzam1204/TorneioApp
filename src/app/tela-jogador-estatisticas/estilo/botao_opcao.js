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

  &:hover {
    backdrop-filter: brightness(130%);
    -webkit-filter: brightness(130%);
  }

  &:active {
    backdrop-filter: brightness(160%);
    -webkit-filter: brightness(160%);
  }

`

export const Nome_Opcao = styled.p`
  color: #FFF;
width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-family: Orbitron, serif;
  font-size: 1.46vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Opcao_Icone = styled(Nome_Opcao)`
  width: 74px;
  height: 74px;
  background-size: 74px;
  background-repeat: no-repeat;
  background-image: url(${props => props.image_url});

`