// import { Viewer, ViewerEvent } from "@speckle/viewer";
// const viewer = new Viewer();
// console.log(viewer);

// import { Vector2 } from "three";
// const vector = new Vector2();
// console.log(vector);

import ObjectLoader from "@speckle/objectloader";

const loader = new ObjectLoader();
console.log(loader);

// async load( { serverUrl, token, streamId, objectId } ) {

//   const loader = new ObjectLoader( { serverUrl, token, streamId, objectId } )

//   let total = null
//   let count = 0

//   for await ( let obj of loader.getObjectIterator() ) {

//     if( !total ) total = obj.totalChildrenCount

//     console.log( obj, `Progress: ${count++}/${total}` )

//   }

// }
