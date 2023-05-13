import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';

@Component({
  template: ''
})
export class DialogEntryComponent {
  url: UrlSegment[];
  constructor(public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.url = this.route.snapshot.url;
    this.openDialog();
    // 检测全局路由变动
    this.router.events.subscribe(event => {
      // 每当路由发生变动时，检测当前是否打开了DialogEntryComponent
      if (this.getCurrentRoutes()[0].component !== null) {
        if (this.getCurrentRoutes()[0].component.name !== 'DialogEntryComponent') {
          // 如果当前打开了DialogEntryComponent，就把弹窗关闭
          this.closeDialog();
        }
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(this.route.snapshot.data.component, {
      width: '300px',
      data: {
        id: 1
      }
    });
    const relativeBackUrl = this.getRelativeBackUrl();
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([relativeBackUrl], { relativeTo: this.route });
    });
  }
  private getRelativeBackUrl(): string {
    let result = '';
    for (const item of this.url) {
      result = result + '../';
    }
    return result;
  }
  getCurrentRouteState(): any {
    return this.router.routerState;
  }
  // 通过路由获取到当前打开的组件
  getCurrentRoutes(): any {
    const routeState = this.getCurrentRouteState();
    const routes = [];
    let state = routeState.root;

    while (state) {
      if (state.children && state.children.length) {
        state = state.children[0];
      } else {
        routes.push(state);
        state = null;
      }
    }
    return routes;
  }

  private closeDialog(): void {
    this.dialog.closeAll();
  }
}

// .cdk-overlay-container {
//   position: fixed;
//   z-index: 1000;
// }
