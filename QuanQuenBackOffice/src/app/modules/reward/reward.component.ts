import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storeDto } from 'src/app/_shared/models/StoreDto/storeDto';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent {
  @ViewChildren('iconformdisplay') iconformdisplays!: QueryList<ElementRef>;
  @ViewChildren('navbaritem') navbaritems!: QueryList<ElementRef>;
  @ViewChild('filtertable') filtertable!: ElementRef<HTMLElement>;
  
  section: string = "";

  listStore : storeDto[] = [
    {
      StoreId: 'S01',
      StoreName: "Quán Ăn Nhà Làm",
      Address: '4 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '2am - 6pm',
      Status: 'Active'
    },
    {
      StoreId: 'S02',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    },
    {
      StoreId: 'S03',
      StoreName: "Quán Ăn Ôn Nghĩa",
      Address: '102 Lê Văn Việt',
      StorePhone: '0363 106 151',
      OpenHours: '8am - 6pm',
      Status: 'Active'
    },
    {
      StoreId: 'S04',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
    ,
    {
      StoreId: 'S05',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
    ,
    {
      StoreId: 'S06',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
    ,
    {
      StoreId: 'S07',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
    ,
    {
      StoreId: 'S08',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
    ,
    {
      StoreId: 'S09',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
    ,
    {
      StoreId: 'S10',
      StoreName: "Quán Ăn Nam Bộ",
      Address: '12 Bình Lợi',
      StorePhone: '0363 106 151',
      OpenHours: '10am - 6pm',
      Status: 'Active'
    }
  ];
  listField : any[] = [
    {field : 'StoreId', header:'StoreId'},
    {field : 'StoreName', header:'StoreName'},
    {field : 'Address', header:'Address'},
    {field : 'StorePhone', header:'StorePhone'},
    {field : 'OpenHours', header:'OpenHours'},
    {field : 'Status', header:'Status'}
  ]

  listNav: string[] = ['Food', 'Media', 'Other tools', 'Table', 'Opening Hours', 'Referral User'];

  constructor(private route: ActivatedRoute){}
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
