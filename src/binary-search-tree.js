const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    function addElemInTree(node, data) {
      if (node === null) {
        let newNode = {
          value: data,
          leftElem: null,
          rightElem: null
        }
        return newNode;

      } else {
        if (data === node.value) {
          return node;
        }
        if (data > node.value) {
          node.rightElem = addElemInTree(node.rightElem, data);
        }
        if (data < node.value) {
          node.leftElem = addElemInTree(node.leftElem, data);
        }
      }
      return node;
    }

    this.root = addElemInTree(this.root, data);
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};