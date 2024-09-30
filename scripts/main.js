document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var isSuccess = true; 
    var notification = document.getElementById('notification');
    var notificationIcon = document.getElementById('notification-icon');
    var notificationMessage = document.getElementById('notification-message');

    if (isSuccess) {
        notificationIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        notificationMessage.innerHTML = 'Message sent successfully!';
        notification.style.backgroundColor = '#ffffff';
    } else {
        notificationIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        notificationMessage.innerHTML = 'Failed to send the message.';
        notification.style.backgroundColor = '#ffffff';
    }

    notification.classList.add('show');

    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
});