$(document).ready(function() {
    // 1. Выбираем форму и кнопку по их ID
    const $form = $('#myForm');
    const $submitBtn = $('#submitBtn');
    const $btnText = $submitBtn.find('.btn-text'); // Текст "Отправить"
    const $spinner = $submitBtn.find('.spinner'); // Элемент спиннера
    const $statusMessage = $('#statusMessage'); // Сообщение о статусе

    // 2. Привязываем функцию к событию отправки формы (submit)
    $form.on('submit', function(e) {
        // Предотвращаем стандартное поведение формы (перезагрузку страницы)
        e.preventDefault(); 
        
        // --- ШАГ 1: Включение режима загрузки ---
        
        // 1. Изменяем текст и показываем спиннер
        $btnText.text('Подождите...');
        $spinner.show();
        
        // 2. Отключаем кнопку, чтобы предотвратить повторные клики
        $submitBtn.prop('disabled', true);
        
        // 3. Скрываем предыдущие сообщения о статусе
        $statusMessage.hide();

        // --- ШАГ 2: Имитация серверного вызова ---
        
        // Используем setTimeout для имитации сетевой задержки (например, 2 секунды)
        setTimeout(function() {
            
            // --- ШАГ 3: Возвращение к нормальному состоянию ---
            
            // 1. Возвращаем текст и скрываем спиннер
            $btnText.text('Отправить');
            $spinner.hide();
            
            // 2. Включаем кнопку обратно
            $submitBtn.prop('disabled', false);

            // 3. Выводим сообщение об успехе (для демонстрации)
            $statusMessage.text('Успешно отправлено!').fadeIn();
            
            // Дополнительно: Очистка формы (по желанию)
            $form[0].reset(); 
            
        }, 2000); // 2000 миллисекунд = 2 секунды задержки
    });
});