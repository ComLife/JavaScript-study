# jacascript类型
JavaScript有六种基础数据类型number，string， boolean， undefined， object， function
typeof可以识别数据的类型，注意⚠️：typeof([]) == object, typeof(null) == object

javasctipt数据显示类型转换Number()
Number(true) ===> 1
Number(false) ===> 0
Nunber(null) ===> 0
Nunber(undefind) ===> NaN
Nunber('abc') ===> NaN
Nunber('123abc') ===> NaN

## 转换成整型
parseInt(true) ===> NaN
parseInt(false) ===> NaN
parseInt(null) ===> NaN
parseInt(undefind) ===> NaN
parseInt(123abc) ===> 123
parseInt('10', 16) 以16进制为基底转换为10进制

## 转换成string String(value)

toString();
undefind 和 null不能用toString()方法
toString(8);以10进制为基底转换为8（目标）进制。

隐式类型转换
isNaN() ==> 会先调用Number()后在进行计算
++/-- -*/% +/-(一元正负，不是加减) ==> 会先调用Number()后在进行计算
+(加) ==> 当加好一侧有字符串都会转换为字符串类型
&&||! 
< > <= >= 字符串和数字比较会把字符串转换为数字在比较，字符串比较是以ascall码进行比较
== !=

=== !==不会发生类型转换

undefind > 0 ==> false
undefind < 0 ==> false
undefind == 0 ==> false
null > 0 ==> false
null < 0 ==> false
null == 0 ==> false
undefind == null ==> true

变量没经声明就赋值为window所有。
javascript执行前会进行预编译，执行预编译有以下步骤：
在函数体里面的执行顺序
1. 创建AO对象
2. 找形参和变量声明，将变量和形参作为AO属性名，值为undefined
3. 将实参值和形参统一
4. 在函数体里面找函数声明，值赋予函数体

在window里面的执行顺序：
1. 创建GO对象
2. 找形参和变量声明，将变量和形参作为AO属性名，值为undefined
3. 在函数体里面找函数声明，值赋予函数体