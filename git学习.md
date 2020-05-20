# git基本命令
### 获得版本库
1. git init：版本库的初始化
2. git clone：项目的克隆
### 查看信息
1. git help：查看git帮助
2. git log：查看日志
3. git diff: ：查看改变
### 版本管理
1. git add：添加文件到暂存区
2. git commit：添加文件到本地仓库
3. git rm：删除文件(不同的区删除的意义不同)
### 远程协作
1. git pull：拉取文件到本地仓库
2. git push：推送文件到远程仓库

### git操作
当我们创建了一个文件，并想把他提交到暂存区可以用`git add <file>`命令进行提交，如果我们想把暂存区的文件修改退回到工作区，则可以用`git rm --cached <file>`命令，当我们再次修改这个文件，使用`git status`可以发现又多了一个命令，即`git checkout -- <file>`，即丢弃所有的修改，这个命令一定要注意，因为这个时候的修改没有纳入到版本库，丢弃之后是找不回来的。`git reset HEAD <file>`也是把暂存区的文件退回到工作区。  
`git reset HEAD <file>`是把暂存区的文件还原到工作区。  
`git checkout -- <file>`是把工作区的修改丢弃掉。  
`git rm <file>`执行了两个操作，一是删除该文件`rm <file>`，二是把删除该文件的操作提交到缓存区。  
如果想还原该文件，一是执行`git reset HEAD <file>`，把暂存区的提交还原到工作区，二是执行`git checkout -- <file>`，把工作区的修改丢弃掉，这时删除的文件就还原了。