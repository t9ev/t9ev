function showContent(id) {
document.querySelectorAll('.content').forEach(el => {
    el.classList.remove('active');
});
document.getElementById(id).classList.add('active');
}