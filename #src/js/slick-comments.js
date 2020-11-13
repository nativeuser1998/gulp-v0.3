$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,//Автоматическая адаптивная высота слайда, автоматически подстраивается по высоте под конкретный слайд.
    //! adaptiveHeight- не работает бес свойства align-items: flex-start; для .slick-track 
    slidesToShow: 1,//Кол-во слайдов, которое мы хоти отоброзить за раз.
    slidesToScroll: 1,//Отвечает за колличество слайдеров, которые будут пролистываются за одно нажатие.
    autoplay: false,
    speed: 500, //Скорость пролистования слайдеров
    easing:'', //Отвечает за тип анимации при смене слайдера
    infinite:true , //Отвечает за то, будет ли слайдер бесконечным.
    initialSlide: 0, // Начало слайда
    autoplaySpeed: 800, //Отвечает за верменной переод черз который србатывает autoplay
    pauseOnFocus:true,//Пауза при клике на элемент
    pauseOnHover:true,//Пауза при навидении
    pauseOnDotsHover:true,//Пауза при навидении на точки
    draggable:true,//Своство перелиствания слайда мышкой на PC
    //touch-screen 
    swipe: true,//Своство перелиствания слайда мышкой на touch-screen 
    touchThreshold:10, //Момент срабатывания слайдера при swipe, (чем меньше значение тем больше услий нужно для пролистывания)
    touchMove:true, //Передвегать слайд зажав палец по экрану
    //touch-screen \
    waitForAnimate:false,//Когда, пролистывание слайда реагирует на быстрые клики. Пользователь сам решает сколько быстро перелистывать слайд
    //!centerMode - не работает бес указания полного имени класса:.slick-slide.slick-current.slick-active.slick-center
    centerMode:false, //Главный слайдер выстраивается по центру, добовляет slick-center
    variableWidth: false,// Дает возможность самому контенту в слайде определять ширину.(c centerMode хорошая комбинация)
    rows:1,//Сколько рядов у слайдера
    slidesPerRow: 1, //кол-во слайдеров в ряду
    vertical:false,// Вериткальный слайдер(убрать флексы .slider .slick-track)
    verticalSwiping:false,//позволят для вертикального слайдера изменить touch Swiping
    fade:false,//демонстрация вместо перелистывания (используется, когда отображается одна картинка,)Слайдшоу,плавный переход.
    // asNavFor:'.sliderbig',//Связывает слайдеры(указать класс)

    responsive: [//Позволяет заменять свойства слайдера при указанном расширении
      {
        breakpoint: 768,//Разрешение при котором мы будем изменять настройки
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    mobileFirst:false,// меняет при вычеслении breakpoint значение max-width на min-width
   




  }); //\".slider"
  // Второй слайдер
  $('.sliderbig').slick({
    // asNavFor:'.slider',
    speed: 500,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    appendArrows:$('.arrowfobig'),
    appendDots:$('.arrowfobig'),//Перемешает элементы управления в указанное место
  });
      // События до смены слайда: позволяют отслеживать какой у нас сечас слайд
      $('.sliderbig').on('beforeChange', function (event,slick, currentSlide, nextSlide) {
      console.log(currentSlide);
    })
      $('.sliderbig').on('afterChange', function (event,slick, currentSlide) {
      console.log(currentSlide);
    })
    $('.sliderbig').slick('slickSetOption');//высчитывает размеры слайдера в зависимости от контейнера, "встряхивает" слайдер, и он отображается нормально
    // Управление слайдером из других событий, прыжиок на тот слайдер какой нам нужен.
    $('.sliderbig').slick('slickGoTo',2) //перелистывает на тот слайдер число которого указано,(можно привязать к кнопке и т.д)
    // $('.link').slick(function (event) {
      
    // })
    // slickPrev,slickNext- функции стрелок, перелистывания

});
