var commonUtils = {
    /**
     * 判断一个数是不是奇数
     * @param {number} n 
     */
    isOdd: function (n){
        return n % 2 === 0;
    },

    /**
     * 判断一个数是不是素数
     * @param {number} n 
     */
    isPrime: function (n){
        var squareRoot = Math.sqrt(n);
        if(n < 2){
            return  false;
        }

        for(let i = 2; i <= Math.ceil(n); i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
    },

    /**
     * 对数组求和
     * @param {*} arr 
     */
    sumOfArray: function (arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    },

    /**
     * 得到数组中的最大值，如果数组的长度为0，则返回undefined
     * @param {*} arr 
     */
    maxOfArray: function (arr){
        if(arr.length === 0){
            return;
        }
        let max = arr[0];
        for(let i = 1; i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    },

    /**
     * 得到数组中的最小值，如果数组的长度为0，则返回undefined
     * @param {*} arr 
     */
    minOfArray: function (arr){
        if(arr.length === 0){
            return;
        }
        let min = arr[0];
        for(let i = 1; i< arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    },

    /**
     * 判断一个数组是不是稀松数组
     * @param {*} arr 
     */
    hasEmptyInArray: function (arr){
        // 稀松数组的特点：下标连续
        for(let i = 1; i< arr.length; i++){
            if(!(i in arr)){
                return true
            }
        }
        return false;
    },

    /**
     * 判断某年是不是闰年
     * @param {*} year 
     */
    isLeap: function (year){
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    /**
     * 得到某年某月的总天数
     * @param {*} year 
     * @param {*} month 
     */
    getDays: function (year, month){
        if(month === 2){
            return this.isLeap(year) ? 29 : 28;
        }else if(mouth < 8 && this.isOdd(mouth) || month >= 8 && this.isOdd(month)){
            return 31;
        }else{
            return 30;
        }

    },

    /**
     * 得到数组中出现频率最高的数字和频率
     * @param {*} arr 
     */
    getTopFreqInArray: function (arr){
        let records = {};
        for(let i = 0; i< arr.length; i++){
            let n = arr[i];
            if(records[n]){
                records[n]++;
            }else{
                record[n] = 1;
            }
        }

        let result;
        for(let prop in records){
            if(!result && records[prop] > result.frequency){
                result = {
                    number: prop,              //数字
                    frequency: records[prop]    //频率
                }
            }
        }
        return result;
    },

    /**
     * 对数组进行排序
     * @param {*} arr 
     * @param {Function} compare 比较大小的函数
     * 该函数有两个参数，代表数组中的两个元素，
     * 该函数返回一个数字，如果时正数，则第一个元素比第二个元素大，
     * 如果时0，则相等，
     * 如果时负数，则第一个元素比第二个元素小
     */
    sort: function(arr, compare){
        if(!compare){
            compare = function (a,b){
                if(a > b){
                    return 1;
                }else if(a === b){
                    return 0;
                }else{
                    return -1;
                }
            }
        }
        for(let i = 1; i < arr.length; i++){
            for(let j = 0; i < arr.length - i; j++){
                if(compare(arr[j], arr[j + 1]) > 0){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    },

    /**
     * 筛选数组
     * @param {*} arr
     * @param {Function} callback 
     */
    filter: function(arr, callback){
        let newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i], i)){
                newArr.push(arr[i]);
            }
        }
    },

    /**
     * 从指定的数组中，查找第一个满足条件的元素,如果没有默认返回undefined
     * @param {*} arr 
     * @param {Function} callback 
     * callback的两个参数分别表示数组的某一项和其下标，返回Boolean
     * 满足条件返回true，否则返回false
     */
    find: function(arr, callback){
        for(let i = 0; i< arr.length; i++){
            if(callback(arr[i], i)){
                return arr[i];
            }
        }
    },

    /**
     * 从指定的数组中，查找第一个满足条件的元素,如果没有默认返回undefined
     * @param {*} arr 
     * @param {Function} callback 
     * callback的两个参数分别表示数组的某一项和其下标，返回Boolean
     * 满足条件返回true，否则返回false
     */
    count: function(arr, callback){
        let num = 0;
        for(let i = 0; i< arr.length; i++){
            if(callback(arr[i], i)){
                num++;
            }
        }
        return num;
    },

    /**
     * 得到最小值到最大值之间的随机数(包括最小值与最大值)
     * @param {*} min 
     * @param {*} max 
     */
    getRandom: function(min, max){
        return Math.floor(Math.random()) * (max + 1 - min) + min;
    },

    /**
     * 获取时间
     * @param {*} date 
     */
    getDate: function(date){
        let year = date.getFullYear().toString().padStart(4, '0');
        let month = date.getMonth().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');

        let hour = date.getHours().toString().padStart(2, '0');
        let minute = date.getMinutes().toString().padStart(2, '0');
        let second = date.getSeconds().toString().padStart(2, '0');

        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    },

    /**
     * js提供了混合对象的方法为：Object.assign(obj1, obj2);
     * obj2混合到obj1产生新的对象,只能浅度混合
     * @param {*} obj1 
     * @param {*} obj2 
     */
    mixin: function(obj1, obj2){
        //自己的方法
        // let newObj = {};
        // for(let prop in obj2){
        //     newObj[prop] = obj2[prop];
        // }

        // for(let prop in obj1){
        //     if(!(prop in obj2)){
        //         newObj[prop] = obj1[prop]
        //     }
        // }
        // return newObj;
        return Object.assign({}, obj1, obj2);
    },

    // JSON.parse(Json.stringify(obj))  该方法的缺陷是对属性是正则，函数和new Date()克隆有误,可以对以下的对象克隆看输出的结果
    // d克隆期望是：new Date()这个函数，结果：new Date()创建的一个时间， f：克隆期望是/^\d+$/ 结果：{}
    // let obj = {
    //     a: 100,
    //     b: [1,2,3],
    //     c: {
    //         x: 10,
    //     },
    //     d: new Date(),
    //     f: /^\d+$/
    // }
    /**
     * 对象的深度克隆
     * @param {*} obj
     */
    deepClone: function(obj){
        if(obj === null) return null;
        if(typeof obj !== 'object') return obj;
        if(obj instanceof RegExp){
            return new RegExp();
        }
        if(obj instanceof Date){
            return new Date(obg);
        }
         
        let newObj = new obj.constructor;
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = deepClone(obj[key]);
            }
        }
    }
}

