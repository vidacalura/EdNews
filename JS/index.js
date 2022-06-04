const videosBox = document.querySelector(".videos-box");
let i = 0;

const key = "AIzaSyCZ2emG-XPu1zm0Hfw8F9O_Wvy6Ln4HZ3M";
const ednaldo_ID = "UCLzb8VJaApoEZ6Bbmmq-oEA";

const request_url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${ednaldo_ID}&part=snippet,id&order=date&maxResults=50`;

showVideo();
updateVideos();

async function updateVideos(){

    setInterval(() => {
        if (scrollY > (document.body.offsetHeight / 100) * 70){
            showVideo();
        }
    }, 1000);

}

function showVideo(){

    try{
        fetch(request_url)
            .then(response => response.json())
            .then(data => {
                for (let counter = 0; counter < 4; i++, counter++){
                    const videoDiv = document.createElement("div");
                    const videoTitle = document.createElement("h2");
                    const videoDate = document.createElement("p");
                    const videoViewDiv = document.createElement("div");
                    const video = document.createElement("iframe");
                    let ano = data.items[i].snippet.publishedAt.slice(0,4);
                    let mes = data.items[i].snippet.publishedAt.slice(5,7);
                    let dia = data.items[i].snippet.publishedAt.slice(8,10);

                    videoTitle.textContent = data.items[i].snippet.title;
                    videoDate.textContent = dia + "/" + mes + "/" + ano;
                    video.src = `https://www.youtube.com/embed/${data.items[i].id.videoId}`;

                    videoDiv.classList.add("w-full");

                    videoTitle.className = "font-bold text-3xl";
                    videoDiv.appendChild(videoTitle);

                    videoDiv.appendChild(videoDate);

                    videoViewDiv.classList.className = "w-auto mt-8 flex justify-center text-center";
                    video.classList.add("video");
                    videoViewDiv.appendChild(video);

                    videoViewDiv.className = "w-auto mt-8 flex justify-center text-center mb-20";
                    videoDiv.appendChild(videoViewDiv);

                    videosBox.appendChild(videoDiv);
                }
        });
    }
    catch(err){
        alert("Ocorreu um problema na conexão com a API do YouTube, tente novamente mais tarde.");
    }

}
// Fazer mais funções
// Juntar classes em classes melhores