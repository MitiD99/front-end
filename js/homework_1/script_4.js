let password = prompt('Enter your password:');
switch (password) {
    case 'pass123':
        console.log('Correct password');
        break;
    case 'admin':
        console.log('You are logged in as <admin>');
        break;
    default:
        console.error('Try again');
        break;
}