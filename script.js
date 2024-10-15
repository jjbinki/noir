document.addEventListener('DOMContentLoaded', () => {
    const captureButton = document.querySelector('.capture-button');
    const infoCard = document.querySelector('.info-card');
    const qrCode = document.querySelector('.qr-code');

    captureButton.addEventListener('click', () => {
        qrCode.style.display = 'none';
        
        setTimeout(() => {
            infoCard.style.display = 'block';
            setTimeout(() => {
                infoCard.style.display = 'none';
                qrCode.style.display = 'block';
            }, 3000);
        }, 500);
    });
});