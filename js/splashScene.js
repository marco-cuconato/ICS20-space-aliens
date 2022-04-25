 /*global Phaser*/

/**
* this class is the Title Scene
*/
class SplashScene extends Phaser.Scene {
  /**
*This method is the construtor.
    */
consteructor() {
  super({key: "splashScene"})
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
  console.log("Splash Scene")
}

/**
* Can be defined on your Scene
* Use it to create your game objects.
*/
update(time, delta) {
  //pass
  }

/**
* Should be overridden by your own Scenes.
* This method is called once per game step while the scene is running.
* @param {number} time - The current time
* @param {number} dealt - The dealt time in ms since the last frame
*/
    update(time, dealt) {
      this.scene.switch("titltScene")
  
export default SlpashScene
    