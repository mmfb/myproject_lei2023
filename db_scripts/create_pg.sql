create table cards (
    crd_id serial,
    crd_name varchar(60) not null,
    crd_img_url varchar(200), -- what if we have more than one image?
    crd_lore varchar(400),
    crd_description varchar(300),
    crd_level int not null, -- cards of higher level cannot not be played in the beggining
    crd_cost int,
    crd_timeout int, -- while on timeout the card cannot be played
    crd_max_usage int, -- null means no max usage
    crd_type int not null,-- We should have another table defining what types exist
    -- If a card has multiple types we would need another table yet
	primary key (crd_id));