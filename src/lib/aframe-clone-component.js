AFRAME.registerComponent('clone', {
  schema: {
    id: {default: '', type: 'selector'}
  },
  init: function () {
    var el = this.el;
    var data = this.data;
    for (let i = 0; i < data.id.children.length; i++) {
      // let child = data.id.children[i].object3D.clone()
      // el.object3D.add(child)
      let child = data.id.children[i].object3D.children[0]
      el.object3D.add(new THREE.Mesh(child.geometry, child.material))
    }
  },
  // update: function () { console.log('update') },
  // remove: function () { /* ... */ }
});
