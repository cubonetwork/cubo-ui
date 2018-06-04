import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CbCarouselComponent } from 'cubo-ui';
import * as hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';
const languages = ['html', 'typescript', 'css'];

@Component({
  template: ``,
  selector: 'page-carousel'
})
export class PageCarouselComponent { }

@Component({
  selector: 'cb-carousel-dialog-example',
  template: `
  <h1 mat-dialog-title>Carousel in a Dialog</h1>
  <mat-dialog-content>
    <cb-carousel [width]="300" #carousel>
      <ng-container *cbCarouselItem>
        <div style="width: 300px; height: 230px; text-align: center; border: solid 1px rgba(177, 174, 179, 0.5); background-color: #fff; padding: 10px;">
          <h2>Bem-vindo ao Mapa de Relacionamentos!</h2>
          <h3>Precisando de contatos em uma corporate?</h3>
          <p>Você busca pelo nome da empresa e te
          mostramos quais founders do Cubo podem 
          te ajudar a fazer essa conexão</p>
          <button mat-button (click)="next()" color="primary">Próximo</button>
        </div>
      </ng-container>

      <ng-container *cbCarouselItem>
        <div style="width: 300px; height: 230px; text-align: center; border: solid 1px rgba(177, 174, 179, 0.5); background-color: #fff; padding: 10px;">
          <h2>Compartilhe seus contatos</h2>
          <p>O Mapa de Relacionamentos é uma
          rede colaborativa e, para começar a usá-la,
          você precisa contribuir compartilhando seus contatos.</p>
          <button mat-button (click)="prev()" color="primary">Anterior</button>
        </div>
      </ng-container>
    </cb-carousel>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close>FECHAR</button>
  </mat-dialog-actions>
  `
})
export class CarouselDialogExampleComponent {
  @ViewChild('carousel') private carousel: CbCarouselComponent;

  constructor(
    public dialogRef: MatDialogRef<CarouselDialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  next() {
    this.carousel.next();
  }

  prev() {
    this.carousel.prev();
  }
}

@Component({
  selector: 'page-carousel-example',
  templateUrl: 'page-carousel-example.html'
})
export class PageCarouselExampleComponent { 
  @ViewChild('simpleCarousel') private simpleCarousel: CbCarouselComponent;
  @ViewChild('imageCarousel') private imageCarousel: CbCarouselComponent;

  constructor(public dialog: MatDialog) {}

  codeSimpleHtml = hljs.highlightAuto(`
  <cb-carousel #carousel>
    <ng-container *cbCarouselItem>
      <div style="width: 300px; height: 230px; text-align: center; border: solid 1px rgba(177, 174, 179, 0.5); background-color: #fff; padding: 10px;">
        <h2>Bem-vindo ao Mapa de Relacionamentos!</h2>
        <h3>Precisando de contatos em uma corporate?</h3>
        <p>Você busca pelo nome da empresa e te
        mostramos quais founders do Cubo podem 
        te ajudar a fazer essa conexão</p>
        <button mat-button (click)="next()">Próximo</button>
      </div>
    </ng-container>

    <ng-container *cbCarouselItem>
      <div style="width: 300px; height: 230px; text-align: center; border: solid 1px rgba(177, 174, 179, 0.5); background-color: #fff; padding: 10px;">
        <h2>Compartilhe seus contatos</h2>
        <p>O Mapa de Relacionamentos é uma
        rede colaborativa e, para começar a usá-la,
        você precisa contribuir compartilhando seus contatos.</p>
        <button mat-button (click)="prev()">Anterior</button>
      </div>
    </ng-container>
  </cb-carousel>`, languages).value;

  codeSimpleTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  /**
   * @title Simple carousel
   */
  @Component({
    selector: 'carousel-simple',
    templateUrl: 'carousel-simple.html',
    styleUrls: ['carousel-simple.css']
  })
  export class CarouselSimpleComponent {
    @ViewChild('carousel') private carousel: CbCarouselComponent;

    next() {
      this.carousel.next();
    }
  
    prev() {
      this.carousel.prev();
    }
  }`, languages).value;

  codeCss = hljs.highlightAuto(`
  /** No CSS for this example */
  `, languages).value;

  nextSimpleCarousel() {
    this.simpleCarousel.next();
  }

  prevSimpleCarousel() {
    this.simpleCarousel.prev();
  }

  codeImageHtml = hljs.highlightAuto(`
  <cb-carousel [showIndicators]="true" #carousel>
    <ng-container *cbCarouselItem>
      <img src="..." width="300" alt="Beatles">      
    </ng-container>
    <ng-container *cbCarouselItem>
      <img src="..." width="300" alt="Guns n' Roses">
    </ng-container>
    <ng-container *cbCarouselItem>
      <img src="..." width="300" alt="Nirvana">
    </ng-container>
  </cb-carousel>
  <div style="display: flex; justify-content: space-between;">
    <button mat-button color="primary" (click)="prev()">Anterior</button>
    <button mat-button color="primary" (click)="next()">Próximo</button>
  </div>`, languages).value;

  codeImageTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  /**
   * @title Image carousel
   */
  @Component({
    selector: 'carousel-image',
    templateUrl: 'carousel-image.html',
    styleUrls: ['carousel-image.css']
  })
  export class CarouselImageComponent {
    @ViewChild('carousel') private carousel: CbCarouselComponent;

    next() {
      this.carousel.next();
    }
  
    prev() {
      this.carousel.prev();
    }
  }`, languages).value;

  nextImageCarousel() {
    this.imageCarousel.next();
  }

  prevImageCarousel() {
    this.imageCarousel.prev();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CarouselDialogExampleComponent, {
      width: '348px'
    });
  }

  codeDialogHtml = hljs.highlightAuto(`
  <button mat-raised-button (click)="openDialog()">Carousel on dialog</button>
  `, languages).value;
  
  codeDialogTs = hljs.highlightAuto(`
  import {Component} from '@angular/core';

  /**
   * @title Dialog carousel
   */
  @Component({
    selector: 'carousel-dialog',
    templateUrl: 'carousel-dialog.html',
    styleUrls: ['carousel-dialog.css']
  })
  export class CarouselSimpleComponent {
    openDialog() {
      const dialogRef = this.dialog.open(CarouselDialogExampleComponent, {
        width: '348px'
      });
    }
  }

  /**
   *  Component which will be opened inside the dialog
   */
  @Component({
    selector: 'carousel-dialog-example',
    template: \`
    <h1 mat-dialog-title>Carousel in a Dialog</h1>
    <mat-dialog-content>
      <cb-carousel [width]="300" #carousel>
        <ng-container *cbCarouselItem>
          <div style="width: 300px; height: 230px; text-align: center; border: solid 1px rgba(177, 174, 179, 0.5); background-color: #fff; padding: 10px;">
            <h2>Bem-vindo ao Mapa de Relacionamentos!</h2>
            <h3>Precisando de contatos em uma corporate?</h3>
            <p>Você busca pelo nome da empresa e te
            mostramos quais founders do Cubo podem 
            te ajudar a fazer essa conexão</p>
            <button mat-button (click)="next()" color="primary">Próximo</button>
          </div>
        </ng-container>
  
        <ng-container *cbCarouselItem>
          <div style="width: 300px; height: 230px; text-align: center; border: solid 1px rgba(177, 174, 179, 0.5); background-color: #fff; padding: 10px;">
            <h2>Compartilhe seus contatos</h2>
            <p>O Mapa de Relacionamentos é uma
            rede colaborativa e, para começar a usá-la,
            você precisa contribuir compartilhando seus contatos.</p>
            <button mat-button (click)="prev()" color="primary">Anterior</button>
          </div>
        </ng-container>
      </cb-carousel>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>FECHAR</button>
    </mat-dialog-actions>
  \`
  })
  export class CarouselDialogExampleComponent {
    @ViewChild('carousel') private carousel: CbCarouselComponent;
  
    constructor(
      public dialogRef: MatDialogRef<CarouselDialogExampleComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    next() {
      this.carousel.next();
    }
  
    prev() {
      this.carousel.prev();
    }
  }
  `, languages).value;
}

@Component({
  selector: 'page-carousel-api',
  templateUrl: 'page-carousel-api.html'
})
export class PageCarouselApiComponent { 
  import_content = hljs.highlightAuto(`
  import { CbCarouselModule } from 'cubo-ui';

  @NgModule({
    imports: [
      CbCarouselModule
    ]
  })
  export class ExampleModule { }
  `, ['nohighlight']).value;
}
