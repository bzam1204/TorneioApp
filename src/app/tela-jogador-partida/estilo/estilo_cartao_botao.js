import styled from "styled-components";

export const Container_Cartao_Botoes_Esquerdo = styled.article`
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
export const Container_Cartao_Botoes_Direito = styled(Container_Cartao_Botoes_Esquerdo)`
  background: ${props => props.background_color};
  justify-content: flex-end;
`

export const Dica_Cor_Botao = styled.div`
  background: ${props => props.cor};
  ${props => props.borda}
  width: 1.75vw;
  height: 100%;
  align-self: stretch;
`
export const Imagem_Icone_Botao = styled.div`
  background: url(${props => props.imagem_url});
  width: 4.83vw;
  height: 7.83vw;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const Nome_Estatistica = styled.div`
  color: #FFF;
  font-family: Orbitron;
  font-size: 1.60vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`