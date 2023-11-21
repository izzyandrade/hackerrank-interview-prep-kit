/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

class SinglyLinkedListNode {
  data;

  next;

  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  head;

  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
}

function printSinglyLinkedList(node, sep) {
  while (node != null) {
    console.log(String(node.data));

    node = node.next;

    if (node != null) {
      console.log(sep);
    }
  }
}

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */

/*
 * For your reference:
 *
 SinglyLinkedListNode {
     number data;
     SinglyLinkedListNode next;
 }
 *
 */

function insertNodeAtPosition(headNode, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  if (headNode === null) {
    headNode = newNode;
  } else if (position === 0) {
    newNode.next = headNode;
    return newNode;
  } else {
    let currentNode = headNode;
    let prevNode = null;
    let nextNode = null;
    for (let i = 0; i <= position; i++) {
      if (i === position - 1 && currentNode !== null) {
        prevNode = currentNode;
        nextNode = currentNode.next;
        break;
      }
      if (currentNode !== null) {
        currentNode = currentNode.next;
      }
    }
    prevNode.next = newNode;
    newNode.next = nextNode;
  }

  return headNode;
}

function main() {
  const llist = new SinglyLinkedList();

  const llistCount = 3;

  for (let i = 0; i < llistCount; i++) {
    llist.insertNode(i);
  }

  const data = 5;

  const position = 2;

  const llistHead = insertNodeAtPosition(llist.head, data, position);

  printSinglyLinkedList(llistHead, ' ');
  console.log('\n');
}

main();
