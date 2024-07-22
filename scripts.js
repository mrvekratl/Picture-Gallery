
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            const modal = new bootstrap.Modal(document.getElementById(this.dataset.bsTarget.slice(1)));
            modal.show();
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);

    cards.forEach(card => {
        card.addEventListener('mouseover', function (e) {
            tooltip.textContent = this.dataset.info;
            tooltip.style.opacity = 1;
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        card.addEventListener('mousemove', function (e) {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        card.addEventListener('mouseout', function () {
            tooltip.style.opacity = 0;
        });
    });
});

