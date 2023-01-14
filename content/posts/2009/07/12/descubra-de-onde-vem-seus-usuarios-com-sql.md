---
id: 683
title: Descubra de onde vem seus usuários com SQL
publishedAt: 2009-07-12T17:51:44-03:00
type: Post
ogImage: /images/og-images/683.png

permalink: /2009/07/12/descubra-de-onde-vem-seus-usuarios-com-sql/
dsq_thread_id:
  - "1000137458"
categories:
  - rubyonrails
  - mysql
tags:
  - rubyonrails
  - mysql
---
Tenho no [**autosimulado**](http://www.autosimulado.com.br) algumas queries para acompanhar a evolução dos usuários do site. Periodicamente, vejo o número de usuários criados dia-a-dia no site e o número de testes realizados por esses usuários.

Relacionado as essas queries, [vi uma interessante consulta](http://www.mendable.com/sql-trick-where-are-your-users-from/) para agrupar o número de usuários por domínio de email, através da função [substring](http://dev.mysql.com/doc/refman/5.1/en/string-functions.html#function_substring-index). Confira:

```sql
SELECT COUNT(*) AS Total, SUBSTRING_INDEX(email, '@', -1) AS Domain FROM users
GROUP BY SUBSTRING_INDEX(email, '@', -1) ORDER BY COUNT(*) DESC LIMIT 10;
```

O resultado, quando aplicado ao banco de dados do [**autosimulado**](http://www.autosimulado.com.br):

```
+-------+----------------+
| Total | Domain         |
+-------+----------------+
|   644 | hotmail.com    |
|   116 | gmail.com      |
|    98 | yahoo.com.br   |
|    37 | bol.com.br     |
|    33 | ig.com.br      |
|    15 | uol.com.br     |
|    11 | oi.com.br      |
|    10 | yahoo.com      |
|     9 | hotmail.com.br |
|     8 | terra.com.br   |
+-------+----------------+
10 rows in set (0.00 sec)
```
