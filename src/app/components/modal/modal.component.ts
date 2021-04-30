import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'smart-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">{{ title | uppercase }}</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" style="
    font-size: 18px;
    font-weight: bolder;">
        {{ content }}
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">FECHAR</button>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;
    @Input() title;
    @Input() content;
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'smart-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    @Input() name = 'Sim TV Informa: ';
    @Input() title = 'Title modal';
    @Input() preContent = 'Pre conteudo'
    @Input() viewButtonLabel = 'Ver mais'
    @Input() content = 'Sem conteúdo';
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = this.name;
        modalRef.componentInstance.title = this.title;
        modalRef.componentInstance.content = this.content;
    }
}
