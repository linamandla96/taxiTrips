create table routes(
	id int,
	name text,
    fare int
);

create table region (
   id int,
   name text

);

create table taxi (
	id int,
    reg_no int,
	taxi_id int,
    routes_id int,
	foreign key (routes_id) references routes(id),
    foreign key (taxi_id) references taxi(id)
);
create table trip (
	id int,
	region_id int,
    taxi_id int,
	foreign key (region_id) references region(id),
    foreign key (taxi_id) references taxi(id)
    
);
