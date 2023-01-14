---
id: 836
title: O que é Ruby?
publishedAt: 2009-11-09T21:09:50-02:00
type: Post
ogImage: /images/og-images/836.png
layout: post
guid: https://leonardofaria.net/?p=836
permalink: /2009/11/09/o-que-e-ruby/
dsq_thread_id:
  - "1000136928"
categories:
  - academic
  - rubyonrails
tags:
  - academic
  - rubyonrails
---
A essa altura do campeonato todo mundo já deve saber o que vem a ser a linguagem Ruby. Minha monografia e meu trabalho de conclusão de curso da Faculdade foram sobre o [**autosimulado**](http://www.autosimulado.com.br). Na monografia fiz uma introdução sobre as características da linguagem Ruby, reproduzido abaixo:

## Ruby

A linguagem Ruby foi criada em 1993 pelo japonês Yukihiro “Matz” Matsumoto, com sua primeira versão pública lançada em 1995. Para Matz, o primeiro desejo é de Ruby tornar os programadores felizes, reduzindo o trabalho manual que precisasse ser feito. Segundo ele, o desenvolvimento de sistemas deveria enfatizar as necessidades do homem e não da máquina:

> Muitas pessoas, especialmente engenheiros de computação, focam nas máquinas. Eles pensam, “Fazendo isso, a máquina será mais rápida. Fazendo isso, a máquina será mais eficiente. Fazendo isso, a máquina irá fazer determinada coisa melhor”. Eles estão focando nas máquinas. Mas de fato nós precisamos focar nos humanos, em como os humanos lidam com programação ou operação das aplicações das máquinas. Nós somos os mestres. Elas são as escravas. (VENNERS, 2003).

Ruby é uma linguagem orientada a objetos, ou seja, qualquer variável é um objeto, mesmo classes e tipos que em muitas linguagens são designadas como primitivos. Por exemplo:

```ruby
putz "meu exemplo".upcase # imprimirá MEU EXEMPLO
```

<span className="hidden">more</span>

Acima, aplica-se o método upcase da classe String no objeto “meu exemplo”. Ruby é extensível: um objeto pode receber melhorias e novos métodos em tempo de execução.

```ruby
class Fixnum
  def +(numero)
    10
  end
end
```

No exemplo anterior, o método +() da classe Fixnum foi sobrescrito e retornará sempre 10. A linguagem apresenta tipagem dinâmica, conforme no exemplo abaixo:

```ruby
=> "meu exemplo"
>> minhavariavel.class
=> String
>> minhavariavel = 4 * 4
=> 16
>> minhavariavel.class
=> Fixnum
>> minhavariavel = 1000000 * 1000000
=> 1000000000000
>> minhavariavel.class
=> Bignum
```

No exemplo acima, ela recebeu alterações em sua tipagem em tempo de execução. São tipos de variáveis em Ruby:

  * Fixnum: inteiros com até o tamanho da palavra binária do processador menos 1 bit. Exemplos: 1, 81, 6589, 100;
  * Bignum: inteiros maiores que Fixnum. Exemplo: 1234567890;
  * Float: números decimais. Exemplos: 1.41, 1.0;
  * String: corresponde a uma cadeia de caracteres. Exemplo: “teste”;
  * Range: representa intervalos entre valores. Exemplos: 1..10 e a..z;
  * Expressão regular: representa uma expressão regular. Exemplos: /a/ ou /^\s*[a-z]/.

Ruby é uma linguagem simples e elegante: nela não é obrigatório o uso de parênteses, colchetes e chaves e além disso a sintaxe da linguagem é humana e intuitiva, refletindo o minimalismo descrito por Matz. Em um comparativo entre as sintaxes das linguagens Java e Ruby:

```java
// java
l = list.get(list.size() - 1);
l = list.get(0);

for (int i=0; i<10; i++) {
	System.out.println(i + "times");
}
```

```ruby
# ruby
l = list.last
l = list.first

10.times do |i|
	puts "#{i} times"
end
```

No Ruby, também é possível criar DSLs – linguagens específicas de domínio – uma espécie de sub-linguagem onde o programador pode criar a sintaxe a sua necessidade. Desse modo, um algoritmo que fizesse uma receita de bolo poderia ser programado da seguinte forma:

```ruby
receita "Bola de Fubá" do
	ingrediente "Farinha", "1 quilo"
	ingrediente "Açúcar", "200 gramas"
	ingrediente "Ovos", "2 unidades"
	preparo "Misture todos ingredientes"
	preparo "Leve ao forno"
	preparo "Sirva"
	tempo "2 horas"
	porcoes 3
end
```

Além disso, Ruby é portável e livre. É possível executar Ruby em ambientes Windows e Unix e não é preciso pagar para usá-lo, copiá-lo, modificá-lo ou distribuí-lo.

### Frameworks Ruby

Desenvolvedores de software constantemente se deparam com situações em que os problemas começam a se repetir em diversas partes do sistema. Para resolvê-los, rotinas são criadas e replicadas por todo o sistema, o que pode tornar o código facilmente suscetível a erros e demasiadamente replicado.

Os frameworks são soluções semi-prontas, para agilizar e tornar mais rápido o desenvolvimento de projetos. Eles seguem padrões de projeto bem definidos, que permitem que suas soluções sejam reutilizadas para problemas que outros desenvolvedores já enfrentaram. Dessa forma, os frameworks tornam-se recursos altamente confiáveis.

A linguagem Ruby possui vários frameworks web: Merb, Ruby on Rails, Sinatra. A adoção do Ruby on Rails deu-se a sua riqueza de funcionalidades e ampla documentação.
