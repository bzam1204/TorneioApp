import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl(
        // "https://basquetecansadoapi20240902180725.azurewebsites.net/socket/"
        "http://localhost:5144/hubs/notifications"
    )
    .withAutomaticReconnect()
    .build();
    
connection
    .start()
    .then(() => console.log("SignalR Connected"))
    .catch((err) => console.error("SignalR Connection Error: ", err));
export default connection;
