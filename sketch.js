
var tree;

function setup() {
  createCanvas(900, 800);
  background(51);
  tree = new Tree();
  for (var i = 0; i < 800; i++) {
    tree.addValue(round(random(100)));
  }
  tree.addValue(18);

  console.log(tree);
  tree.traverse();
  console.log(tree.search(18));
}

function draw() {

}
