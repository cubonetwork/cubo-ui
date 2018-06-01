import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';
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
  selector: 'page-carousel-example',
  templateUrl: 'page-carousel-example.html'
})
export class PageCarouselExampleComponent { 
  @ViewChild('carousel') private carousel: CbCarouselComponent;

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

  codeTs = hljs.highlightAuto(`
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

  next() {
    this.carousel.next();
  }

  prev() {
    this.carousel.prev();
  }
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
