// При выводе элемента на экран меняет его стиль по классу
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        //Делаем анимацию постоянной при скроле вверх и вниз
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Для каждого елемента .hidden используем функцию observer
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Замедление скрола
SmoothScroll({
    // Время скролла 300 = 0.3 секунды
    animationTime: 300,
    // Размер шага в пикселях 
    stepSize: 20,

    // Доп. настройки:
    // Ускорение 
    accelerationDelta: 0,  
    // Максимальное ускорение
    accelerationMax: 2,   
    // Поддержка клавиатуры
    keyboardSupport: true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 150,
    // Пульс (менее настраиваемый)
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    // Поддержка тачпада
    touchpadSupport: true,
});