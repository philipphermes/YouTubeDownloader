function download() {
    let output = document.getElementById('loader-button');

    let link = document.getElementById('link').value;
    let format = document.getElementById('format').value;

    output.innerHTML = '<iframe sandbox="allow-same-origin allow-scripts allow-downloads" src="https://loader.to/api/button/?url=' + link + '&f=' + format + '"></iframe>';
}