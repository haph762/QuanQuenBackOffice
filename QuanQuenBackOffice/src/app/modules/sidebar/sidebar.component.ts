import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChildren('subnav') subnavs!: QueryList<ElementRef>;
  @ViewChild('container') container!: ElementRef<HTMLElement>;

  constructor(private router: Router){}

  navigateTo(page: string):void {
    this.router.navigate([`/${page}`]);
  }

  activeClickNav(event: Event) {
    const curTarget = event?.currentTarget as HTMLElement;
    const target = event.target as HTMLElement;
    const subNav = curTarget.querySelector('.sub-nav') as HTMLElement;
    const container = this.container.nativeElement;

    if(container.classList.contains('close-nav')) {
      container.classList.remove('close-nav');
    }

    if(curTarget === target || curTarget.contains(target)) {
    if(!curTarget.classList.contains('nav-item-active')) {
      curTarget.classList.add('nav-item-active');
    } else {
      curTarget.classList.remove('nav-item-active');
    }

    if (subNav) {
      const subNavItems = subNav.querySelectorAll('.sub-nav-item').length;
      let transitionDuration: string;
      subNavItems > 5 
        ?transitionDuration = (subNavItems / 12) + 's'
        :transitionDuration = (subNavItems / 8) + 's';
        
      subNav.style.transitionDuration = transitionDuration;

      if (subNav.classList.contains('show')) {
          subNav.style.height = '0';
          subNav.classList.remove('show');
      } else {
          subNav.style.height = subNav.scrollHeight + 'px';
          subNav.classList.add('show');
      }
    }
    }
  }
  
  activeClickMenu() {
    const container = this.container.nativeElement;

    const headerbar = document.querySelector('#headerbar') as HTMLElement;
    if (!headerbar) {
      
    } else {
      if(headerbar.style.left !== '4vw')
        headerbar.style.left = '4vw';
      else headerbar.style.left = 'calc(13vw + 3px)';
    }

    if (container.classList.contains('close-nav')) {
        container.classList.remove('close-nav');
    } else {
        container.classList.add('close-nav');
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(navItem => {
        const item = navItem as HTMLElement;
        if (item.classList.contains('nav-item-active')) {
          item.classList.remove('nav-item-active');
        }
    });

    this.subnavs.forEach(x => { 
      const subnav = x.nativeElement as HTMLElement;
      if(subnav.classList.contains('show')) {
        subnav.classList.remove('show');
        subnav.style.height = '0';
      }
    });
  }

  activeClickSubNav(event: Event) {
    event.stopPropagation();
    this.subnavs.forEach(x => {
      const subnavItems = x.nativeElement as HTMLElement;
      const items = subnavItems.querySelectorAll('.sub-nav-item'); 
      items.forEach(item => {
          if (item.classList.contains('sub-nav-item-active')) {
              item.classList.remove('sub-nav-item-active');
          }
      });
    });

    const currentTarget = event.currentTarget as HTMLElement;
  
    if (currentTarget.classList.contains('sub-nav-item-active')) {
      currentTarget.classList.remove('sub-nav-item-active');
    } else {
      currentTarget.classList.add('sub-nav-item-active');
    }
  }
}
