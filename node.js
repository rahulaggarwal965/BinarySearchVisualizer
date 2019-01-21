function Node(val, x, y, level) {
  this.label = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
  this.level = level;
}

Node.prototype.addNode = function(n, level) {
  if (n.label < this.label) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x - 450/(pow(2, level));
      this.left.y = this.y + 40;
    } else {
      this.left.addNode(n, level + 1);
    }
  } else if (n.label > this.label) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x + 450/(pow(2, level));
      this.right.y = this.y + 40;
    } else {
      this.right.addNode(n, level + 1);
    }
  }
}

Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log(this.label)
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.label, this.x, this.y + 5);
  noFill();
  stroke(255);
  ellipse(this.x, this.y, 15, 15);
  line(parent.x, parent.y, this.x, this.y);




  if (this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.search = function(val) {
  if (val == this.label) {
    return this
  } else if (val < this.label && this.left != null) {
    return this.left.search(val);
  } else if (val > this.label && this.right != null) {
    return this.right.search(val);
  } else {
    return null
  }
}
