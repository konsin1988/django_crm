create schema fin;
drop schema public;
create table fin.revenue_est_2025 (
	company varchar Null,
	date_dt date null,
	estimate_date date null,
	frc varchar null,
	est_amount numeric null,
	hcl_amount numeric null,
	contr_amount numeric null
);
create table fin.revenue_fact (
	date_dt timestamp null,
	c_agent varchar null,
	contract varchar null,
	doc varchar null,
	division varchar null,
	frc varchar null,
	nom_g varchar null,
	div_frc varchar null,
	nom_frc varchar null,
	amount numeric null
);
create table fin.revenue_plan_2025 (
	company varchar null,
	date_dt date null,
	frc varchar null,
	amount numeric null
);
