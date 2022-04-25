 /*global Phaser*/

/**
* this class is the Title Scene
*/
class TitleScene extends Phaser.Scene {
  /**
*This method is the construtor.
    */
consteructor() {
  super({key: "titleScene"})
}

/**
* Can be defined on your own Scene
* This method is called by the Scene Manager when the scene starts,
*   befor preload() and create().
* @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
*/
  init(data) {
    this .cameras.main.setBackgroundColor("ffffff")

 /**
  * Can be defined on your own Scene
  * Use it to load assets.
    */
    preloda() {
  console.log("title Scene")
}

/**
* Can be defined on your Scene
* Use it to create your game objects.
*/
update(time, delta) {
  // pass
  }
}

export default TitleScene