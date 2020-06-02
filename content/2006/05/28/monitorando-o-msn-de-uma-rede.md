---
id: 45
title: Monitorando o MSN de uma rede
date: 2006-05-28T17:57:30-03:00
author: Leonardo Faria
ogImage: /images/og-images/45.png
layout: post
guid: https://leonardofaria.net/2006/05/28/monitorando-o-msn-de-uma-rede/
permalink: /2006/05/28/monitorando-o-msn-de-uma-rede/
dsq_thread_id:
  - "1000136411"
categories:
  - linux
tags:
  - linux
  - msn
---
Esse artigo não tem tanto a ver com esse site, mas pode ajudar muitos admistradores de rede Linux.

O uso do MSN desenfreado pode acabar com a produtividade do trabalho em uma empresa, por exemplo. Aonde eu trabalho, implementamos uma solução interessante: um sniffer, que gera relatórios das conversas dos funcionários (o que não é tão ético assim) e que está instalado em nosso servidor de Internet (rodando Slackware Linux).  
<!--more-->


O software que usamos chama-se [im-snif](http://sourceforge.net/projects/im-snif/). Infelizmente, seu projeto não está documentado. Talvez essa seja a única documentação sobre ele.  
Após o [download](http://sourceforge.net/project/showfiles.php?group_id=92795&package_id=98290&release_id=353699) do software, instale-o com:  
`installpkg imsniff_0.04.tgz`

Após a instalação do software, vá até a pasta /linux, onde é para lá que o programa é copiado.  

```shell
cd /linux/
./build
```

A linha acima, `./build`, é usada para compilá-lo, aparentemente.  
Para executá-lo, faça:  
`./imsniff -cd log --dd log -p eth0 &`  
Através do comando `./imsniff -help`, obtém-se como executar o programa.

**[Update]** O [Ataliba](http://www.ataliba.eti.br) me sugeriu uma forma rápida de colocar o sniffer durante o boot. Cole o conteúdo a seguir em um arquivo chamado `rc.msniff`, dentro do `/etc/rc.d/`  

```shell
#!/bin/sh
 imsstart() {
    cd /linux/
	./imsniff -opcoes`

}  
case $1 in  
&#8220;start&#8221;)  
imsstart  
;;  
&#8220;stop&#8221;)  
killall -9 imsniff  
;;  
*)  
echo &#8220;Use: rc.imsniff start or stop &#8220;  
;;  
esac
```

Depois disso, acrescente `/etc/rc.d/rc.imsniff start` no arquivo `rc.local`, do diretório `/etc/rc.d` e seja feliz! (Ah, o arquivo tem que ter permissão de execução!)

**[Update 2]** Recebi um email ontem perguntando se analisei o código-fonte do sniffer, verificando se era seguro a sua execução. Não, não verifiquei.

**Mais do mesmo:**  
[Outra solução](http://www.slackwarenaveia.org/modules.php?name=Sections&op=viewarticle&artid=315) em sniffer. Chegamos a testá-la, mais ela não foi tão amiga assim.
