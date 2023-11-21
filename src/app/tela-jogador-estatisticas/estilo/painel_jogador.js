import styled from 'styled-components'


export const Container_Painel_Jogador = styled.section`
  display: flex;
  padding: 16px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`
export const Container_Camada_Interna = styled(Container_Painel_Jogador)`
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

export const Nome_Jogador = styled.h1`
  color: #FBB507;
  text-align: center;
  font-family: Orbitron;
  text-transform: uppercase;
  display: flex;
  align-items: center;  
  font-size: 2.92vw;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 8px;
  height: 17.64vw;
  line-height: 200%;
`


export const Numero_Camisa = styled.p`
  background: linear-gradient(180deg, #FFF 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Orbitron;
  font-size: 80px;
  font-style: normal;
  font-weight: 900;
  line-height: 170%; /* 40.8px */
`
export const Imagem_Jogador = styled.div`
  background: url('${props => props.imagem_url}') no-repeat;
  width: 332px;
  height: 436px;
  background-size: cover;
  border-radius: 20px;
`
