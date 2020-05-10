// 配置对象
let config = {
    imgWidth: 520,              // 图片的宽度
    dotWidth: 12,               // 圆点的宽度
    doms: {                     // 涉及的dom对象
        divBanner: document.querySelector('.banner'),
        divImgs: document.querySelector('.banner .imgs'),
        divDots: document.querySelector('.banner .dots'),
        divArrow: document.querySelector('.banner .arrow'),
    },
    currentIndex: 0,
    timer: {
        duration: 16,           // 运动间隔时间
        total: 300,            // 运动的总时间
        id: null,               // 计时器id
    },
    autoTimer: null,            // 自动切换的计时器
}
// 图片数量
config.imgNumber = config.doms.divImgs.children.length
console.log(config)

/**
 * 初始化元素尺寸
 */
function initSize(){
    config.doms.divDots.style.width = config.dotWidth * config.imgNumber + 'px';
    config.doms.divImgs.style.width = config.imgWidth * (config.imgNumber + 2) + 'px';
}

/**
 * 初始化元素
 */
function initElement(){
    // 创建小圆点
    for (let i = 0; i < config.imgNumber; i++) {
        let span = document.createElement('span');
        config.doms.divDots.appendChild(span)
    }

    // 复制图片
    let children = config.doms.divImgs.children;
    let first = children[0];
    let last = children[children.length - 1];
    let newImg = first.cloneNode(true);
    config.doms.divImgs.appendChild(newImg);
    newImg = last.cloneNode(true);
    config.doms.divImgs.insertBefore(newImg, first);
}

/**
 * 初始化图片位置
 */
function initPosition(){
    let left = (-config.currentIndex - 1) * config.imgWidth;
    config.doms.divImgs.style.marginLeft = left + 'px';
}

/**
 * 设置小圆点的状态
 */
function setDotStatus(){
    for (let i = 0; i < config.doms.divDots.children.length; i++) {
        let dot = config.doms.divDots.children[i];
        if(i === config.currentIndex){
            dot.className = 'active';
        }else{
            dot.className = '';
        }
        
    }
}

function switchTo(index, direction){
    if(index === config.currentIndex){
        return;
    }
    if(!direction){
        direction = 'left';
    }
    let newLeft = (-index - 1) * config.imgWidth;
    animateSwitch();
    config.currentIndex = index;
    setDotStatus();

    /**
     * 切换动画
     */
    function animateSwitch(){
        stopAnimate();  // 先停止之前的动画
        // 计算运动的次数
        let number = Math.ceil(config.timer.total / config.timer.duration);
        let curNumber = 0;
        let distance = 0;
        let marginLeft = parseFloat(getComputedStyle(config.doms.divImgs).marginLeft);
        let totalWidth = config.imgNumber * config.imgWidth;
       
        if(direction === 'left'){
            if(newLeft < marginLeft){
                distance = newLeft - marginLeft;
            }else{
                distance = -(totalWidth - Math.abs(newLeft - marginLeft));
            }
        }else{
            if(newLeft > marginLeft){
                distance = newLeft - marginLeft;
            }else{
                distance = totalWidth - Math.abs(newLeft - marginLeft);
            }
        }
        let everyDistance = distance / number;
        config.timer.id = setInterval(function(){
            marginLeft += everyDistance;
            if(direction === 'left' && Math.abs(marginLeft) > totalWidth){
                marginLeft += totalWidth;
            }else if(direction === 'right' && Math.abs(marginLeft) < config.imgWidth){
                marginLeft -= totalWidth;
            }
            config.doms.divImgs.style.marginLeft = marginLeft + 'px';
            curNumber++;
            if(curNumber === number){
                stopAnimate();
            }
        }, config.timer.duration)
    }

    function stopAnimate(){
        clearInterval(config.timer.id);
        config.timer.id = null
    }
}

config.doms.divArrow.onclick = function(e){
    if(e.target.classList.contains('left')){
        toLeft();
    }else if(e.target.classList.contains('right')){
        toRight();
    }
}

config.doms.divDots.onclick = function(e){
    if(e.target.tagName === 'SPAN'){
        let index = Array.from(this.children).indexOf(e.target);
        switchTo(index, index > config.currentIndex ? 'left' : 'right');
    }
}

function toLeft(){
    let index = config.currentIndex - 1;
    if(index < 0){
        index = config.imgNumber - 1;
    }
    switchTo(index, 'right');
}

function toRight(){
    let index = (config.currentIndex + 1) % config.imgNumber;
    switchTo(index, 'left');
}

config.autoTimer = setInterval(toRight, 2000);

config.doms.divBanner.onmouseenter = function(){
    clearInterval(config.autoTimer);
    autoTimer = null;
}

config.doms.divBanner.onmouseleave = function(){
    if(autoTimer){
        return;
    }
    config.autoTimer = setInterval(toRight, 2000);
}

function init(){
    initSize();
    initElement();
    initPosition();
    setDotStatus();
}

init();