import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { response } from 'express';
import { ApiService } from 'src/app/_shared/_services/ApiService';
import { storeDto } from 'src/app/_shared/models/StoreDto/storeDto';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  @ViewChildren('iconformdisplay') iconformdisplays!: QueryList<ElementRef>;
  @ViewChildren('navbaritem') navbaritems!: QueryList<ElementRef>;
  @ViewChild('filtertable') filtertable!: ElementRef<HTMLElement>;
  
  section: string = "";

  listStore : storeDto[] = [];
  listField : any[] = [
    {field : 'StoreId', header:'StoreId'},
    {field : 'StoreName', header:'StoreName'},
    {field : 'Address', header:'Address'},
    {field : 'StorePhone', header:'StorePhone'},
    {field : 'OpenHours', header:'OpenHours'},
    {field : 'Status', header:'Status'}
  ]

  listNav: string[] = ['Food', 'Media', 'Other tools', 'Table', 'Opening Hours', 'Referral User'];

  constructor(private apiService: ApiService){}

  ngOnInit() : void {
    this.apiService.Get('store/api/Store/GetListAllStore?PageNumber=1&PageSize=10').subscribe( 
      response => {
        console.log(response);
        console.log('asdas');
    }, error => {
        console.log(error);
    })
  }

  clickItemNavbar(event: Event) {
    const currentTarget = event?.currentTarget as HTMLElement;
    if(currentTarget.classList.contains('btn-nav-active')) {

    } else {
      this.navbaritems.forEach( x => {
        const navbaritem = x.nativeElement as HTMLElement;
        if(navbaritem.classList.contains('btn-nav-active')) {
          navbaritem.classList.remove('btn-nav-active');
        }
      })

      currentTarget.classList.add('btn-nav-active');
    }
  }

  clickIconFilter(event: Event) {
    const curTarget = event.currentTarget as HTMLElement;
    const filterTable = this.filtertable.nativeElement;

    if (curTarget.classList.contains('btn-active')) {
        curTarget.classList.remove('btn-active');
        filterTable.style.height = '0'; 
        // filterTable.style.borderTop = 'none';
    } else {
        curTarget.classList.add('btn-active');
        const scrollHeight = filterTable.scrollHeight + 'px';
        filterTable.style.height = scrollHeight; 
    }
}


  clickIconFormDisplay(event: Event) {
    const currentTarget = event?.currentTarget as HTMLElement;
    this.iconformdisplays.forEach(x => {
      const icon = x.nativeElement as HTMLElement;
      if(icon.classList.contains('btn-active')) {
        icon.classList.remove('btn-active');
      }
    })
    currentTarget.classList.add('btn-active');
  }

}
