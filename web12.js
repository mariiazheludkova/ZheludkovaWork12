
    $(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var password = $('#password').val();
        var confirm_password = $('#confirmPassword').val();

        // перевірка, що всі поля заповнені
        if (name.trim() === '') {
            $('#name-error').show();
        } else {
            $('#name-error').hide();
        }
        if (password.trim() === '') {
            $('#password-error').show();
        } else {
            $('#password-error').hide();
        }
        if (confirm_password.trim() === '') {
            $('#confirmPassword-error').show();
        } else {
            $('#confirmPassword-error').hide();
        }

        // перевірка, що паролі збігаються
        if (password !== confirm_password) {
            $('#confirmPassword-error').show();
        } else {
            $('#confirmPassword-error').hide();
        }

        // надсилання форми, якщо всі поля заповнені і паролі збігаються
        if (name.trim() !== '' && password.trim() !== '' && confirm_password.trim() !== '' && password === confirm_password) {
            $('#successMessage').show();
            $('#registerForm').unbind('submit').submit();
        }
    });
});
