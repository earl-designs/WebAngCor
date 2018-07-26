import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ShopItemForList } from '../../_models/shopItemForList';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-shop-item-card',
  templateUrl: './shop-item-card.component.html',
  styleUrls: ['./shop-item-card.component.css']
})
export class ShopItemCardComponent implements OnInit {
  @Input() shopItem: ShopItemForList;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
