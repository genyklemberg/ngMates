import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';

// Import RxJs required methods
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';



@Injectable()
export class MailService {

  // private apiUrl = 'https://us-central1-flyhigh-5416b.cloudfunctions.net/';
  private apiUrl = 'http://localhost:5000/ngmates-2bcd1/us-central1/';


  constructor(private _http: HttpClient,
              private db: AngularFireDatabase) { }

  sendFormData(text) {
    const data = {
      name: 'name',
      from: 'y,potupa@gmail',
      subject: 'ngmates',
      text: 'some info here'
    };
    const method = 'httpEmail';
    const _headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.apiUrl + method, data, { headers: _headers })
      .toPromise()
      .then(_ => {
        return;
      })
      .catch(this._handleError);
  }

  private _handleError(error) {
    return Promise.reject(error.message ? error.message : error.toString());
  }
}
