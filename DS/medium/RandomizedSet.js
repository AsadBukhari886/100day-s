var RandomizedSet = function () {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.has(val)) return false
    return this.set.add(val)
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    return this.set.delete(val)
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let items = Array.from(this.set);
    return items[Math.floor(Math.random() * items.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */