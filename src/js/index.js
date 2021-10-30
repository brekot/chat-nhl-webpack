$(function(){
 
    $('.js-chat-toggle-window').on('click', function(){

        $('.chat-bot-window').toggleClass('chat-bot-window_open');

        $('.chat-bot-btn').toggleClass('chat-bot-btn_open');

        $('.chat-bot-window_big').removeClass('chat-bot-window_big');
    });

    $('.js-chat-toggle-tab').on('click', function(){

        $('.chat-bot-body_active').removeClass('chat-bot-body_active');

        $('#' + $(this).data('tab')).addClass('chat-bot-body_active');

        $('.chat-bot-head__link_active').removeClass('chat-bot-head__link_active');

        $(this).addClass('chat-bot-head__link_active');
    });

    $('.js-chat-toggle-zoom').on('click', function(){

        $('.chat-bot-window').toggleClass('chat-bot-window_big');
    });
});