const videosTotal = document.querySelector(".videos-total");
const seguidoresTotal = document.querySelector(".seguidores-total");
const criacaoCanal = document.querySelector(".canal-criacao-data");
const viewsTotal = document.querySelector(".views-total");

const key = "AIzaSyCZ2emG-XPu1zm0Hfw8F9O_Wvy6Ln4HZ3M";
const ednaldo_ID = "UCLzb8VJaApoEZ6Bbmmq-oEA";

const request_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${ednaldo_ID}&key=${key}`;

fetch(request_url)
    .then(response => response.json())
    .then(data => {
        let ano = data.items[0].snippet.publishedAt.slice(0,4);
        let mes = data.items[0].snippet.publishedAt.slice(5,7);
        let dia = data.items[0].snippet.publishedAt.slice(8,10);

        videosTotal.textContent = (data.items[0].statistics.videoCount / 1000).toFixed(3);
        seguidoresTotal.textContent = Math.floor(data.items[0].statistics.subscriberCount / 1000) + "K";
        criacaoCanal.textContent = dia + "/" + mes + "/" + ano;
        viewsTotal.textContent = data.items[0].statistics.viewCount;
    });