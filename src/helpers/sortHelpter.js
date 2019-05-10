export function sortByType(type1, type2, type3, list) {
    let sortList = list.filter(item => item.type === type1 || item.type === type2 || item.type === type3)
    return sortList;
}


export function sortByBrand(brand1, brand2, brand3, brand4, list) {
    let sortList = list.filter(item => item.brand === brand1 || item.brand === brand2 || item.brand === brand3 || item.brand === brand4)
    return sortList;
}


export function sortByWheelSize(size1, size2, size3, size4, list){
    
    let sortList = list.filter(item => {
        return `${item.tireSize}` === size1 || `${item.tireSize}` === size2 || `${item.tireSize}` === size3 || `${item.tireSize}` === size4
    }  )
    return sortList
}