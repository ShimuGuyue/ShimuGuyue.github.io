# vector

```c++
v.begin（）
    //v的第一个元素的位置
v.end（）
    //v的最后一个元素的后一个位置
v.front（）
    //v的第一个元素
v.back（）
    //v的最后一个元素
v.size（）
    //v中的元素个数
v.empty（）
    //v是否为空
    
/*vector中迭代器为随机访问迭代器*/
/*插入和删除会导致迭代器失效*/
```

### 赋值

```c++
v.assign（位置beg, 位置end）;
//将[beg，end）区间中的数据赋值给v

v.assign（数量n，数据elem）;
//将n个elem赋值给v

v1.swap（向量v2）;
//将v1与v2的元素互换
```

### 改变大小

```c++
v.resize（长度num）;
//重新指定容器的长度为num
//若容器变长，则以默认值填充新位置
//如果容器变短，则末尾超出容器长度的元素被删除

v.resize（长度num，填充值elem）;
//重新指定容器的长度为num
//若容器变长，则以elem填充新位置
//如果容器变短，则末尾超出容器长度的元素被删除
```

### 插入数据

```c++
v.push_back（数据elem）;
//在容器尾部插入一个elem

v.insert（位置pos，数据elem）;//返回新数据位置的迭代器
//在pos位置插入一个elem

v.insert（位置pos，数量n，数据elem）;
//在pos位置插入n个elem

v.insert（位置pos，位置beg，位置end）;
//在pos位置插入[beg，end）区间的数据
```

### 删除数据

```c++
v.pop_back（）;
//删除v的最后一个元素

v.clear（）;
//移除v的所有数据

v.erase（位置beg，位置end）;//返回下一个数据位置的迭代器
//删除[beg，end）区间的数据

v.erase（位置pos）;//返回下一个数据位置的迭代器
//删除pos位置的数据
```

# deque

```c++
/*deque 和 vector 一样都是STL的容器，deque是双端数组，而vector是单端的。*/

/*deque中迭代器为随机访问迭代器*/
/*插入和删除会导致迭代器失效*/
```

```c++
/*deque与vector在操作上几乎一样，deque多两个函数：*/

d.push_front（数据elem）;
//在d头部插入一个数据elem

d.pop_front（）;
//删除d第一个数据
```

