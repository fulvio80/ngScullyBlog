import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  posts: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;

  constructor(
    private scullyService: ScullyRoutesService
  ) { }

  ngOnInit(): void {
    this.routeSub =
    this.scullyService.available$.subscribe(posts => {
      this.posts = posts.filter(post => post.title);
      });
  }

  ngOnDestroy(): void {
this.routeSub?.unsubscribe();
}

}





/*
La proprietà $avaible di ScullyRoutesService chiama un osservable. 
Per recuperare il suo valore, dobbiamo abbonarci. La variabile 
dei post restituiti conterrà tutti i percorsi disponibili che sono 
stati generati da Scully. Per evitare di visualizzare percorsi diversi 
da quelli relativi ai post del blog, come il percorso di contatto, 
filtriamo i risultati dalla proprietà $available.
Con OnDestroy ci cancelliamo dal componente quando non esiste più.
*/ 
