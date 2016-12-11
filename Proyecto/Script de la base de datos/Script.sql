/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2008                    */
/* Created on:     11/12/2016 13:59:27                          */
/*==============================================================*/


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DISFRUTA') and o.name = 'FK_DISFRUTA_DISFRUTA_HUESPED')
alter table DISFRUTA
   drop constraint FK_DISFRUTA_DISFRUTA_HUESPED
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DISFRUTA') and o.name = 'FK_DISFRUTA_DISFRUTA2_RESERVA')
alter table DISFRUTA
   drop constraint FK_DISFRUTA_DISFRUTA2_RESERVA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('RESERVA') and o.name = 'FK_RESERVA_REALIZA_USUARIO')
alter table RESERVA
   drop constraint FK_RESERVA_REALIZA_USUARIO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SEPARA') and o.name = 'FK_SEPARA_SEPARA_RESERVA')
alter table SEPARA
   drop constraint FK_SEPARA_SEPARA_RESERVA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SEPARA') and o.name = 'FK_SEPARA_SEPARA2_HABITACI')
alter table SEPARA
   drop constraint FK_SEPARA_SEPARA2_HABITACI
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DISFRUTA')
            and   name  = 'DISFRUTA2_FK'
            and   indid > 0
            and   indid < 255)
   drop index DISFRUTA.DISFRUTA2_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DISFRUTA')
            and   name  = 'DISFRUTA_FK'
            and   indid > 0
            and   indid < 255)
   drop index DISFRUTA.DISFRUTA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DISFRUTA')
            and   type = 'U')
   drop table DISFRUTA
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HABITACION')
            and   type = 'U')
   drop table HABITACION
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HUESPED')
            and   type = 'U')
   drop table HUESPED
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('RESERVA')
            and   name  = 'REALIZA_FK'
            and   indid > 0
            and   indid < 255)
   drop index RESERVA.REALIZA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('RESERVA')
            and   type = 'U')
   drop table RESERVA
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SEPARA')
            and   name  = 'SEPARA2_FK'
            and   indid > 0
            and   indid < 255)
   drop index SEPARA.SEPARA2_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SEPARA')
            and   name  = 'SEPARA_FK'
            and   indid > 0
            and   indid < 255)
   drop index SEPARA.SEPARA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SEPARA')
            and   type = 'U')
   drop table SEPARA
go

if exists (select 1
            from  sysobjects
           where  id = object_id('USUARIO')
            and   type = 'U')
   drop table USUARIO
go

/*==============================================================*/
/* Table: DISFRUTA                                              */
/*==============================================================*/
create table DISFRUTA (
   IDUSUARIO2           varchar(10)          not null,
   IDUSUARIO            varchar(10)          not null,
   IDRESERVA            varchar(10)          not null,
   constraint PK_DISFRUTA primary key (IDUSUARIO, IDUSUARIO2, IDRESERVA)
)
go

/*==============================================================*/
/* Index: DISFRUTA_FK                                           */
/*==============================================================*/
create index DISFRUTA_FK on DISFRUTA (
IDUSUARIO2 ASC
)
go

/*==============================================================*/
/* Index: DISFRUTA2_FK                                          */
/*==============================================================*/
create index DISFRUTA2_FK on DISFRUTA (
IDUSUARIO ASC,
IDRESERVA ASC
)
go

/*==============================================================*/
/* Table: HABITACION                                            */
/*==============================================================*/
create table HABITACION (
   IDHABITACION         int                  not null,
   PISO                 int                  not null,
   TIPO                 varchar(10)          not null,
   COSTO                money                null,
   constraint PK_HABITACION primary key nonclustered (IDHABITACION)
)
go

/*==============================================================*/
/* Table: HUESPED                                               */
/*==============================================================*/
create table HUESPED (
   IDUSUARIO2           varchar(10)          not null,
   NOMBRES              varchar(20)          not null,
   APELLIDOS            varchar(20)          not null,
   FECHANACIMIENTO      datetime             not null,
   DIRECCION            varchar(20)          not null,
   EMAIL                varchar(20)          not null,
   TELCONVENCIONAL      varchar(10)          not null,
   TELCELULAR           varchar(20)          not null,
   constraint PK_HUESPED primary key nonclustered (IDUSUARIO2)
)
go

/*==============================================================*/
/* Table: RESERVA                                               */
/*==============================================================*/
create table RESERVA (
   IDUSUARIO            varchar(10)          not null,
   IDRESERVA            varchar(10)          not null,
   FECHAINICIO          datetime             not null,
   FECHAFIN             datetime             not null,
   PRECIO               money                null,
   constraint PK_RESERVA primary key nonclustered (IDUSUARIO, IDRESERVA)
)
go

/*==============================================================*/
/* Index: REALIZA_FK                                            */
/*==============================================================*/
create index REALIZA_FK on RESERVA (
IDUSUARIO ASC
)
go

/*==============================================================*/
/* Table: SEPARA                                                */
/*==============================================================*/
create table SEPARA (
   IDUSUARIO            varchar(10)          not null,
   IDRESERVA            varchar(10)          not null,
   IDHABITACION         int                  not null,
   constraint PK_SEPARA primary key (IDUSUARIO, IDRESERVA, IDHABITACION)
)
go

/*==============================================================*/
/* Index: SEPARA_FK                                             */
/*==============================================================*/
create index SEPARA_FK on SEPARA (
IDUSUARIO ASC,
IDRESERVA ASC
)
go

/*==============================================================*/
/* Index: SEPARA2_FK                                            */
/*==============================================================*/
create index SEPARA2_FK on SEPARA (
IDHABITACION ASC
)
go

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   IDUSUARIO            varchar(10)          not null,
   PASSWORD             varchar(10)          not null,
   NOMBRES              varchar(20)          not null,
   APELLIDOS            varchar(20)          not null,
   FECHANACIMIENTO      datetime             not null,
   DIRECCION            varchar(20)          not null,
   EMAIL                varchar(20)          not null,
   TELCONVENCIONAL      varchar(10)          not null,
   TELCELULAR           varchar(20)          not null,
   constraint PK_USUARIO primary key nonclustered (IDUSUARIO)
)
go

alter table DISFRUTA
   add constraint FK_DISFRUTA_DISFRUTA_HUESPED foreign key (IDUSUARIO2)
      references HUESPED (IDUSUARIO2)
go

alter table DISFRUTA
   add constraint FK_DISFRUTA_DISFRUTA2_RESERVA foreign key (IDUSUARIO, IDRESERVA)
      references RESERVA (IDUSUARIO, IDRESERVA)
go

alter table RESERVA
   add constraint FK_RESERVA_REALIZA_USUARIO foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO)
go

alter table SEPARA
   add constraint FK_SEPARA_SEPARA_RESERVA foreign key (IDUSUARIO, IDRESERVA)
      references RESERVA (IDUSUARIO, IDRESERVA)
go

alter table SEPARA
   add constraint FK_SEPARA_SEPARA2_HABITACI foreign key (IDHABITACION)
      references HABITACION (IDHABITACION)
go

