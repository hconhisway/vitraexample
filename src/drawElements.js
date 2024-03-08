import { DependentElement } from '@living-papers/components';
import drawLaserTrails from './drawLaserTrails';
// import axios from 'axios';

export default class DrawElements extends DependentElement {
  static get dependencies() {
    return [
      {
        name: 'd3',
        version: '4',
        main: 'build/d3.min.js'
      }
    ];
  }

  static get properties() {
    return {
      laserTrails: { type: String },
      currentVis: { type: String },
    };
  }

  constructor() {
    super();
    this.laserTrails = 0;
    this.currentVis = ''
    this.trailsData = null;
    this.switchingData = null;
    this.imageData = null;
  }

  async connectedCallback() {
    super.connectedCallback();
    await Promise.all([this.loadImageData(), this.loadTrailsData()]);
  }

  async loadTrailsData() {
    // const responseTrail = await axios.get("https://raw.githubusercontent.com/hconhisway/moviz-client/oldVersion/static/mergedLaser.json");
    const responseTrail = await fetch("../assets/mergedLaser.json");
    const dataTrail = await responseTrail.json();
    console.log(dataTrail);
    this.trailsData = dataTrail.trails_block; // Assuming the JSON structure
    console.log(this.trailsData);
  }

  async loadImageData() {
    // const responseImage = await axios.get("https://raw.githubusercontent.com/hconhisway/moviz-client/oldVersion/static/switchingHistory.json");
    const responseImage = await fetch("../assets/switchingHistory.json");
    const dataImage = await responseImage.json();
    this.switchingData = dataImage.imageChanges; // Assuming the JSON structure
  }

  // async loadImages() {
  //   // 示例: 异步获取图片URL列表
  //   const response = await fetch('https://virtranoteapp.sci.utah.edu/api/images');
  //   const images = await response.json();
  //   this.imageData = images;
  //   console.log(this.imageData);
  // }

  willUpdate(changedProperties) {
    if (this._drawlaser) {
      changedProperties.forEach((_, key) => {
        this._drawlaser[key](this[key]);
      });
    }
    // if (changedProperties.has('laserTrails') && changedProperties.has('currentVis')) {
    //   if (this._drawlaser) {
    //     this._drawlaser['seriesConnect'](changedProperties);
    //   }
    // } else {
    //   if (this._drawlaser) {
    //     changedProperties.forEach((_, key) => {
    //       this._drawlaser[key](this[key]);
    //     });
    //   }
    // }
  }

  parseLaserTrails() {
    return this.laserTrails.split(',').map(Number);
  }

  render() {
    const d3 = this.getDependency('d3');
    if (!d3) return;
    if (!this._root) {
        // initialize component
        this._root = document.createElement('div');
        this._root.setAttribute('class', 'quad');
        this._drawlaser = drawLaserTrails(d3, this._root, this.trailsData, this.switchingData, this.imageData);
    }
    return this._root;
  }
}
