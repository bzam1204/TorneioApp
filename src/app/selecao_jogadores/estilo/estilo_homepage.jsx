import styled from "styled-components";

export const Container_Principal = styled.article`
  background: linear-gradient(90deg, #1F0000 -6.77%, #01011B 101.12%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const Container_Jogadores = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

export const Painel_Interacao = styled(Container_Jogadores)`

`