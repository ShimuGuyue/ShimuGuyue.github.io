/*  “上一级”按钮  */
const 上一级 = document.createElement('button');
上一级.id = '上一级';
Object.assign(上一级.style, 
{
    width: '160px',
    height: '90px',
    backgroundImage: 'url("../images/按钮_学习笔记.jpg")',
    backgroundSize: 'cover',
    border: '4px solid',
    borderImage: 'linear-gradient(to right, pink, yellow) 1',
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
上一级.addEventListener('click', () => {
    window.open('../../index.html', '_blank');
});
// 将文本添加到按钮中
上一级.appendChild(上一级.文本);
// 将按钮添加到页面中
document.body.appendChild(上一级);

/*  “编程语言”按钮  */
const 编程语言 = document.createElement('button');
编程语言.id = '编程语言';
Object.assign(编程语言.style, 
{
    width: '160px',
    height: '90px',
    backgroundImage: 'url("../images/按钮_学习笔记_编程语言.jpg")',
    backgroundSize: 'cover',
    border: '4px solid',
    borderImage: 'linear-gradient(to right, yellow, pink, yellow, pink) 1',
    cursor: 'pointer',
    position: 'fixed',
    right: '50px',
    top: `${上一级.getBoundingClientRect().bottom + 10}px`
});
// 添加文本
编程语言.文本 = document.createElement('span');
编程语言.文本.innerText = '编程语言';
Object.assign(编程语言.文本.style, 
{
    color: '#dark',
    fontSize: '32px',
    fontFamily: '楷体',
    fontWeight: 'bold',
    paddingTop: '20px',
    opacity: '0'
});
// 鼠标悬停时显示文字
编程语言.addEventListener('mouseover', () =>
{
    编程语言.文本.style.opacity = '1';
});
编程语言.addEventListener('mouseout', () =>
{
    编程语言.文本.style.opacity = '0';
});
// 添加点击事件，设置超链接
编程语言.addEventListener('click', () => {
    window.open('../html/编程语言.html', '_blank');
});
// 将文本添加到按钮中
编程语言.appendChild(编程语言.文本);
// 将按钮添加到页面中
document.body.appendChild(编程语言);



/*  “算法”按钮  */
const 算法 = document.createElement('button');
算法.id = '算法';
Object.assign(算法.style, 
{
    width: '160px',
    height: '90px',
    backgroundImage: 'url("../images/按钮_学习笔记_算法.jpg")',
    backgroundSize: 'cover',
    border: '4px solid',
    borderImage: 'linear-gradient(to right, yellow, pink, yellow, pink) 1',
    cursor: 'pointer',
    position: 'fixed',
    right: '50px',
    top: `${编程语言.getBoundingClientRect().bottom + 10}px`
});
// 添加文本
算法.文本 = document.createElement('span');
算法.文本.innerText = '算法';
Object.assign(算法.文本.style, 
{
    color: '#dark', 
    fontSize: '32px',
    fontFamily: '楷体',
    fontWeight: 'bold',
    paddingTop: '20px',
    opacity: '0'
});
// 鼠标悬停时显示文字
算法.addEventListener('mouseover', () =>
{
    算法.文本.style.opacity = '1';
});
算法.addEventListener('mouseout', () =>
{
    算法.文本.style.opacity = '0';
});
// 添加点击事件，设置超链接
算法.addEventListener('click', () => {
    window.open('../html/算法.html', '_blank');
});
// 将文本添加到按钮中
算法.appendChild(算法.文本);
// 将按钮添加到页面中
document.body.appendChild(算法);