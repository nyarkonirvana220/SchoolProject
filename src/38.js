function addNode(name) {
  const newNode = {name: name};
  return newNode;
}

function updateNode(id, newName) {
  const updatedNode = this.nodes[id];
  if (updatedNode) {
    updatedNode.name = newName;
    return updatedNode;
  } else {
    throw new Error("Node with the given ID does not exist.");
  }
}

function removeNode(id) {
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    if (node.id === id) {
      delete this.nodes[i];
      return;
    }
  }
  throw new Error("Node with the given ID does not exist.");
}

function listNodes() {
  console.log(this.nodes.map(node => ({id: node.id, name: node.name})));
}
