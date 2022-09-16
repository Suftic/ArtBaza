function myFunction(imgs) {
    // Получить развернутое изображение
    var expandImg = document.getElementById("expandedImg");
    // Получить текст изображения
    var imgText = document.getElementById("imgtext");
    // Используйте тот же src в развернутом изображении, что и изображение, нажатое на сетке
    expandImg.src = imgs.src;
    // Используйте значение атрибута alt кликабельного изображения в качестве текста внутри развернутого изображения
    imgText.innerHTML = imgs.alt;
    // Показать элемент контейнера (скрытый с помощью CSS)
    expandImg.parentElement.style.display = "block";
}