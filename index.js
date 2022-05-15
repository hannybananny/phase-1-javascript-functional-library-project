function isObject(collection){
    if (typeof collection === 'object'){
        return Object.values(collection)
    }
    else if(Array.isArray(collection)) {
        return collection
    }
}


function myEach(collection, callback){
   let array = isObject(collection)
   array.forEach(element => callback(element))
   return collection
}


function myMap(collection, callback){
    let newArr =[]
    let array = isObject(collection)

    for(let i=0; i < array.length; i++){
        newArr.push(callback(array[i]))
    }
    return newArr 
}

function myReduce (collection, callback, acc){
    let arr = isObject(collection) 
    if(!acc){
        acc = arr[0]
        arr = arr.slice(1)
    }

    for(let i=0; i <arr.length; i++){
        
       acc = callback(acc, arr[i], arr)
    }
    return acc
}

function myFind(collection, predicate){
    let arr = isObject(collection)

    for(let i =0; i < arr.length; i++){
        if(predicate(arr[i]) === true){
            return arr[i]
        }
    }
}

function myFilter(collection, predicate){
    let arr = isObject(collection)
    let newArr = []
    
    for(let i=0; i <arr.length; i++){
        if(predicate(arr[i]) === true){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function mySize(collection){
    let arr = isObject(collection)
    return arr.length
}

function myFirst(array, n){
    if(typeof n !== 'number'){
        return array[0]
    }
    else {
        return array.slice(0, n)
    }
}

function myLast(array, n){
    if(typeof n !== 'number'){
        let value = array.slice(-1)
        return value[0]
    }
    else {
        return array.slice(-n)
    } 
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}