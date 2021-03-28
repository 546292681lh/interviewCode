function getType(data) {
    const toString  = Object.prototype.toString;
    const map = {
        '[object Number]': 'number',
        '[object Null]': 'null',
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object String]': 'string',
        '[object Symbol]': 'symbol',
        '[object Function]': 'function',
        '[object RegExp]': 'regExp',
        '[object Undefined]':'undefined',
        '[object Date]':'date',
        '[object HTMLCollection]':'element'
    }
    
    return map[toString.call(data)]
}

function deepClone(data){
    const type  = getType(data);
    let tmp
    if(type === 'array'){
        tmp = []
        for(let i =0;i<data.length;i++){
            tmp.push(deepClone(data[i]))
        }
        return tmp;
    }else if(type === 'object'){
        tmp = {}
        for(let o in data){
            tmp[o] = deepClone(data[o])
        }
        return tmp;
    }else{
        return data;
    }

}


const obj1 ={
    obj_1:{
        a:1,
        b:2
    },
    arr_1:[1,5,7,9],
    fun:()=>{
        console.log('111')
    }
}
const obj2 = deepClone(obj1);
obj2.obj_1.a = 3
obj2.arr_1[0]= 66
obj2.fun = ()=>{
    console.log('222')
}
console.log('obj1:',obj1);
console.log('obj2:',obj2);