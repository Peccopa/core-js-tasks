const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.$root = null;
  }

  root() {
    return this.$root;
  }

  add(data) {
    this.$root = addNode(this.$root, data);
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (!node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.$root, data);
    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    let currentNode = this.$root;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.$root = removeNode(this.$root, data);
    function removeNode(node, data) {
      if (!node) return false;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          return node = node.right;
        }
        if (!node.right) {
          return node = node.left;
        }
        let minNode = node.right;
        while (minNode.left) {
          minNode = minNode.left;
        }
        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data);
        return node;
      }
    }
  }

  min() {
    if (!this.$root) return;
    let currentNode = this.$root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.$root;
    if (!currentNode) return;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};