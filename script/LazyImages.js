$(document).ready(function() {
    let $lazyImages = $('.lazy');
    const $window = $(window);
    const buffer = 200; // Загружаем за 200px до появления

    function lazyLoad() {
        const viewportHeight = $window.height();
        const scrollTop = $window.scrollTop();
        const checkLine = scrollTop + viewportHeight + buffer;

        $lazyImages = $lazyImages.filter(function() {
            const $this = $(this);
            const elementTop = $this.offset().top;

            if (elementTop < checkLine) {
                const realSrc = $this.attr('data-src');
                if (realSrc) {
                    $this.attr('src', realSrc);
                    $this.addClass('loaded');
                }
                return false; // убираем из списка для следующей проверки
            }
            return true; // оставляем для проверки позже
        });

        if ($lazyImages.length === 0) {
            $window.off('scroll', lazyLoad);
            $window.off('resize', lazyLoad);
        }
    }

    $window.on('scroll', lazyLoad);
    $window.on('resize', lazyLoad);
    lazyLoad(); // проверка при первой загрузке страницы
});