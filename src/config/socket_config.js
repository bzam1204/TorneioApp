import {io} from 'socket.io-client'

const socket = io("http://localhost:5144")
export default socket
