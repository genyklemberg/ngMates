import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {keyframes} from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-loading',
  styles: [`
    .spinner {
      display: inline-block;
      opacity: 1;
      border: 3px solid rgba(0,0,0,.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s easy-in-out infinite;
      -webkit-animation: spin 1s easy-in-out infinite;
      height: 100px;
      width: 100px;
    }
    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    .center {
      text-align: center;
    }
  `],
  template: `<div class="center" [ngStyle]="_style">
                <div [ngStyle]='_size' class='spinner'></div>
             </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Loading {
  _style: Object;
  _size: Object;

  @Input()
  src: string = '';

  @Input('style')
  set style(i_style: Object) {
    this._style = i_style;
  }

  @Input('size')
  set size(i_size) {
    this._size = {
      opacity: 1,
      height: i_size,
      width: i_size
    };
  }
}
