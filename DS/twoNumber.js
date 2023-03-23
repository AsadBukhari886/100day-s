function twoNumber(arr, target) {
    let size = arr.length;
    let newarr = []


    for (let i = 0; i <= size; i++) {
        let map = new Map()
        // let searchedNumber = target - arr[i];

        for (let i = 0; i < size; i++) {
            if (map.has(target - arr[i])) {
                console.log(map.get(target - arr[i]),i)
            } else {
                map.set(arr[i], i)
            }
        }


    }

}