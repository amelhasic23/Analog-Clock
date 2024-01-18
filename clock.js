const canvas = document.getElementById('clock');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function drawClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    context.clearRect(0, 0, canvas.width, canvas.height);

   
    const hourAngle = (hours + minutes / 60) * 360 / 12;
    context.save();
    context.translate(centerX, centerY);
    context.rotate((hourAngle - 90) * (Math.PI / 180));
    context.fillStyle = 'black';
    context.fillRect(-4, -50, 8, 50);
    context.restore();

    const minuteAngle = (minutes + seconds / 60) * 360 / 60;
    context.save();
    context.translate(centerX, centerY);
    context.rotate((minuteAngle - 90) * (Math.PI / 180));
    context.fillStyle = 'blue';
    context.fillRect(-3, -70, 6, 70);
    context.restore();

    const secondAngle = seconds * 360 / 60;
    context.save();
    context.translate(centerX, centerY);
    context.rotate((secondAngle - 90) * (Math.PI / 180));
    context.fillStyle = 'red';
    context.fillRect(-2, -80, 4, 80);
    context.restore();

   
    context.font = '24px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI / 6);
        const x = centerX + Math.cos(angle) * 100;
        const y = centerY + Math.sin(angle) * 100;
        context.fillText(i.toString(), x, y);
    }

    
    requestAnimationFrame(drawClock);
}


drawClock();
