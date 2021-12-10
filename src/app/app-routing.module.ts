import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'articles'
  },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  {
    path: '**', redirectTo: 'articles'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
La configurazione del percorso del modulo articles contiene un solo percorso che
attiva ArticlesComponent. Il percorso della route è impostato su una stringa vuota per
indicare che è la route predefinita del modulo di routing.
ArticlesComponent verrà attivato ogni volta che quel modulo viene caricato.

La seconda route del modulo di routing principale contiene un oggetto di configurazione
della route che non attiva un componente ma piuttosto un modulo.
Utilizza il metodo loadChildren per caricare ArticlesModule in modo dinamico
quando la navigazione attiva il percorso degli articoli.

Lazy loading: migliora l'avvio e le prestazioni complessive di un'applicazione
angolare. Crea un bundle separato per ogni modulo lazy-loaded,
che viene caricato su richiesta, riducendo la dimensione del
bundle finale e il consumo di memoria dell'app.
 */