select * from category;

select * from film;

select * from  film_category  A join film B
 on A.film_id = B.film_id
 join cateogry c
 on A.category_id = C.category_id
 order by 1,2;
 
select A.film_id, A.title, B.category_id, C.name
 from  film  A left join film_category B
 on A.film_id = B.film_id
 left join cateogry C
 on B.category_id = C.category_id
 between 1 and 10 ;