import styled from "styled-components";

export const Frame_Container_Painel_Jogador_Info = styled.section`
  display: flex;
  padding: 1.17vw;
  flex-direction: column;
  align-items: center;
  gap: 1.17vw;
  flex: 1 0 0;
  align-self: stretch; width: calc( 100% - 1.17vw * 2);
`

export const Container_Painel_Jogador_Info = styled.div`
  border-radius: 1.46vw;
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%),linear-gradient(90deg, rgba(27, 0, 2, 0.60) -14.22%, rgba(1, 1, 27, 0.60) 120.29%);
  backdrop-filter: blur(29.5px);
  display: flex;
  /* width: 100%; */
  padding: 1.17vw 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.17vw;
  flex: 1 0 0;
  align-self: stretch;
  align-content: center;
  flex-wrap: wrap;
`

export const Imagem_Jogador = styled.div`
  width: 24.30vw;
  height: 31.91vw;
  align-self: stretch;
  background: url(${props => props.imagem_url});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Nome_Jogador = styled.div`
  flex: 1 0 0;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Orbitron;
  font-size: 50px;
  background: linear-gradient(180deg, #FFF 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const Numero_Camisa = styled.div`
  background: linear-gradient(180deg, #FFF 0%, #FFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Orbitron;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
