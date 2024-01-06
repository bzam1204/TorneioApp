'use client'
import {io} from 'socket.io-client'

let SOCKET_EXTERNAL_IP = '192.168.100.164';
const socket = io(`http://${SOCKET_EXTERNAL_IP}:3000`)

function apito() {
    fetch('http://192.168.100.164:3000/api/socket/16', {method: 'POST'})
}

const buttonStyle = {
    width: '90vw',
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 0.2s ease-in-out',
    fontSize: '4vh',
    fontFamily: 'Orbitron, serif',
    borderRadius: '5px',
    fontWeight: '700',
    color: 'white',
    ':active': {backgroundColor: 'white'},
}

export default function page() {
    return (
        <>
            <div

                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: "center",
                }}>

                <div
                    onClick={() => {
                        socket.emit("playpause");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: '#8b4513',
                        color: '#d2b48c'
                    }}>Play /Pause
                </div>

                <div
                    onClick={() => {
                        socket.emit("reset");
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: '#2c3e50',
                        color: '#c0ab88'
                    }}>Reset 24s
                </div>

                <div
                    onClick={() => {
                        apito()
                    }}
                    style={{
                        ...buttonStyle,
                        backgroundColor: '#755a39',
                        color: '#b8860b'
                    }}>Apito
                </div>
            </div>
        </>
    )
}
