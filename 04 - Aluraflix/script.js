var listaFilmes =
    ["https://br.web.img3.acsta.net/c_310_420/pictures/14/06/20/23/27/478475.jp", "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/15/10/18/18/39/408904.jpg", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/88/04/20282944.jpg"]

for (var i= 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}