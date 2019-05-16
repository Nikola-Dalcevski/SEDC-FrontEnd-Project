
export function sortTypeBrandWheel(listSort, list, type){
    
    let sortList = list.filter(item => { 
     
        return item[type].toString() === listSort[0] || item[type] === listSort[1] || item[type] === listSort[2] || item.tireSize === listSort[3]
    }  )
    return sortList
}