---
id: 91
title: Migração para Macintosh
publishedAt: 2006-07-01T15:04:17-03:00
type: Post
ogImage: /images/og-images/91.png

permalink: /2006/07/01/migracao-para-macintosh/
dsq_thread_id:
  - "3270476022"
categories:
  - mac
tags:
  - mac
---
[Momento Caparica](http://sinistras.aranha.com.br): Muitos que estão habituados a PCs e se migram para o Mac OS apresentam diversas dúvidas.

**Teclas de atalho: maçã mais o quê? Option?**  
[Solução definitiva de tudo isso.](http://creativebits.org/keyboard_shortcuts_in_os_x)

**Aplicativos no menubar**  
[Lista com vários](http://menu.jeweledplatypus.org/). Eu uso e recomendo o [Gmail Notifier](http://mail.google.com/mail/help/notifier/index.html) e o [BloglinesMenu](http://www.runstate.com/proj/blmenu.html). Interessantíssimo.

**Migrando do Linux para o Mac**  
[Dicas](http://www.aurelio.net/mac/) pelo [Aurelio](http://aurelio.net).

**Link extra**  
[Trocentas formas](http://macpress.uol.com.br/forum/viewtopic.php?t=17820&highlight=) de ejetar um CD :)

**Insatisfeito com o Dashboard?**  
Removê-lo é fácil. Abra o terminal do Mac OS (está dentro da pasta Aplicativos) e digite:

```defaults write com.apple.dashboard mcx-disabled -boolean YES
killall Dock 
```

Para trazê-lo de volta:

```defaults write com.apple.dashboard mcx-disabled -boolean YES
killall Dock 
```
