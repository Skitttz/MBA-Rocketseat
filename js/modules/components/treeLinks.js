/**
 * Manages a hierarchical tree structure with nodes representing items and their descriptions.
 *
 * @param key - The unique identifier for each tree node.
 * @param description - The description text for the tree node.
 * @param parent - The parent element where the new list item will be added.
 */

class Tree {
  constructor(key, description = key, parent = null) {
    this.key = key;
    this.description = description;
    this.parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

export default class TreeLinks {
  constructor(key, description = key) {
    this.root = new Tree(key, description);
  }

  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodeKey, key, description = key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new Tree(key, description, node));
        return true;
      }
    }
    return false;
  }

  remove(key) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter((c) => c.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
}
