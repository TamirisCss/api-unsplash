const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

input.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        loadImg();
    }
});

function loadImg() {
    grid.innerHTML = "";

    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=HRSabFwAcxtISo8kMyvatO_VUTW31l3AcH5RHOunuvU';
    fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        }else {
            alert(response.status)
        }
    })
    .then(data => {

        data.results.forEach(function(result) {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'img';
            imgDiv.style.backgroundImage = `url(${result.urls.small})`;
            imgDiv.addEventListener('click', function(){
                window.open(result.links.download,'_blank');
            })
            grid.appendChild(imgDiv);
        });
    })
}