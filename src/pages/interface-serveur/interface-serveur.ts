import { NavController, NavParams , MenuController, Slides} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';



/*
  Generated class for the InterfaceServeur page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-interface-serveur',
  templateUrl: 'interface-serveur.html'
})
export class InterfaceServeurPage {

  items = [
    'Commande 1 ',
    'Commande 2 ',
    'Commande 3 ',
    'Commande 4 ',
    'Commande 5 ',
    'Commande 6 ',
    'Commande 7 ',
    'Commande 8 ',
    'Commande 9 ',
    'Commande 10 '
    
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;
  menu;

  constructor(public navCtrl: NavController, public navParams: NavParams,menu: MenuController) {
    
    this.selectedSegment = 'Commandes';
    this.menu = menu;
    this.slides = [
      {
        id: "Commandes",
        
      },
      {
        id: "Historiques",
      },
      {
        id: "Statistiques",
      }
    ];
  

     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterfaceServeurPage');
  }
    toggleMenu() {
   this.menu.toggle();
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
