$(document).ready(function() {
    const $form = $('#myForm');
    const $submitBtn = $('#submitBtn');
    const $btnText = $submitBtn.find('.btn-text');
    const $spinner = $submitBtn.find('.spinner');
    const $statusMessage = $('#statusMessage');
    $form.on('submit', function(e) {
        e.preventDefault(); 
        $btnText.text('Подождите...');
        $spinner.show();
        $submitBtn.prop('disabled', true);
        $statusMessage.hide();
        setTimeout(function() {
            $btnText.text('Отправить');
            $spinner.hide();
            $submitBtn.prop('disabled', false);
            $statusMessage.text('Успешно отправлено!').fadeIn();
            $form[0].reset(); 
            
        }, 2000);
    });
});