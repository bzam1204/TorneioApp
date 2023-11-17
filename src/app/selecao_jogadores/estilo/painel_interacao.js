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
  justify-content: space-between;
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
  display: flex;
  align-items: center;  
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 8px;
  height: 17.64vw;
`
export const Contador_Jogadores_Selecionados = styled.div`
  border-radius: 20px;
  background: linear-gradient(97deg, rgba(60, 37, 39, 0.30) -178.97%, rgba(11, 11, 79, 0.30) 247.86%);
  backdrop-filter: blur(2px);
  display: flex;
  height: 67px;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const Jogadores_Label = styled.p`
  background: linear-gradient(180deg, #FFF 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Orbitron;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 170%; /* 40.8px */
`
export const Numero_Jogadores_Selecionados = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Orbitron;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`