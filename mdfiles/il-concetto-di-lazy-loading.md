---
title: Il concetto di Lazy Loading
description: Spieghiamo il download di script on demand
published: true
---

# Il concetto di Lazy Loading
Immaginiamo un’applicazione organizzata a tab. Il primo tab presenta una rubrica di contatti, il secondo tab un calendar per la gestione degli eventi e un terzo tab che funge da file system remoto. Ciascun tab presenta uno script JavaScript di inizializzazione (che per comodità chiameremo contact.js, calendar.js e filemanager.js).

Come è facile intuire non è molto sensato obbligare il client a scaricare tutti i file all’inizializzazione dell’applicazione in quanto non è detto che l’utente corrente debba visualizzare tutti i tab disponibili.

Con il Lazy Loading è possibile forzare il download dello script di inizializzazione di un determinato tab solamente nel momento in cui l’utente preme sul tab. Ovviamente un successivo click su un tab già precedentemente aperto, non farà scaricare nuovamente lo script, in quanto già scaricato precedentemente.
