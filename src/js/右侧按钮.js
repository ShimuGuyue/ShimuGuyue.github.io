// 创建按钮元素
const 学习笔记 = document.createElement('button');

// 设置按钮的样式
学习笔记.style.width = '160px'; // 16:9比例
学习笔记.style.height = '90px'; // 16:9比例
学习笔记.style.backgroundImage = 'url("src/images/按钮_学习笔记.jpg")';
学习笔记.style.backgroundSize = 'cover';
学习笔记.style.border = '4px solid #ccc'; // 添加边框
学习笔记.style.borderImage = 'linear-gradient(to right, pink, yellow) 1'; // 设置渐变边框
学习笔记.style.cursor = 'pointer';
学习笔记.style.position = 'fixed';
学习笔记.style.right = '50px';
学习笔记.style.top = '100px'; // 与毛玻璃顶端平行

// 创建文本元素
const 学习笔记text = document.createElement('span');
学习笔记text.innerText = '学习笔记';
学习笔记text.style.color = '#dark'; // 设置文字颜色
学习笔记text.style.fontSize = '32px'; // 设置文字大小
学习笔记text.style.fontFamily = '楷体'; // 设置文字字体
学习笔记text.style.fontWeight = 'bold'; // 设置文字粗细
学习笔记text.style.textAlign = 'center'; // 设置文字居中
学习笔记text.style.lineHeight = '90px'; // 设置行高，使文字垂直居中
学习笔记text.style.paddingTop = '20px';
学习笔记text.style.opacity = '0'; // 隐藏文字
学习笔记text.style.transition = 'opacity 0.3s'; // 添加过渡效果
// 鼠标悬停时显示文字
学习笔记.addEventListener('mouseover', () =>
{
    学习笔记text.style.opacity = '1';
});
学习笔记.addEventListener('mouseout', () =>
{
    学习笔记text.style.opacity = '0';
});
// 将文本添加到按钮中
学习笔记.appendChild(学习笔记text);

// 将按钮添加到DOM中
document.body.appendChild(学习笔记);

// 点击按钮时，在按钮下方显示另一个按钮
学习笔记.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    const 算法 = document.createElement('button');
    算法.style.width = '160px'; // 16:9比例
    算法.style.height = '90px'; // 16:9比例
    算法.style.backgroundImage = 'url("src/images/按钮_学习笔记_算法.jpg")';
    算法.style.backgroundSize = 'cover';
    算法.style.border = '4px solid #ccc'; // 添加边框
    算法.style.borderImage = 'linear-gradient(to right, pink, yellow) 1'; // 设置渐变边框
    算法.style.cursor = 'pointer';
    算法.style.position = 'fixed';
    算法.style.right = '50px';
    算法.style.top = '186px'; // 设置新按钮的位置在原按钮下方

    // 添加按钮文字
    const 算法text = document.createElement('span');
    算法text.innerText = '算法';
    算法text.style.color = '#dark'; // 设置文字颜色
    算法text.style.fontSize = '32px'; // 设置文字大小
    算法text.style.fontFamily = '楷体'; // 设置文字字体
    算法text.style.fontWeight = 'bold'; // 设置文字粗细
    算法text.style.textAlign = 'center'; // 设置文字居中
    算法text.style.lineHeight = '90px'; // 设置行高，使文字垂直居中
    算法text.style.paddingTop = '20px';
    算法text.style.opacity = '0'; // 隐藏文字
    算法text.style.transition = 'opacity 0.3s'; // 添加过渡效果 
    // 鼠标悬停时显示文字
    算法.addEventListener('mouseover', () => {
        算法text.style.opacity = '1';
    });
    算法.addEventListener('mouseout', () => {
        算法text.style.opacity = '0';
    });
    // 将文本添加到按钮中
    算法.appendChild(算法text)

    // 将按钮添加到DOM中
    document.body.appendChild(算法);

    // 点击外部时关闭新按钮
    document.addEventListener('click', function handleClickOutside(event) {
        if (!算法.contains(event.target)) {
            算法.remove();
            document.removeEventListener('click', handleClickOutside);
        }
    });
});