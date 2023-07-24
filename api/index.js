import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const spreadsheet_ID = "1d1CUdiLEpD7TDYVMWx7PJmNM31bss3pIiTBCtqhhgrU";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file"
];

const jwt = new JWT({
  email: "torneioapp@torneioapp-393716.iam.gserviceaccount.com",
  key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCybhd1oqLvnOM2\nuLgo1PJE+Wge5Tib6et/SqacXOQRqNAi0Uj5pRQQaGOzPrAZGASDQ9rvXv7Bk328\nUG3FD/34HwwTXXGPN16TqNpL2enr8S2ptWglyPtoJKHPQ7skwvf6wlpZ2v0XmuJr\nbEIkX3Lb+GHHwqtKgFRHB6QJPwK4T73cQ/B+J8rrde5/aS+8pnMQLOGwhZsijjUj\nNJSjeVCEtn2p9PSoV1/ytvkpKHtHFjWPOOEdt3/Ul2P+jkS1vIkgV89wx6ZpChzw\nIPZyLPl99vLlL9GYQnoPK9JlGRo1oKbHHnLq8SORLAM3dTLnVtrR20xWKepO+5cg\nBLYFJ5xhAgMBAAECggEAPfPRu2t7zVyY27ApaSv+7on2Z/vIuwHuXaUq0lHCcos9\nsUkfYGa737KPI3ZZqGzZbEZMJx7Br66pUpBOfMS/tr348GRagJKGCRjwqrN/8Acu\nhqVRAwWUnSVS9Wcb/Hihp3SB8H8Dr4V8pjXRhVWKyOul77kcxmJmYL87amZxaFLa\nsm8owLpNa79IGRBa3GkxWoi5xQB5ehu7t8/BErKStJEVz4b39L12l+amSnOWlMYe\nyvB+EuTJGgTvkyRRUuGSZjvi3tgi3JL6YI7gpE2IUDRgUaGBRPh6QQ8IZ/BAsZaW\nBuzgoSMhzhSVJmZfMVpLBAo9a7MZM5snyH74iD1KvQKBgQDorjVBH8Hi5V36IDGY\nm8EURQ9iz9zD7a8BDhZ3N1E8v3D5LPwWUpt6fYXqCMBYQ60huL6pP9HEW/pEQIzr\nqUAan6FG9vZGfnu01262cujpbkW4iJWRILG+D1FOWnHJCeRpO3FJAhCJkwR6FhZQ\n++LV/tkBMTNtD2eJf7Wqyn/5mwKBgQDEUABFdb3koCtf0cYKy5LDHX0kXGYH+ExM\nn9ypgX21tJnbSdS0Zau/mLS9zBZbsClqxJvYW95I4MeWS/ZihO7D2XxYc5LqnOW+\nOPhwLhZp12khXRDXk0zWILZf6tSUwMabMsoAz/AsLS0c+04aByg7m/4DZAxtq4gu\nB+pR4OQPswKBgC4WW3wDw06i6eNiPxCgQTU3nJ2Q2ISCbriBxtdkQJYMwV7Jl0EA\nqcUwWbcKdrbE6OUWB8XUW0NOiJq+QmtnQchEOBirUAqUgQJH7aj7x8B81BiCDUYK\nuMoRlKQ1a/ZLHE/vszenzgjB8xAPkeoGil6itO70hOAkPfjRL/WdWI3jAoGBAIIR\nd3yOHHkEXnioJo00gFLikO2sgrW5H+SM7skoUMA5ns8aReIYkwjpBqfSNuYc+/QP\nvCpIBClJNTQxtFdmOERvLuH0AV2NAvNcD89T2enanX9LiEMtB3XAStWWY68DYxOl\nPQ34t+qtK/zNzNuV7mRAYLaibVGkmx/Ugr4pQTHdAoGAJykzhQk8tA4iiAjeoss/\nIp59tHh95kjyHBpiB9EEBkafpHEYm7nn6mjfWt8pclvTowgpkqR3nY182IgLCoM4\nCoK4Gi9IMvKSJ1b9aDIqH9vtiCcNK8yzrvIxIQkeSMy16oQSNGyID5RdCD18UbV2\nVjzZDZVKEt49o+Hz8/ETkfc=\n-----END PRIVATE KEY-----\n",
  scopes: SCOPES
});
const doc = new GoogleSpreadsheet(spreadsheet_ID, jwt);

await doc.loadInfo();
console.log(doc.title);

const stats_players_sheet = doc.sheetsByTitle["STATS_PLAYERS"];
await stats_players_sheet.loadCells();
const stats_players_rows = await stats_players_sheet.getRows();

(await stats_players_rows).forEach((row) => {
  row.get("NOME") != undefined && console.log(row.get("NOME"));
});

function get_all_players() {
  return doc.sheetsByIndex[0].getRows();
}
const all_players = await get_all_players();

all_players.forEach((player) => {
  console.log(player.get("ID"));
});

module.exports = { get_all_players };
