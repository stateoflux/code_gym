function stackWithArray() {
  this.items = [];
  this.stack_top_index = -1;
  this.push = function(thing) {
    this.stack_top_index = this.stack_top_index + 1;
    this.items[this.stack_top_index] = thing;
    return this;
  };

  this.pop = function() {
    if (this.stack_top_index > -1) {
      var top_item = this.items[this.stack_top_index];
      this.items.splice(this.stack_top_index);
      // http://stackoverflow.com/questions/500606/javascript-array-delete-elements/500617#500617
      this.stack_top_index--;
      return top_item;
    } else {
      throw Error("stack empty");
    }
  };

  this.isEmpty = function() {
    return this.stack_top_index === -1;
  };
}


var LinkedList = require('./linked_list/singly_linked_list.js');

function stackWithLinkedList() {
  this.items = new LinkedList();
  this.stack_top_index = -1;
  this.push = function(thing) {
    this.stack_top_index = this.stack_top_index + 1;
    this.items.insertFront(thing);
    return this;
  };

  this.pop = function() {
    if (this.stack_top_index > -1) {
      var top_item = this.items.head.value;
      this.items.removeFront();
      this.stack_top_index--;
      return top_item;
    } else {
      throw Error("stack empty");
    }
  };

  this.isEmpty = function() {
    return this.stack_top_index === -1;
  };
}

module.exports = {
  array: stackWithArray,
  linked_list: stackWithLinkedList
};
