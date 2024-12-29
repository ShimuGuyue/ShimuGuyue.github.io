/*  “头像”按钮  */
const 头像 = document.createElement('button');
头像.id = '头像';
Object.assign(头像.style, 
{
    width: '150px',
    height: '150px',
    backgroundImage: 'url("src/images/头像.jpg")',
    backgroundSize: 'cover',
    border: 'none',
    position: 'fixed',
    top: '10px',
    left: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    position: 'relative'
});
// 添加文本
头像.文本 = document.createElement('span');
头像.文本.innerText = '主页'; // 设置文本内容
Object.assign(头像.文本.style, 
{
    color: '#dark', // 设置文本颜色
    fontSize: '32px', // 设置文本大小
    fontFamily: '楷体', // 设置文本字体
    fontWeight: 'bold', // 设置文本粗细
    paddingTop: '20px', // 设置上内边距
    opacity: '0', // 隐藏文字
});
// 鼠标悬停时显示文字
头像.addEventListener('mouseover', () =>
{
    头像.文本.style.opacity = '1';
});
头像.addEventListener('mouseout', () =>
{
    头像.文本.style.opacity = '0';
});
// 添加点击事件，设置超链接
头像.addEventListener('click', function ()
{
    window.location.href = 'index.html';
});
// 将文本添加到按钮中
头像.appendChild(头像.文本);
// 将按钮添加到文档中
document.body.appendChild(头像);



/*  “学习笔记”按钮  */
const 学习笔记 = document.createElement('button');
学习笔记.id = '学习笔记';
Object.assign(学习笔记.style, 
{
    width: '160px', // 设置按钮宽度
    height: '90px', // 设置按钮高度
    backgroundImage: 'url("src/images/按钮_学习笔记.jpg")', // 设置按钮背景图片
    backgroundSize: 'cover', // 设置背景图片覆盖整个按钮
    border: '4px solid', // 添加实线边框，设置宽度
    borderImage: 'linear-gradient(to right, pink, yellow) 1', // 设置渐变边框
    cursor: 'pointer', // 设置鼠标悬停时显示为指针
    position: 'fixed', // 设置按钮位置为固定定位
    right: '50px', // 设置按钮距离右边距离
    top: '100px' // 设置按钮距离顶部距离
});
// 添加文本
学习笔记.文本 = document.createElement('span');
学习笔记.文本.innerText = '学习笔记'; // 设置文本内容
Object.assign(学习笔记.文本.style, 
{
    color: '#dark', // 设置文字颜色
    fontSize: '32px', // 设置文字大小
    fontFamily: '楷体', // 设置文字字体
    fontWeight: 'bold', // 设置文字粗细
    paddingTop: '20px', // 设置上内边距
    opacity: '0' // 隐藏文字
});
// 鼠标悬停时显示文字
学习笔记.addEventListener('mouseover', () =>
{
    学习笔记.文本.style.opacity = '1';
});
学习笔记.addEventListener('mouseout', () =>
{
    学习笔记.文本.style.opacity = '0';
});
// 添加点击事件，设置超链接
学习笔记.addEventListener('click', () => 
{
    window.open('src/html/学习笔记.html', '_blank');
});
// 将文本添加到按钮中
学习笔记.appendChild(学习笔记.文本);
// 将按钮添加到页面中
document.body.appendChild(学习笔记);



/*  “收藏夹”按钮  */
const 收藏夹 = document.createElement('button');
收藏夹.id = '收藏夹';
Object.assign(收藏夹.style, 
{
    width: '160px',
    height: '90px',
    backgroundImage: 'url("src/images/按钮_收藏夹.jpg")', 
    backgroundSize: 'cover',
    border: '4px solid',
    borderImage: 'linear-gradient(to right, pink, yellow) 1',
    cursor: 'pointer',
    position: 'fixed', 
    right: '50px',
    top: `${学习笔记.getBoundingClientRect().bottom + 10}px`
});
// 添加文本
收藏夹.文本 = document.createElement('span');
收藏夹.文本.innerText = '收藏夹'; 
Object.assign(收藏夹.文本.style, 
{
    color: '#dark',
    fontSize: '32px',
    fontFamily: '楷体', 
    fontWeight: 'bold',
    paddingTop: '20px', 
    opacity: '0'
});
// 鼠标悬停时显示文字
收藏夹.addEventListener('mouseover', () =>
{
    收藏夹.文本.style.opacity = '1';
});
收藏夹.addEventListener('mouseout', () =>
{
    收藏夹.文本.style.opacity = '0';
});
// 添加点击事件，设置超链接
收藏夹.addEventListener('click', () => {
    window.open('src/html/收藏夹.html', '_blank');
});
// 将文本添加到按钮中
收藏夹.appendChild(收藏夹.文本);
// 将按钮添加到页面中
document.body.appendChild(收藏夹);