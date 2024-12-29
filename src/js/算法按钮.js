/* “上一级”按钮 */
const 上一级 = document.createElement('button');
上一级.id = '上一级';
Object.assign(上一级.style,
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
window.open('学习笔记.html', '_blank');
});
// 将文本添加到按钮中
上一级.appendChild(上一级.文本);
// 将按钮添加到页面中
document.body.appendChild(上一级);