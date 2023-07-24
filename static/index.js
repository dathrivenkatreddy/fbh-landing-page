// Simulate loading
window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    var comingSoonPage = document.querySelector('.coming-soon-page');
  
    setTimeout(function() {
        loadingScreen.classList.add('fade-out');
        comingSoonPage.classList.add('show');
    }, 1000);
});