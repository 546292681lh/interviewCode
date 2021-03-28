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
    let map = new Map();
    function baseClone(target){
        if(!isObject(target)) return target;
        if(map.get(target)) return map.get(target);
        let result = Array.isArray(target)?[]:{};
        map.set(target,result);
        const keys = Object.keys(target);
        for(let i = 0;i<keys.length;i++){
            result[keys[i]] = baseClone(target[keys[i]]);
        }
        return result;
    }
   return  baseClone(data)
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object'
  }

// function cloneDeep(obj) {
//     // debugger
//     let vistedMap = new Map();
//     function baseClone(target) {
      
//       if(!isObject(target)) return target
  
//       if(vistedMap.get(target)) return vistedMap.get(target)
  
//       let result = Array.isArray(target) ? [] : {}
  
//       vistedMap.set(target, result)
      
//       const keys = Object.keys(target);
//       for(let i = 0, len = keys.length; i < len; i++) {
//         result[keys[i]] = baseClone(target[keys[i]])
//       }
//       return result
//     }
//     return baseClone(obj)
//   }

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
obj1.self = obj1;
obj1.self.arr_1[0]=77
const obj2 = deepClone(obj1);
obj2.obj_1.a = 3
obj2.arr_1[0]= 66
obj2.fun = ()=>{
    console.log('222')
}
console.log('obj1:',obj1);
console.log('obj2:',obj2);