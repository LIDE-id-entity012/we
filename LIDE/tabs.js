document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const categories = document.querySelectorAll('.package-category');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // 2. Add active class to the clicked tab
            tab.classList.add('active');

            // 3. Hide all content sections
            categories.forEach(cat => cat.style.display = 'none');

            // 4. Show the specific content section that matches the button
            const targetCategory = tab.getAttribute('data-category');
            const contentToShow = document.querySelector(`.package-category[data-category="${targetCategory}"]`);
            
            if (contentToShow) {
                contentToShow.style.display = 'block';
            }
        });
    });
});