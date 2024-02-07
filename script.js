
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divum = document.getElementById("um");
        divum.innerHTML = responseJSON[0].nome;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divum = document.getElementById("dos");
        divum.innerHTML = responseJSON[0].data;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divum = document.getElementById("tres");
        divum.innerHTML = responseJSON[0].descricao;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divum = document.getElementById("qua");
        divum.innerHTML = responseJSON[0].preco;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divum = document.getElementById("qui");
        divum.innerHTML = responseJSON[0].local;
        console.log(responseJSON);
    });

/*-------------------------------------------*/

fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divumm = document.getElementById("umm");
        divumm.innerHTML = responseJSON[1].nome;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divumm = document.getElementById("doss");
        divumm.innerHTML = responseJSON[1].data;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divumm = document.getElementById("tress");
        divumm.innerHTML = responseJSON[1].descricao;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divumm = document.getElementById("quaa");
        divumm.innerHTML = responseJSON[1].preco;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divumm = document.getElementById("quii");
        divumm.innerHTML = responseJSON[1].local;
        console.log(responseJSON);
    });

/*-------------------------------------------*/

fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divummm = document.getElementById("ummm");
        divummm.innerHTML = responseJSON[2].nome;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divummm = document.getElementById("dosss");
        divummm.innerHTML = responseJSON[2].data;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divummm = document.getElementById("tresss");
        divummm.innerHTML = responseJSON[2].descricao;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divumm = document.getElementById("quaaa");
        divumm.innerHTML = responseJSON[2].preco;
        console.log(responseJSON);
    });
fetch("https://back-end-tf-web-bay.vercel.app/eventos")
    .then((response) => response.json())
    .then((responseJSON) => {
        const divummm = document.getElementById("quiii");
        divummm.innerHTML = responseJSON[2].local;
        console.log(responseJSON);
    });