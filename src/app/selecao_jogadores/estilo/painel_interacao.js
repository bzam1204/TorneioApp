import styled from 'styled-components'


export const Container_Painel_Interacao = styled.section`
  display: flex;
  padding: 16px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`
export const Container_Camada_Interna = styled(Container_Painel_Interacao)`
  display: flex;
  padding: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(97deg, rgba(60, 37, 39, 0.30) -178.97%, rgba(11, 11, 79, 0.30) 247.86%);
  backdrop-filter: blur(29.5px);
  -webkit-backdrop-filter: blur(29.5px);
`

export const Titulo_Pagina = styled.h1`
  color: #FBB507;
  text-align: center;
  font-family: Orbitron;
  text-transform: uppercase;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%; /* 80px */
  letter-spacing: 8px;
`