import { NavController, NavParams , Slides} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

/*
  Generated class for the InterfaceClient page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-interface-client',
  templateUrl: 'interface-client.html'
})
export class InterfaceClientPage {
   @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSegment = 'café';
    this.slides = [
      {
        id: "café",
      },
      {
        id: "thé",
      },
      {
        id: "soda",
      },
      {
        id: "jus",
      },
      {
        id: "déj",
      },
      {
        id: "autre",
      }
    ];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterfaceClientPage');
  }
  onSegmentChanged(segmentButton) {
    let selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex, 500);
  }

  onSlideChanged(slider) {
    if (slider._activeIndex < this.slides.length && slider._activeIndex >= 0) {
      let currentSlide = this.slides[slider._activeIndex];
      this.selectedSegment = currentSlide.id;
    }
  }

}
