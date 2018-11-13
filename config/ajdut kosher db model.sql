-- ajdut kosher db model

CREATE TABLE Producto (
    id int NOT NULL AUTO_INCREMENT,
    descripcion varchar(255) NOT NULL,
    marcaId INT NOT NULL,
    categoriaId INT NOT NULL,
    fechaUltimaModificacion DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fechaBaja DATETIME NULL,
    PRIMARY KEY (id), 
    UNIQUE (descripcion)
);

CREATE TABLE Marca (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    fechaUltimaModificacion DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fechaBaja DATETIME NULL,
    PRIMARY KEY (id), 
    UNIQUE (nombre)
);

CREATE TABLE Categoria (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    descripcion varchar(5000) NULL,
    fechaUltimaModificacion DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fechaBaja DATETIME NULL,
    PRIMARY KEY (id), 
    UNIQUE (nombre)
);

CREATE TABLE Codigo (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    codigo varchar(50) NOT NULL,
    descripcion varchar(5000) NULL,
    fechaUltimaModificacion DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fechaBaja DATETIME NULL,
    PRIMARY KEY (id), 
    UNIQUE (nombre),
    UNIQUE (codigo)
);

CREATE TABLE ProductoCodigo (
    productoId int NOT NULL,
    codigoId int NOT NULL,
    PRIMARY KEY (productoId, codigoId)
);

ALTER TABLE `producto` ADD CONSTRAINT `fk_producto_marca` FOREIGN KEY (`marcaId`) REFERENCES `marca`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT; ALTER TABLE `producto` ADD CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`categoriaId`) REFERENCES `categoria`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `productocodigo` ADD CONSTRAINT `fk_productoCodigo_producto` FOREIGN KEY (`productoId`) REFERENCES `producto`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT; ALTER TABLE `productocodigo` ADD CONSTRAINT `fk_productoCodigo_codigo` FOREIGN KEY (`codigoId`) REFERENCES `codigo`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE TABLE Usuario (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    fechaBaja DATETIME NULL,
    PRIMARY KEY (id), 
    UNIQUE (username)
);
insert into usuario (username, password) values ('admin','613mitzvot');


-- TODO
-- Alerta:
-- titulo
-- contenido
-- fecha_alta