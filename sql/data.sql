insert into region(id, name) values (1, 'Durban');
insert into region(id, name) values (2, 'Cape Town');
insert into region(id, name) values (3, 'Gauteng');

insert into routes(name,fare) values('Durban',20.00);
insert into routes(name,fare) values('Cape Town',50.00);
insert into routes(name,fare) values('Gauteng',30.00);

insert into taxi(reg_no,id) values('ND 670-870',1);
insert into taxi(reg_no,id) values('CA 555-808',2);
insert into taxi(reg_no,id) values('23996 Gp',3);

insert into trip(region_id,taxi_id) value(1,1);
insert into trip(region_id,taxi_id) value(2,2);
insert into trip(region_id,taxi_id) value(3,3);



