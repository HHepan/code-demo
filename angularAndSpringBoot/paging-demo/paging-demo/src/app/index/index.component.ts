import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Page} from '../../common/page';
import {Student} from '../../entity/student';
import {CommonService} from '../../service/common.service';
import {StudentService} from '../../service/student.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  queryForm = new FormGroup({});
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
    this.queryForm.addControl(this.keys.name, new FormControl());
    this.queryForm.addControl(this.keys.sno, new FormControl());
    // 订阅参数变化
    this.route.params.subscribe(params => {
      this.params = params;
      // tslint:disable-next-line:no-non-null-assertion
      this.queryForm.get(this.keys.name)!.setValue(params[this.keys.name]);
      // tslint:disable-next-line:no-non-null-assertion
      this.queryForm.get(this.keys.sno)!.setValue(params[this.keys.sno]);
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

  /**
   * 查询按钮被按下
   */
  onSubmit(queryForm: FormGroup): void {
    this.reload({...this.params, ...queryForm.value});
  }

}
