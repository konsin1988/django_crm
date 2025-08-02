FROM postgres:14

ENV POSTGRES_DB=dds

COPY ./init/init_schema.sql /docker-entrypoint-initdb.d/
