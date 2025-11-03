function setupLinkHandler(linkId) {
    document.getElementById(linkId).addEventListener('click', function(e) {
        const allLinks = document.querySelectorAll('[id^="pg"]');

        allLinks.forEach(link => {
            if (link !== this) {
                link.style.color = 'black';
                link.classList.remove('active');
            }
        });

        this.style.color = 'green';
        this.classList.add('active');

        localStorage.setItem('activeNavLink', this.id);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const activeLinkId = localStorage.getItem('activeNavLink');
    if (activeLinkId) {
        const activeLink = document.getElementById(activeLinkId);
        if (activeLink) {
            activeLink.style.color = 'green';
            activeLink.classList.add('active');
        }
    }
});

setupLinkHandler('pg1');
setupLinkHandler('pg2');
setupLinkHandler('pg3');
setupLinkHandler('pg4');
setupLinkHandler('pg5');