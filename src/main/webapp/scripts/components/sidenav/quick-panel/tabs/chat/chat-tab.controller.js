(function ()
{
    'use strict';

    angular
        .module('app.quick-panel')
        .controller('ChatTabController', ChatTabController);

    /** @ngInject */
    function ChatTabController(api, $timeout)
    {
        var vm = this;
        vm.chat = {};
        vm.toggleChat = toggleChat;
        vm.chatActive = false;
        vm.replyMessage = '';
        vm.reply = reply;

        // Data
        api.contacts.get({}, function (response)
        {
            vm.contacts = response.data;
        });

        // Methods
        function toggleChat(contact)
        {
            vm.chatActive = !vm.chatActive;

            if ( vm.chatActive )
            {
                vm.replyMessage = '';
                vm.chat.contact = contact;
                scrollToBottomOfChat(0);
            }
        }

        function reply()
        {
            if ( vm.replyMessage === '' )
            {
                return;
            }

            if ( !vm.chat.contact.dialog )
            {
                vm.chat.contact.dialog = [];
            }

            vm.chat.contact.dialog.push({
                who    : 'user',
                message: vm.replyMessage,
                time   : 'Just now'
            });

            vm.replyMessage = '';

            scrollToBottomOfChat(400);
        }

        function scrollToBottomOfChat(speed)
        {
            var chatDialog = document.getElementById('chat-dialog');

            $timeout(function ()
            {
                $(chatDialog).animate({
                    scrollTop: chatDialog.scrollHeight
                }, speed);
            }, 0);

        }

        //////////
    }

})();


