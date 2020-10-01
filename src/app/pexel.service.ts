import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



const httpoptions = {
  headers : new HttpHeaders({
    'Authorization':'563492ad6f91700001000001ef7578704248411d957a97cbf3a759b0'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PexelService {

  constructor(private http : HttpClient) { }

  getdata(search,page) : Observable<any> {
    console.log(search,page);
    

    const url = "https://api.pexels.com/v1/search?query="+search+"&per_page="+page+"";
  

    return this.http.get<any>(url,httpoptions).pipe(catchError(this.handleerror))
  }
  handleerror(error) {
    return throwError(error.message || "server error")
  }
}
