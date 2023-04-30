import { Component, OnInit } from '@angular/core';
import {BaseMenu} from '../../common/base-menu';
import { menus } from '../../common/menu.config';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus = new Array<BaseMenu>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    menus.forEach(menu => {
          this.menus.push(menu);
      });
  }

  getBackgroundColor(menu: BaseMenu): string | undefined {
    if (this.active(menu)) {
      return environment.color;
    }
    return;
  }

  getTextColor(menu: BaseMenu): string | undefined {
    if (this.active(menu)) {
      return 'white';
    }
    return;
  }

  /**
   * 判断当前菜单是否激活
   * @param menu 菜单
   */
  active(menu: BaseMenu): boolean {
    // 截取/的位置
    const start = this.router.url.indexOf('/');
    const end = this.router.url.indexOf('/', start + 1);

    // 定义主路由
    let mainRoute: string;

    // 根据是否有第2个/选择截取方式
    if (end !== -1) {
      mainRoute = this.router.url.substring(start + 1, end);
    } else {
      mainRoute = this.router.url.substring(start + 1, this.router.url.length);
    }

    // 判断当前路由是否激活
    return mainRoute === menu.url;
  }
}
