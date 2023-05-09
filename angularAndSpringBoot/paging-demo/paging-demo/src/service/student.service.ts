import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Page} from '../common/page';
import {Student} from '../entity/student';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'student';
  constructor(private httpClient: HttpClient) { }

  page(param: { page: number; size: number; name?: string; sno?: string; }): Observable<Page<Student>>  {
    let httpParams = new HttpParams()
      .append('page', param.page.toString())
      .append('size', param.size.toString());
    if (param.name) {
      httpParams = httpParams.append('name', param.name);
    }
    if (param.sno) {
      httpParams = httpParams.append('sno', param.sno);
    }

    return this.httpClient.get<Page<Student>>(`${this.url}/page`, {params: httpParams})
      .pipe(map(data => new Page<Student>(data).toObject(d => new Student(d))));
  }
}
