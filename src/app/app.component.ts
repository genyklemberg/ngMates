import {
  Component, ElementRef, OnInit, ViewChild
} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
// import {WINDOW} from 'ngx-window-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChildren('video_block, about, whyNg, skills, portfolio, contact') secItems: QueryList<ElementRef>;
  // getActiveElements: {activeElem: any; position: number}[];
  @ViewChild('video_block') main_block: ElementRef;

  innerWidth: any;
  showSuccessAlert = false;
  items: AngularFireList<any>;
  msgVal = '';
  screenVideo = '../assets/media/office.mp4';

  constructor(public af: AngularFireDatabase, private meta: Meta, private title: Title, private el: ElementRef) {

    // this.innerWidth = (window.screen.width);
    // this.innerWidth = this.body;
    // console.log(this.innerWidth);
    this.items = af.list('/messages');


    title.setTitle('ngMates - we are Angular dedicated team');

    meta.addTags([
      { name: 'author',   content: 'ngmates.com'},
      { name: 'type', content: 'website'},
      { name: 'description', content: 'This is our Angular SEO-based App, enjoy it!' },
      { name: 'image', content: 'https://ngmates.com/assets/images/_about_gif.gif' },
      { name: 'og:author',   content: 'ngmates.com'},
      { name: 'og:type', content: 'website'},
      { name: 'og:description', content: 'This is our Angular SEO-based App, enjoy it!' },
      { name: 'og:image', content: 'https://ngmates.com/assets/images/_about_gif.gif' }
    ]);
  }

  ngOnInit() {
    this.innerWidth = this.main_block.nativeElement.offsetWidth;
    // this.getActiveElements = this.secItems.map(
    //   item => {
    //     const activeElem = item;
    //     const position = item.nativeElement.getBoundingClientRect().top;
    //     return {activeElem, position};
    //   }
    // );
  }

  Send(desc: {}) {
    this.items.push({message: desc});
    this.msgVal = '';
  }


  onSubmit(form: NgForm) {
    this.Send(form.value);
    form.reset();
    this.showSuccessAlert = true;
    setTimeout(() => { this.showSuccessAlert = false; }, 3500);

  }


}
