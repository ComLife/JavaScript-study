
var gameConfig = {
    width: 1000,
    height: 1000,
    rows: 3,            //行数
    cols: 3,            //列数
    isOver: false,      //游戏是否结束
    imgurl: './puzzle.jpg',
    dom: document.getElementById('game')
};
// 每一个小块的宽高
gameConfig.pieceWidth = gameConfig.width / gameConfig.cols;
gameConfig.pieceHeight = gameConfig.height / gameConfig.rows;
//小块的数量
gameConfig.pieceNumber = gameConfig.rows * gameConfig.cols;

var blocks = [];

function isEqual(n1, n2){
    return parseInt(n1) === parseInt(n2);
}

/**
 * 小方块的构造函数
 * @param {*} left 
 * @param {*} top 
 * @param {*} isVisible 小方块是否可见
 */
function Block(left, top, isVisible){
    this.left = left;
    this.top = top;
    this.correnctLeft = this.left;      // 图片显示部分的横坐标的位置
    this.correnctTop = this.top;        // 图片显示部分的纵坐标的位置
    this.isVisible = isVisible;
    this.dom = document.createElement('div');
    this.dom.style.width = gameConfig.pieceWidth + 'px';
    this.dom.style.height = gameConfig.pieceHeight + 'px';
    this.dom.style.background = `url('${gameConfig.imgurl}') -${this.correnctLeft}px -${this.correnctTop}px`;
    this.dom.style.position = 'absolute';
    this.dom.style.border = '1px solid #ccc';
    this.dom.style.boxSizing = 'border-box';
    this.dom.style.cursor = 'pointer';
    this.dom.style.transition = '0.5s';
    if(!isVisible){
        this.dom.style.display = 'none';
    }
    gameConfig.dom.appendChild(this.dom);

    this.show = function(){
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }
    this.isCorrect = function(){
        return isEqual(this.left, this.correnctLeft) && isEqual(this.top, this.correnctTop)
    }
    this.show();
}
/**
 * 初始化游戏
 */
function init(){
    initGameDom();
    initBlocksArray();
    shuffle();
    regEvent();

    /**
     * 注册点击事件
     */
    function regEvent(){
        var inVisibleBlock = blocks.find(function(b){
            return !b.isVisible;
        })
        blocks.forEach(function(b){
            b.dom.onclick = function(){
                if(gameConfig.isCorrect){
                    return;
                }
                // 判断是否可以交换
                if(b.top === inVisibleBlock.top && isEqual(Math.abs(b.left - inVisibleBlock.left),gameConfig.pieceWidth) || 
                   b.left === inVisibleBlock.left && isEqual(Math.abs(b.top - inVisibleBlock.top),gameConfig.pieceHeight)){
                    //交换位置
                    exchange(b, inVisibleBlock);
                    //游戏结束判断
                    isWin();
                }
            }
        })
    }

    /**
     * 游戏结束判断
     */
    function isWin(){
        var wrogs = blocks.filter(function(item){
            return !item.isCorrect();
        })
        if(wrogs.length === 0){
            gameConfig.isCorrect = true;
            blocks.forEach(function(b){
                b.dom.style.border = 'none';
                b.dom.style.display = 'block';
            })
        }
    }

    /**
     * 取得随机数
     * @param {*} min 
     * @param {*} max 
     */
    function getRandom(min, max){
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    /**
     * 交换两个方块的left和top
     * @param {*} b1 
     * @param {*} b2 
     */
    function exchange(b1, b2){
        var temp = b1.left;
        b1.left = b2.left;
        b2.left = temp;

        temp = b1.top;
        b1.top = b2.top;
        b2.top = temp;
        b1.show();
        b2.show();
    }

    /**
     * 打乱小方块
     */
    function shuffle(){
        //随机产生一个下标，将数组的当前项与随机项交换left和top值
        for(var i = 0; i < blocks.length - 1; i++){
            var index = getRandom(0, blocks.length - 2);
            exchange(blocks[i], blocks[index]);
        }
    }

    /**
     * 初始化一个小方块数组
     */
    function initBlocksArray(){
        for(var i = 0; i < gameConfig.rows; i++){
            for(var j = 0; j < gameConfig.cols; j++){
                var isVisible = true;
                if(i === gameConfig.rows - 1 && j === gameConfig.cols - 1){
                    isVisible = false;
                }
                blocks.push(new Block(j * gameConfig.pieceWidth, i * gameConfig.pieceHeight, isVisible))
            }
        }
    }

    /**
     * 初始化游戏容器
     */
    function initGameDom(){
        gameConfig.dom.style.width = gameConfig.width + 'px';
        gameConfig.dom.style.height = gameConfig.height + 'px';
        gameConfig.dom.style.border = '2px solid #fff';
        gameConfig.dom.style.position = 'relative';
        gameConfig.dom.style.float = 'left';
    }
}



init();