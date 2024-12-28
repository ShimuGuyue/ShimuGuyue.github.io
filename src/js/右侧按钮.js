const 按钮s0 = [];

/*  “学习笔记”按钮  */
const 学习笔记 = document.createElement('button');
document.body.appendChild(学习笔记);
按钮s0.push(学习笔记);
学习笔记.id = '学习笔记';
学习笔记.index = 0; // 设置按钮索引;
// 设置按钮的样式
学习笔记.style.width = '160px'; // 设置按钮宽度
学习笔记.style.height = '90px'; // 设置按钮高度
学习笔记.style.backgroundImage = 'url("src/images/按钮_学习笔记.jpg")'; // 设置按钮背景图片
学习笔记.style.backgroundSize = 'cover'; // 设置背景图片覆盖整个按钮
学习笔记.style.border = '4px solid'; // 添加实线边框，设置宽度
学习笔记.style.borderImage = 'linear-gradient(to right, pink, yellow) 1'; // 设置渐变边框
学习笔记.style.cursor = 'pointer'; // 设置鼠标悬停时显示为指针
学习笔记.style.position = 'fixed'; // 设置按钮位置为固定定位
学习笔记.style.right = '50px'; // 设置按钮距离右边距离
学习笔记.style.top = '100px'; // 设置按钮距离顶部距离
// 添加文本
学习笔记.文本 = document.createElement('span');
学习笔记.appendChild(学习笔记.文本);
学习笔记.文本.innerText = '学习笔记'; // 设置文本内容
学习笔记.文本.style.color = '#dark'; // 设置文字颜色
学习笔记.文本.style.fontSize = '32px'; // 设置文字大小
学习笔记.文本.style.fontFamily = '楷体'; // 设置文字字体
学习笔记.文本.style.fontWeight = 'bold'; // 设置文字粗细
学习笔记.文本.style.paddingTop = '20px'; // 设置上内边距
学习笔记.文本.style.opacity = '0'; // 隐藏文字
// 鼠标悬停时显示文字
学习笔记.addEventListener('mouseover', () =>
{
    学习笔记.文本.style.opacity = '1';
});
学习笔记.addEventListener('mouseout', () =>
{
    学习笔记.文本.style.opacity = '0';
});
// 创建子按钮数组
学习笔记.按钮s1 = [];
// 点击按钮时，在按钮下方显示子按钮
学习笔记.addEventListener('click', (event) =>
{
    event.stopPropagation(); // 阻止事件冒泡

    /*  “编程语言”按钮  */
    const 编程语言 = document.createElement('button');
    document.body.appendChild(编程语言);
    学习笔记.appendChild(编程语言);
    学习笔记.按钮s1.push(编程语言);
    编程语言.id = '编程语言';
    编程语言.index = 0;
    // 设置按钮的样式
    编程语言.style.width = '152px';
    编程语言.style.height = '85.5px';
    编程语言.style.backgroundImage = 'url("src/images/按钮_学习笔记_编程语言.jpg")';
    编程语言.style.backgroundSize = 'cover';
    编程语言.style.border = '4px solid #ccc';
    编程语言.style.borderImage = 'linear-gradient(to right, yellow, pink, yellow, pink) 1'; // 设置渐变边框
    编程语言.style.cursor = 'pointer';
    编程语言.style.position = 'fixed';
    编程语言.style.right = '50px';
    const 学习笔记Rect = 学习笔记.getBoundingClientRect();
    编程语言.style.top = `${学习笔记Rect.bottom - 4}px`;
    // 添加文本
    编程语言.文本 = document.createElement('span');
    编程语言.appendChild(编程语言.文本);
    编程语言.文本.innerText = '编程语言'; 
    编程语言.文本.style.color = '#dark'; 
    编程语言.文本.style.fontSize = '32px';
    编程语言.文本.style.fontFamily = '楷体';
    编程语言.文本.style.fontWeight = 'bold';
    编程语言.文本.style.paddingTop = '20px';
    编程语言.文本.style.opacity = '0';
    // 鼠标悬停时显示文字
    编程语言.addEventListener('mouseover', () =>
    {
        编程语言.文本.style.opacity = '1';
    });
    编程语言.addEventListener('mouseout', () =>
    {
        编程语言.文本.style.opacity = '0';
    });

    /*  “算法”按钮  */
    const 算法 = document.createElement('button');
    document.body.appendChild(算法);
    学习笔记.appendChild(算法);
    学习笔记.按钮s1.push(算法);
    算法.id = '算法';
    算法.index = 编程语言.index + 1;
    // 设置按钮的样式
    算法.style.width = '152px';
    算法.style.height = '85.5px';
    算法.style.backgroundImage = 'url("src/images/按钮_学习笔记_算法.jpg")';
    算法.style.backgroundSize = 'cover';
    算法.style.border = '4px solid #ccc';
    算法.style.borderImage = 'linear-gradient(to right, yellow, pink, yellow, pink) 1'; // 设置渐变边框
    算法.style.cursor = 'pointer';
    算法.style.position = 'fixed';
    算法.style.right = '50px';
    const 编程语言Rect = 编程语言.getBoundingClientRect();
    算法.style.top = `${编程语言Rect.bottom - 4}px`; 
    // 添加文本
    算法.文本 = document.createElement('span');
    算法.appendChild(算法.文本);
    算法.文本.innerText = '算法'; 
    算法.文本.style.color = '#dark'; 
    算法.文本.style.fontSize = '32px';
    算法.文本.style.fontFamily = '楷体';
    算法.文本.style.fontWeight = 'bold';
    算法.文本.style.paddingTop = '20px';
    算法.文本.style.opacity = '0';
    // 鼠标悬停时显示文字
    算法.addEventListener('mouseover', () =>
    {
        算法.文本.style.opacity = '1';
    });
    算法.addEventListener('mouseout', () =>
    {
        算法.文本.style.opacity = '0';
    });

    // 展开时移动同级按钮的位置
    const len = 学习笔记.按钮s1.length;
    const 学习笔记finalRect = 学习笔记.按钮s1[len - 1].getBoundingClientRect();
    按钮s0[学习笔记.index + 1].style.top = `${学习笔记finalRect.bottom - 4}px`;
    for (let i = 学习笔记.index + 2; i < 按钮s0.length; i++)
    {
        const j = 按钮s0[i].index - 1;
        const lastRect = 按钮s0[j].getBoundingClientRect();
        按钮s0[i].style.top = `${lastRect.bottom - 4}px`;
    }
    // 点击按钮外的地方，隐藏子按钮，并恢复同级按钮的位置
    document.addEventListener('click', function handleClickOutside(event)
    {
        if (!编程语言.contains(event.target) && !算法.contains(event.target))
        {
            编程语言.remove();
            算法.remove();
            document.removeEventListener('click', handleClickOutside);
        }

        for (let i = 学习笔记.index + 1; i < 按钮s0.length; i++)
        {
            const j = 按钮s0[i].index - 1;
            const lastRect = 按钮s0[j].getBoundingClientRect();
            按钮s0[i].style.top = `${lastRect.bottom - 4}px`;
        }
    });

});

/**
 *
**/

/*  “收藏夹”按钮  */
const 收藏夹 = document.createElement('button');
document.body.appendChild(收藏夹);
按钮s0.push(收藏夹);
收藏夹.id = '收藏夹';
收藏夹.index = 学习笔记.index + 1;
// 设置按钮的样式
收藏夹.style.width = '160px'; 
收藏夹.style.height = '90px';
收藏夹.style.backgroundImage = 'url("src/images/按钮_收藏夹.jpg")'; 
收藏夹.style.backgroundSize = 'cover'; 
收藏夹.style.border = '4px solid'; 
收藏夹.style.borderImage = 'linear-gradient(to right, pink, yellow) 1'; 
收藏夹.style.cursor = 'pointer'; 
收藏夹.style.position = 'fixed'; 
收藏夹.style.right = '50px'; 
const 学习笔记Rect = 学习笔记.getBoundingClientRect();
收藏夹.style.top = `${学习笔记Rect.bottom - 4}px`; 
// 添加文本
收藏夹.文本 = document.createElement('span');
收藏夹.appendChild(收藏夹.文本);
收藏夹.文本.innerText = '收藏夹';
收藏夹.文本.style.color = '#dark';
收藏夹.文本.style.fontSize = '32px';
收藏夹.文本.style.fontFamily = '楷体';
收藏夹.文本.style.fontWeight = 'bold'; 
收藏夹.文本.style.paddingTop = '20px'; 
收藏夹.文本.style.opacity = '0';
// 鼠标悬停时显示文字
收藏夹.addEventListener('mouseover', () =>
{
    收藏夹.文本.style.opacity = '1';
});
收藏夹.addEventListener('mouseout', () =>
{
    收藏夹.文本.style.opacity = '0';
});

/*  “收藏夹”按钮  */
const 好东西 = document.createElement('button');
document.body.appendChild(好东西);
按钮s0.push(好东西);
好东西.id = '好东西';
好东西.index = 收藏夹.index + 1;
// 设置按钮的样式
好东西.style.width = '160px'; 
好东西.style.height = '90px';
好东西.style.backgroundImage = 'url("src/images/按钮_.jpg")'; 
好东西.style.backgroundSize = 'cover'; 
好东西.style.border = '4px solid'; 
好东西.style.borderImage = 'linear-gradient(to right, pink, yellow) 1'; 
好东西.style.cursor = 'pointer'; 
好东西.style.position = 'fixed'; 
好东西.style.right = '50px'; 
const 收藏夹Rect = 收藏夹.getBoundingClientRect();
好东西.style.top = `${收藏夹Rect.bottom - 4}px`; 
// 添加文本
好东西.文本 = document.createElement('span');
好东西.appendChild(好东西.文本);
好东西.文本.innerText = '好东西';
好东西.文本.style.color = '#dark';
好东西.文本.style.fontSize = '32px';
好东西.文本.style.fontFamily = '楷体';
好东西.文本.style.fontWeight = 'bold'; 
好东西.文本.style.paddingTop = '20px'; 
好东西.文本.style.opacity = '0';
// 鼠标悬停时显示文字
好东西.addEventListener('mouseover', () =>
{
    好东西.文本.style.opacity = '1';
});
好东西.addEventListener('mouseout', () =>
{
    好东西.文本.style.opacity = '0';
});