class Sorter {
  constructor() {
    this.array=[];
    this.compareFunction=(left, right) => left - right;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices = []) {
    indices.sort((a, b) => a - b);
    const arrayWithNeedValues = indices 
    .map(value => this.array[value]) 
    .sort(this.compareFunction) 
    .forEach((value, index) => this.array[indices[index]] = value); 
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;