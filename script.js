document.addEventListener('DOMContentLoaded', () => {
    // Dynamic background effect
    const updateBlobs = () => {
        const blobs = document.querySelectorAll('.blob');
        let angle = 0;
        
        setInterval(() => {
            angle = (angle + 0.5) % 360;
            blobs.forEach((blob, index) => {
                const x = Math.sin(angle * Math.PI / 180 + index * 120) * 50;
                const y = Math.cos(angle * Math.PI / 180 + index * 120) * 50;
                blob.style.transform = `translate(${x}px, ${y}px)`;
            });
        }, 50);
    };

    // Phone number protection
    const phoneElements = document.querySelectorAll('[data-phone]');
    phoneElements.forEach(element => {
        element.textContent = element.textContent.replace(/(\d{3})(\d{4})(\d{3})/, '$1 $2 $3');
    });

    updateBlobs();
});
