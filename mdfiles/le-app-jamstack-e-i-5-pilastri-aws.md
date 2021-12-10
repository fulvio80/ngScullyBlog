---
title: Le app JAMstack e i 5 pilastri AWS
description: Velocità Costo Scalabilità Manutenzione Sicurezza
published: true
---

# Le app JAMstack e i 5 pilastri AWS
Le app JAMstack soddisfano intrinsecamente la maggior parte se non tutti i 5 pilastri di AWS Well-Architected Framework . Questi sono concetti fondamentali che AWS considera per fornire un'infrastruttura veloce, sicura, ad alte prestazioni, resiliente ed efficiente.

Il fatto che tu stia servendo app JAMstack come file statici direttamente da un CDN (di solito) rende probabile che la tua app venga caricata molto velocemente. Sono finiti i giorni in cui il server doveva dedicare del tempo alla creazione della pagina prima di rispondere; ora servi la pagina come semplice HTML "così com'è" o con qualche tipo di idratazione lato client come vedresti con React .

Il più delle volte, i siti JAMstack funzioneranno a un prezzo inferiore rispetto alle controparti lato server. L'hosting di risorse statiche è economico e ora la tua pagina viene servita alla stessa velocità.

Dal momento che stai servendo i tuoi file da un hosting statico, probabilmente un CDN, questo ti dà praticamente automaticamente una scalabilità infinita. La maggior parte dei provider farà questa affermazione, il che significa che non avrai problemi a far entrare qualsiasi afflusso di persone che colpiscono il tuo sito attraverso la porta principale.

La base del tuo sito statico non è un server, il che significa che non è necessario mantenerlo. Che si tratti di Netlify, S3 o qualsiasi altro provider, il tuo HTML statico, CSS e JS vengono mantenuti senza problemi.

Raddoppiando la mancanza di server che devi mantenere personalmente, non devi preoccuparti tanto di bloccare i modi in cui le persone possono intromettersi.

Invece, dovrai concentrarti principalmente sulle autorizzazioni per bloccare i contenuti privati ​​e assicurare ai tuoi utenti che le loro informazioni personali non sono disponibili pubblicamente.