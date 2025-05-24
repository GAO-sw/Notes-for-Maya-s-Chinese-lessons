document.addEventListener('DOMContentLoaded', () => {
    const tocList = document.getElementById('toc-list');
    const categories = document.querySelectorAll('.vocab-category');

    // --- Populate Table of Contents ---
    categories.forEach(category => {
        const categoryTitle = category.querySelector('h2').textContent;
        const categoryId = category.id;

        const categoryLi = document.createElement('li');
        const categoryLink = document.createElement('a');
        categoryLink.textContent = categoryTitle;
        categoryLink.href = `#${categoryId}`;
        categoryLi.appendChild(categoryLink);

        const subcategories = category.querySelectorAll('.vocab-subcategory');
        if (subcategories.length > 0) {
            const subcategoryUl = document.createElement('ul');
            subcategoryUl.classList.add('toc-subcategory-list');
            subcategories.forEach(subcategory => {
                const subcategoryTitle = subcategory.querySelector('h3').textContent;
                const subcategoryId = subcategory.id;
                const subcategoryLi = document.createElement('li');
                const subcategoryLink = document.createElement('a');
                subcategoryLink.textContent = subcategoryTitle;
                subcategoryLink.href = `#${subcategoryId}`;
                subcategoryLi.appendChild(subcategoryLink);
                subcategoryUl.appendChild(subcategoryLi);
            });
            categoryLi.appendChild(subcategoryUl);
        }
        tocList.appendChild(categoryLi);
    });

    // Smooth scroll for ToC links
    document.querySelectorAll('#toc-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // 'start' aligns the top of the target with the top of the visible area
                });
            }
        });
    });


    // --- Vocabulary Item Click Logic ---
    const vocabItems = document.querySelectorAll('.vocab-item');

    vocabItems.forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.vocab-details');
            if (details) {
                if (details.style.display === 'none' || details.style.display === '') {
                    details.style.display = 'block';
                } else {
                    details.style.display = 'none';
                }
            }
        });
    });
});
