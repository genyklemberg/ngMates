import {
  Component, ElementRef, OnInit, ViewChild
} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('video_block') main_block: ElementRef;

  innerWidth: any;
  showSuccessAlert = false;
  items: AngularFireList<any>;
  screenVideo = '../assets/media/office.mp4';
  private apiUrl = 'https://us-central1-ngmates-2bcd1.cloudfunctions.net';

  constructor(public af: AngularFireDatabase, private meta: Meta, private title: Title, private el: ElementRef, private _http: HttpClient) {

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

    window.addEventListener('scroll', function(){

      /*About title*/

      let aboutTitle = document.getElementById('about-title');
      let aboutTitlePos = aboutTitle.getBoundingClientRect().top;
      let scrollpos = window.scrollY;
      if(aboutTitlePos <= 800) {
        aboutTitle.classList.add('animation');
      } else {
        aboutTitle.classList.remove('animation');
      }

      /*About Img*/

      let aboutImg = document.getElementById('about-img');
      let aboutImgPos = aboutImg.getBoundingClientRect().top;
      if(aboutImgPos <= 500) {
        aboutImg.classList.add('animation');
      } else {
        aboutImg.classList.remove('animation');
      }

      /*About text*/

      let aboutText = document.getElementById('about-text');
      let aboutTextPos = aboutText.getBoundingClientRect().top;
      if(aboutTextPos <= 500) {
        aboutText.classList.add('animation');
      } else {
        aboutText.classList.remove('animation');
      }

      /*Why angular*/

      let whyAngular = document.getElementById('why-angular');
      let whyAngularPos = whyAngular.getBoundingClientRect().top;
      if(whyAngularPos <= 1100) {
        whyAngular.classList.add('animation');
      } else {
        whyAngular.classList.remove('animation');
      }

      /*Responsive text*/

      let responsiveText = document.getElementById('responsive-text');
      let responsiveTextPos = responsiveText.getBoundingClientRect().top;
      if(responsiveTextPos <= 500) {
        responsiveText.classList.add('animation');
      } else {
        responsiveText.classList.remove('animation');
      }

      /*Responsive img*/

      let responsiveImg = document.getElementById('responsive-img');
      let responsiveImgPos = responsiveImg.getBoundingClientRect().top;
      if(responsiveImgPos <= 500) {
        responsiveImg.classList.add('animation');
      } else {
        responsiveImg.classList.remove('animation');
      }

       /*Realtime img*/

      let realtimeImg = document.getElementById('realtime-img');
      let realtimeImgPos = realtimeImg.getBoundingClientRect().top;
      if(realtimeImgPos <= 500) {
        realtimeImg.classList.add('animation');
      } else {
        realtimeImg.classList.remove('animation');
      }

       /*Realtime text*/

      let realtimeText = document.getElementById('realtime-text');
      let realtimeTextPos = realtimeText.getBoundingClientRect().top;
      if(realtimeTextPos <= 500) {
        realtimeText.classList.add('animation');
      } else {
        realtimeText.classList.remove('animation');
      }

      /*Data text*/

      let dataText = document.getElementById('data-text');
      let dataTextPos = dataText.getBoundingClientRect().top;
      if(dataTextPos <= 500) {
        dataText.classList.add('animation');
      } else {
        dataText.classList.remove('animation');
      }

      /*Data img*/

      let dataImg = document.getElementById('data-img');
      let dataImgPos = dataImg.getBoundingClientRect().top;
      if(dataImgPos <= 500) {
        dataImg.classList.add('animation');
      } else {
        dataImg.classList.remove('animation');
      }

      /*Animation img*/

      let animationImg = document.getElementById('animation-img');
      let animationImgPos = animationImg.getBoundingClientRect().top;
      if(animationImgPos <= 500) {
        animationImg.classList.add('animation');
      } else {
        animationImg.classList.remove('animation');
      }

      /*Animation text*/

      let animationText = document.getElementById('animation-text');
      let animationTextPos = animationText.getBoundingClientRect().top;
      if(animationTextPos <= 500) {
        animationText.classList.add('animation');
      } else {
        animationText.classList.remove('animation');
      }

      /*Reload img*/

      let reloadText = document.getElementById('reload-text');
      let reloadTextPos = reloadText.getBoundingClientRect().top;
      if(reloadTextPos <= 500) {
        reloadText.classList.add('animation');
      } else {
        reloadText.classList.remove('animation');
      }

      /*Reload text*/

      let reloadImg = document.getElementById('reload-img');
      let reloadImgPos = reloadImg.getBoundingClientRect().top;
      if(reloadImgPos <= 500) {
        reloadImg.classList.add('animation');
      } else {
        reloadImg.classList.remove('animation');
      }

      /*Services*/

      let servicesTitle = document.getElementById('service-title');
      let servicesTitlePos = reloadImg.getBoundingClientRect().top;
      if(servicesTitlePos <= 100) {
        servicesTitle.classList.add('animation');
      } else {
        servicesTitle.classList.remove('animation');
      }

      /*Development solution*/

      let devSolution = document.getElementById('dev-solution');
      let devSolutionPos = reloadImg.getBoundingClientRect().top;
      if(devSolutionPos <= 400) {
        devSolution.classList.add('animation');
      } else {
        devSolution.classList.remove('animation');
      }

      /* Web development*/

      let webDev = document.getElementById('web-dev');
      let webDevPos = reloadImg.getBoundingClientRect().top;
      if(webDevPos <= 400) {
        webDev.classList.add('animation');
      } else {
        webDev.classList.remove('animation');
      }

      /*Ui UX*/

      let uiUx = document.getElementById('ui-ux');
      let uiUxPos = reloadImg.getBoundingClientRect().top;
      if(uiUxPos <= 400) {
        uiUx.classList.add('animation');
      } else {
        uiUx.classList.remove('animation');
      }

      let softIntegr = document.getElementById('soft-integr');
      let softIntegrPos = reloadImg.getBoundingClientRect().top;
      if(softIntegrPos <= 400) {
        softIntegr.classList.add('animation');
      } else {
        softIntegr.classList.remove('animation');
      }

      let seo = document.getElementById('seo');
      let seoPos = reloadImg.getBoundingClientRect().top;
      if(seoPos <= 400) {
        seo.classList.add('animation');
      } else {
        seo.classList.remove('animation');
      }

      let crossPlatf = document.getElementById('cross-platf');
      let crossPlatfPos = reloadImg.getBoundingClientRect().top;
      if(crossPlatfPos <= 400) {
        crossPlatf.classList.add('animation');
      } else {
        crossPlatf.classList.remove('animation');
      }

      let domain = document.getElementById('domain');
      let domainPos = reloadImg.getBoundingClientRect().top;
      if(domainPos <= 400) {
        domain.classList.add('animation');
      } else {
        domain.classList.remove('animation');
      }

      let support = document.getElementById('support');
      let supportPos = reloadImg.getBoundingClientRect().top;
      if(supportPos <= 400) {
        support.classList.add('animation');
      } else {
        support.classList.remove('animation');
      }

      /*latest-work*/
      let latestWork = document.getElementById('latest-work');
      let latestWorkPos = reloadImg.getBoundingClientRect().top;
      if(latestWorkPos <= -500) {
        latestWork.classList.add('animation');
      } else {
        latestWork.classList.remove('animation');
      }

      /*contact*/
      let contactTitle = document.getElementById('contact-title');
      let contactTitlePos = reloadImg.getBoundingClientRect().top;
      if(contactTitlePos <= -1300) {
        contactTitle.classList.add('animation');
      } else {
        contactTitle.classList.remove('animation');
      }


    });
  }

  Send(desc: {}) {
    this.items.push({message: desc});
    this.sendFormData(desc).then(_ => {
      this.showSuccessAlert = true;
      setTimeout(() => { this.showSuccessAlert = false; }, 3500);
      return;
    });
  }

  sendFormData(text) {
    const method = 'httpEmail';
    const _headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.apiUrl + method, text, { headers: _headers })
      .toPromise()
      .then(_ => {
        return;
      })
      .catch(this._handleError);
  }

  onSubmit(form: NgForm) {
    this.Send(form.value);
    form.reset();
  }

  private _handleError(error) {
    return Promise.reject(error.message ? error.message : error.toString());
  }
}
