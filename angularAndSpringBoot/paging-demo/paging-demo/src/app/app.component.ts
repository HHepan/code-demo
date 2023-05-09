import {Component, OnInit} from '@angular/core';
import {Student} from '../entity/student';
import {Page} from '../common/page';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonService} from '../service/common.service';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  params: Params = [];
  pageData = new Page<Student>();
  keys = {
    page: 'page',
    size: 'size',
    name: 'name',
    sno: 'sno',
  };
  title = 'paging-demo';

  constructor(private commonService: CommonService,
              private route: ActivatedRoute,
              private studentService: StudentService) {}

  ngOnInit(): void {
    // 订阅参数变化
    this.route.params.subscribe(params => {
      this.params = params;
      this.studentService.page({
        page: this.commonService.stringToIntegerNumber(params[this.keys.page], 0) as number,
        size: this.commonService.stringToIntegerNumber(params[this.keys.size], 10) as number,
        name: params[this.keys.name],
        sno: params[this.keys.sno],
      })
        .subscribe(data => {
          this.pageData = data;
        });
    });
    console.log('this.data', this.pageData);
  }

  /**
   * 点击分页
   * @param page 当前页
   */
  onPageChange(page: number): void {
    this.reload({...this.params, ...{page}});
  }

  /**
   * 点击改变每页大小
   * @param size 每页大小
   */
  onSizeChange(size: number): void {
    this.reload({...this.params, ...{size}});
  }

  /**
   * 查询
   * @param params page: 当前页 size: 每页大小
   */
  reload(params = this.params): void {
    this.commonService.reloadByParam(params).then();
  }
}
