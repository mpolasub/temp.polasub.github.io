const submit = document.getElementById('submit');
const password = document.getElementById('password');

function check(val) {
    if (val==51522) {
        location.replace('https://rfmpnotes.000webhostapp.com/home.php')    
    }
}
submit.addEventListener('click', () => {
    check(password.value)
})