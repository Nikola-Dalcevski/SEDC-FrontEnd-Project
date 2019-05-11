
export function sortTypeBrandWheel(listSort, list, type){
    
    let sortList = list.filter(item => {
        console.log(item[type])
        return item[type] === listSort[0] || item[type] === listSort[1] || item[type] === listSort[2] || item.tireSize === listSort[3]
    }  )
    return sortList
}