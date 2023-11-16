import styled   from "styled-components";

export const Container_Cartao = styled.div`
  display: flex;
  height: 134px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: url(${props => props.imagem_url}) no-repeat;
  background-size: 100% 134px;
`