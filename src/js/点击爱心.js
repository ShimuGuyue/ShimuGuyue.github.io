document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', function (e) {
        const heartCount = getRandomHeartCount();
        for (let i = 0; i < heartCount; i++) {
            createHeart(e.clientX, e.clientY, getRandomOffset(), getRandomOffset());
        }
    });

    function createHeart(x, y, offsetX, offsetY) {
        const heart = document.createElement('div');
        heart.className = '点击爱心';
        heart.style.left = `${x + offsetX}px`;
        heart.style.top = `${y + offsetY}px`;
        heart.style.backgroundColor = getRandomColor(); // 设置随机颜色

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }

    function getRandomOffset() {
        return Math.floor(Math.random() * 30) - 15; // 随机偏移量在 -10 到 10 之间
    }

    function getRandomColor() {
        const colors = [
            '#FF0000', '#FF6666', '#FF9999', // 红色及其派生颜色
            '#00FF00', '#66FF66', '#99FF99', // 绿色及其派生颜色
            '#0000FF', '#6666FF', '#9999FF', // 蓝色及其派生颜色
            '#FFFF00', '#FFFF66', '#FFFF99', // 黄色及其派生颜色
            '#FF00FF', '#FF66FF', '#FF99FF'  // 粉色及其派生颜色
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomHeartCount() {
        return Math.floor(Math.random() * 11) + 2; // 随机生成1到5之间的整数
    }
});