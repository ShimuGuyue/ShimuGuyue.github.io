/*  “头像”按钮  */
const 头像 = document.createElement('button');
头像.id = '头像';
Object.assign(头像.style, 
{
    width: '150px',
    height: '150px',
    backgroundImage: 'url("../images/头像.jpg")',
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
    window.location.href = '../../index.html';
});
// 将文本添加到按钮中
头像.appendChild(头像.文本);
// 将按钮添加到文档中
document.body.appendChild(头像);



/* “上一级”按钮 */
const 上一级 = document.createElement('button');
上一级.id = '上一级';
Object.assign(上一级.style,
{
    width: '160px',
    height: '90px',
    backgroundImage: 'url("../images/按钮_算法.jpg")',
    backgroundSize: 'cover',
    border: '4px solid',
    borderImage: 'linear-gradient(to right, yellow, pink, yellow, pink) 1',
    cursor: 'pointer',
    position: 'fixed',
    right: '50px',
    top: '100px'
});
// 添加文本
上一级.文本 = document.createElement('span');
上一级.文本.innerText = '上一级';
Object.assign(上一级.文本.style,
{
    color: '#dark',
    fontSize: '32px',
    fontFamily: '楷体',
    fontWeight: 'bold',
    paddingTop: '20px',
    opacity: '0'
});
// 鼠标悬停时显示文字
上一级.addEventListener('mouseover', () =>
{
    上一级.文本.style.opacity = '1';
});
上一级.addEventListener('mouseout', () =>
{
    上一级.文本.style.opacity = '0';
});
// 添加点击事件，设置超链接
上一级.addEventListener('click', () =>
{
    window.location.href = '学习笔记.html';
});
// 将文本添加到按钮中
上一级.appendChild(上一级.文本);
// 将按钮添加到页面中
document.body.appendChild(上一级);