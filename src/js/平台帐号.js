document.addEventListener('DOMContentLoaded', () =>
{
    fetch('src/data/平台帐号.json')
        .then(response => response.json())
        .then(data =>
        {
            const accountInfoDiv = document.querySelector('.左侧文本');

            // 输出“算法学习”标题
            const h2Algorithm = document.createElement('h2');
            h2Algorithm.textContent = '算法学习';
            h2Algorithm.style.fontSize = '22px'; // 设置字体大小
            h2Algorithm.style.fontFamily = '楷体'; // 设置字体类型
            accountInfoDiv.appendChild(h2Algorithm);

            // 输出“算法学习”内容
            data.算法学习.forEach(account =>
            {
                const p = document.createElement('p');
                p.innerHTML = `${account.平台}： <a href="${account.网址}" target="_blank" style="color: pink; text-decoration: none;">${account.用户名}</a>`;
                p.style.fontSize = '19px'; // 设置字体大小
                p.style.fontFamily = '仿宋'; // 设置中文字体为楷体，英文字体为仿宋
                accountInfoDiv.appendChild(p);
            });

            // 输出“社交媒体”标题
            const h2SocialMedia = document.createElement('h2');
            h2SocialMedia.textContent = '社交媒体';
            h2SocialMedia.style.fontSize = '22px'; // 设置字体大小
            h2SocialMedia.style.fontFamily = '楷体'; // 设置字体类型
            accountInfoDiv.appendChild(h2SocialMedia);

            // 输出“社交媒体”内容
            data.社交媒体.forEach(account =>
            {
                const p = document.createElement('p');
                p.innerHTML = `${account.平台}： <a href="${account.网址}" target="_blank" style="color: pink; text-decoration: none;">${account.用户名}</a>`;
                p.style.fontSize = '19px'; // 设置字体大小
                p.style.fontFamily = '仿宋'; // 设置中文字体为楷体，英文字体为仿宋
                accountInfoDiv.appendChild(p);
            });
        })
        .catch(error => console.error('Error fetching account info:', error));
});