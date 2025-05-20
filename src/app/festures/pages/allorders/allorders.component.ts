import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Ishipping } from '../../interfaces/orderData/ishipping';
import { OrderService } from '../../../core/services/order/order.service';
import { CurrencyPipe, DatePipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-allorders',
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent {

 private readonly _orderService= inject(OrderService)
  private readonly PLATFORM_ID=inject(PLATFORM_ID)
  Allorders!:Ishipping []
 


ngOnInit(): void {
  this.getAllOrders()
}

  getAllOrders():void{
    if(isPlatformBrowser(this.PLATFORM_ID)){
      const userId =  localStorage.getItem('userId') as string
        this._orderService.getUserOrders(userId).subscribe({
          next:(res)=>{
            console.log(res);
            this.Allorders = res.sort(
              (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          }
        })
    }
  }
  
}
