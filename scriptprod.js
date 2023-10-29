window.onscroll = function() {
    if(window.scrollY < 10){
        const element = document.querySelector('header');
        element.style.backgroundColor = 'transparent';
        document.documentElement.style.setProperty('--header-height', '12vh');
        document.documentElement.style.setProperty('--logo-height', '8vh');
        document.documentElement.style.setProperty('--font-size-header', '40px');
        document.documentElement.style.setProperty('--show-button-border', '#FFFFFF');
        document.documentElement.style.setProperty('--button-margin', '1.5rem');
    } else {
        const element = document.querySelector('header');
        element.style.backgroundColor = 'var(--darkmode-secondary)';
        document.documentElement.style.setProperty('--header-height', '8vh');
        document.documentElement.style.setProperty('--logo-height', '6vh');
        document.documentElement.style.setProperty('--font-size-header', '30px');
        document.documentElement.style.setProperty('--show-button-border', 'transparent');
        document.documentElement.style.setProperty('--button-margin', '1rem');
    }
}