let menu = document.querySelector('.btn-menu');
menu.onclick = function(){
    menu.classList.toggle("ativo");
}

$("#search").focusin(function () {
    $("#Modal").show();
});

$("#close").click(function () {
    $("#Modal").hide();
});

$(".notificacao").click(function () {
    $("#Modal").show();
});

$("#fechar").click(function () {
    $("#Modal").hide();
});