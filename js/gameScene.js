/* global Phaser */

// Created By: marco cuconato
// Created on: May 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
 constructor() {
   super({ key: 'gameScene' })
 }

 init(data) {
   this.cameras.main.setBackgroundColor('#ffffff')
 }

 preload() {
   console.log('Game Scene')
 }

 create(data) {
 }

 update(time, delta) {
 }
}

export default GameScene

