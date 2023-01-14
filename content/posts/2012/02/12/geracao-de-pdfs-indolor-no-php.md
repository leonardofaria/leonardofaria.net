---
id: 1264
title: Geração de PDFs indolor no PHP
publishedAt: 2012-02-12T15:04:44-02:00
type: Post
ogImage: /images/og-images/1264.png

permalink: /2012/02/12/geracao-de-pdfs-indolor-no-php/
dsq_thread_id:
  - "5338836576"
categories:
  - php
tags:
  - php
---
Tempos atrás escrevi um artigo sobre como gerar PDF dentro do Rails usando a gem [wicked_pdf](https://github.com/mileszs/wicked_pdf) e o [wkhtmltopdf](http://code.google.com/p/wkhtmltopdf). Como escrevi no [post anterior](https://leonardofaria.net/2011/08/31/geracao-de-pdfs-indolor-no-rails-3/), o wkhtmltopdf usa Webkit, a engine de renderização do Safari / Chrome para gerar a visualização do documento. Isso o torna superior se comparado com bibliotecas do PHP como o FPDF, pois, geralmente, essa bibliotecas possuem dificuldades para reproduzir efeitos de CSS.

Em um novo projeto, estou usando novamente o wkhtmltopdf, mas agora dentro do PHP. [No post anterior](https://leonardofaria.net/2011/08/31/geracao-de-pdfs-indolor-no-rails-3/), indiquei que você pode usar o binário disponível no site, entretanto no servidor atual, tive alguns problemas com isso. Então, se possível, compile o wkhtmltopdf direto da fonte.

### Compilação passo-a-passo

Instale em seu servidor alguns pacotes que irá precisar:

```
apt-get install openssl build-essential xorg libssl-dev libxrender-dev git-core
```

&#8230; e obtenha o código fonte recente do wkhtmltopdf:

```
git clone git://github.com/antialize/wkhtmltopdf.git wkhtmltopdf
git clone git://gitorious.org/+wkhtml2pdf/qt/wkhtmltopdf-qt.git wkhtmltopdf-qt
```

Veja, para usar o wkhtmltopdf você precisará do QT. Nesse caso também vamos compilá-lo manualmente:

```
cd wkhtmltopdf-qt
git checkout staging
QTDIR=. ./bin/syncqt
./configure -nomake tools,examples,demos,docs,translations -opensource -prefix "../wkqt"
make -j3 && make install
cd ..
```

Com o QT gerado, você finalmente poderá compilar o wkhtmltopdf:

```
cd wkhtmltopdf
../wkqt/bin/qmake
make && make install
```

Não inventei a [receita](http://code.google.com/p/wkhtmltopdf/wiki/compilation) acima, mas ela funcionou perfeitamente no Debian. Com a compilação a pasta /usr/bin ganhou 2 novos executáveis: wkhtmltopdf e wkhtmltoimage. Com isso você já pode usar o utilitário pelo shell. Se quiser testá-lo, experimente:

### PHP

Dentro do próprio site do wkhtmltopdf há uma [classe em PHP](http://code.google.com/p/wkhtmltopdf/wiki/IntegrationWithPhp) para utilizar o aplicativo dentro do seu site, entretanto, optei por uma [classe disponível](https://github.com/aur1mas/Wkhtmltopdf) no Github. Um simples exemplo, tirado do próprio repositório:

```php
<?php
try {
	$wkhtmltopdf = new Wkhtmltopdf(array('path' => APPLICATION_PATH . '/../public/uploads/'));
	$wkhtmltopdf->setTitle("Title");
	$wkhtmltopdf->setHtml("Content");
	$wkhtmltopdf->output(Wkhtmltopdf::MODE_DOWNLOAD, "file.pdf");
} catch (Exception $e) {
	echo $e->getMessage();
}
?>
```

O que o exemplo não mostra é como definir uma mensagem de rodapé. Só depois de algum tempo, percebi que o wkhtmltopdf busca um arquivo externo. No meu aplicativo, defino o rodapé dinamicamente:

```php
$wkhtmltopdf->setFooterHtml("footer.php?msg='Hello World!'");
```
