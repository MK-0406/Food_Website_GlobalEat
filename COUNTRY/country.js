document.querySelectorAll('.grid-item2').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

document.querySelectorAll('.grid-item1').forEach(item => {
    const cuisineContainers = item.querySelectorAll('.cuisine-container');
    let currentIndex = 0;

    function showContent(index) {
        cuisineContainers.forEach((container, i) => {
            if (i === index) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    item.addEventListener('mouseover', () => {
        showContent(currentIndex);
    });

    item.addEventListener('mouseleave', () => {
        cuisineContainers.forEach(container => container.style.display = 'none');
    });

    const prevArrow = item.querySelector('.prev-arrow');
    const nextArrow = item.querySelector('.next-arrow');

    if (prevArrow) {
        prevArrow.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents event from bubbling up
            currentIndex = (currentIndex - 1 + cuisineContainers.length) % cuisineContainers.length;
            showContent(currentIndex);
        });
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents event from bubbling up
            currentIndex = (currentIndex + 1) % cuisineContainers.length;
            showContent(currentIndex);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown buttons and contents
    var dropdownBtns = document.querySelectorAll('.btn-light');
    var dropdownContents = document.querySelectorAll('.dropdown-menu');

    dropdownBtns.forEach((dropdownBtn, index) => {
        var dropdownContent = dropdownContents[index];

        dropdownBtn.addEventListener('click', function(event) {
            // Toggle dropdown content visibility
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation(); // Prevent click event from bubbling up
        });

        // Hide the dropdown content if clicked outside
        document.addEventListener('click', function(event) {
            if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });

        // Hide the dropdown content when the mouse leaves the dropdown
        dropdownContent.addEventListener('mouseleave', function() {
            dropdownContent.style.display = 'none';
        });

        // Show the dropdown content when the mouse enters
        dropdownContent.addEventListener('mouseenter', function() {
            dropdownContent.style.display = 'block';
        });
    });
});
