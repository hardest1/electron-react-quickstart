
class Electron {
  
  constructor() {
    if (Electron.instance) {
      return Electron.instance;
    }
    this.init();
    Electron.instance = this;
  }

  init(){

    this.isElectronEnv = false;
    this.electron = null;

    try { 
      this.electron = window.require('electron');
    } catch (error) {
      console.error(error.message || 'Error')
    }

    if(this.electron){

      this.isElectronEnv = true;

      // Using electron APIs
      // this.ipcRenderer = this.electron.ipcRenderer;

      // Using node APIs
      // this.fs = this.electron.remote.require('fs');

    }

  }
  
}

export default new Electron();