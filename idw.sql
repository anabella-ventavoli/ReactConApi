-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2024 a las 09:16:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `idw`
--
CREATE DATABASE IF NOT EXISTS `idw` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `idw`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alojamientos`
--

CREATE TABLE `alojamientos` (
  `idAlojamiento` int(11) NOT NULL,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` text DEFAULT NULL,
  `Latitud` decimal(10,8) NOT NULL,
  `Longitud` decimal(11,8) NOT NULL,
  `PrecioPorDia` decimal(10,2) NOT NULL,
  `CantidadDormitorios` int(11) NOT NULL,
  `CantidadBanios` int(11) NOT NULL,
  `Estado` enum('Disponible','Reservado') NOT NULL,
  `TipoAlojamiento` varchar(50) DEFAULT NULL,
  `idTipoAlojamiento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alojamientos`
--

INSERT INTO `alojamientos` (`idAlojamiento`, `Titulo`, `Descripcion`, `Latitud`, `Longitud`, `PrecioPorDia`, `CantidadDormitorios`, `CantidadBanios`, `Estado`, `TipoAlojamiento`, `idTipoAlojamiento`) VALUES
(1, 'Orlando Venice', 'Esta casa pequeña distintiva tiene un diseño de concepto abierto que es contemporáneo y cómodo. Una puerta de garaje enrollable con ventanas de dos paneles se abre desde una cocina de verano a un patio cubierto.', 22.55550005, 33.22219998, 555.00, 1, 1, 'Reservado', 'motorhome', 4),
(2, 'Icon Brickell', 'Espectacular frente al mar 1 dormitorio, 1 baño totalmente equipado y moderno apartamento situado en el IconBrickell por encima del W Hotel Brickell. Excelente ubicación justo al otro lado del río Downtown Miami.', 33.44400020, 79.99999952, 767.00, 1, 1, 'Reservado', 'departamento', 3),
(3, 'The Pigsty', 'The Pigsty es el primer refugio forestal de lujo de Winchester, con hermosas vistas a Vale Farm. Este tranquilo refugio se encuentra a menos de 2,5 km del centro histórico de Winchester y es perfecto para aquellos que buscan visitar la ciudad o escapar por un poco de paz. ', 22.00000004, 33.00000011, 454.00, 1, 1, 'Disponible', 'cabania', 2),
(4, 'VistaRío ', '¡Hola! Somos Facundo y Gisel de VistaRio , Esta hermosa cabaña tipo loft para 4 personas, se encuentra en una quinta ubicada a orillas del Río Uruguay, en el Puerto Panambí, a solo 40 km de la ciudad de Oberá. ¡La vista del río desde el amplio deck es simplemente espectacular!.', 22.00000001, 45.00000001, 333.00, 2, 1, 'Reservado', 'cabania', 2),
(5, 'Piso Premium', 'Apartamento nuevo SUPER luminoso. Se encuentra en inmejorable  ubicación a solo 2 cuadras del Resto Don Julio y  de los mejores restos. A 3 cuadras de subte, trenes y buses.', 43.00000001, 64.99999999, 699.00, 3, 2, 'Reservado', 'departamento', 3),
(6, 'Cabaña Moderna Lago Amber', 'Aparecida en el NY Times, Amber Lake Cottage se encuentra justo en la orilla de Amber Lake en Livingston Manor, Nueva York. A solo 2 horas del bullicio de tu 9-5 en Nueva York, el alojamiento te permite recuperar el aliento.', 22.00000003, 69.00000002, 343.00, 2, 1, 'Reservado', 'cabania', 2),
(7, 'Le Chalet Inuksuk', 'Chalet situado en una gran parcela tranquila de 150,000 pies cuadrados. ca. en Ste-Béatrix. El chalet puede alojar hasta 12 personas y está situado cerca del lago Emmanuel.\n\nEl Chalet Inuksuk tiene una mesa de comedor única de madera maciza que puede sentar a 12 personas al mismo tiempo. ', 45.00000001, 65.00000001, 422.00, 3, 2, 'Disponible', 'chalet', 6),
(8, 'Villa Blue Windmill', 'Constantemente galardonada con la mejor puesta de sol del mundo, Oia en Santorini atrae a viajeros de todo el mundo solo para ver esta magnífica vista. ', 35.00000001, 82.00000001, 666.00, 2, 3, 'Disponible', 'particular', 5),
(9, 'Cave House by Cycladica', 'Esta espaciosa e inigualable casa cueva, colgada en los acantilados de la caldera en el centro de Oia, es parte de un complejo tradicional de casas cueva, propiedad y renovado por una familia de arquitectos.', 33.99999999, 44.99999999, 333.00, 2, 2, 'Disponible', 'particular', 5),
(10, 'La Celeste', 'El Chalet está distribuido de la siguiente manera: Casa Principal, Apartamento de huéspedes, Barbacoa y Área de servicio.', 43.00000031, 56.00000044, 555.00, 4, 3, 'Disponible', 'chalet', 6),
(11, 'Refugio do Sítio', 'El Sitio Refuge es una casa modular, inspirada en las casas americanas y europeas. Un maravilloso encuentro en la naturaleza con Arquitectura. \n\nLa construcción tiene estructuras rústicas, decoradas con todo lujo y diseño para una experiencia inolvidable con refinamiento y comodidad.', 14.00000086, 58.99999977, 222.00, 2, 2, 'Reservado', 'cabania', 2),
(12, 'Torre Premium', 'Espectacular apartamento de tres ambientes en Villa Crespo, muy bien conectado y cerca de Palermo. \nTorre con amenities y todas las comodidades de una casa: jardin, piscina, cancha de futbol, mucho verde y seguridad 24 hs.', 34.00000004, 121.99999997, 454.00, 2, 2, 'Reservado', 'departamento', 3),
(13, 'Biconstrucción', 'La Bioconstrucción Guaraciaba es sin duda una experiencia diferente a cualquier cosa que hayas probado. La casa de tierra, piedra y madera, tiene un ambiente armonioso y cómodo en medio de la naturaleza.', 33.04545410, 73.06960010, 560.00, 2, 1, 'Disponible', 'cabania', 2),
(14, 'Casa del Árbol en Bali', 'Al llegar a su encantador y especial pueblo, inmediatamente se siente todo lo bueno que Bali tiene para ofrecerle. Balian es un pequeño pueblo de surfistas/relajantes que se siente como en los últimos días en Bali.', 55.33330000, 77.22220000, 600.00, 1, 1, 'Reservado', 'cabania', 2),
(15, 'Cabana Da Mata', 'Habitación privada en bed and breakfast en Encantado, Brasil', 55.44440000, 33.53200000, 450.00, 1, 1, 'Reservado', 'cabania', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alojamientoservicios`
--

CREATE TABLE `alojamientoservicios` (
  `idAlojamientoServicio` int(11) NOT NULL,
  `idAlojamiento` int(11) DEFAULT NULL,
  `idServicio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alojamientoservicios`
--

INSERT INTO `alojamientoservicios` (`idAlojamientoServicio`, `idAlojamiento`, `idServicio`) VALUES
(1, 4, 1),
(2, 4, 4),
(3, 4, 5),
(4, 4, 6),
(5, 4, 8),
(6, 4, 9),
(7, 4, 11),
(8, 4, 12),
(9, 4, 14),
(10, 4, 13),
(11, 4, 15),
(12, 4, 3),
(13, 4, 17),
(14, 4, 19),
(15, 4, 20),
(16, 4, 18),
(17, 5, 1),
(18, 5, 2),
(19, 5, 3),
(20, 5, 4),
(21, 5, 5),
(22, 5, 6),
(23, 5, 8),
(24, 5, 9),
(25, 5, 10),
(84, 11, 1),
(85, 11, 4),
(88, 1, 2),
(89, 1, 3),
(111, 1, 1),
(112, 1, 4),
(113, 1, 5),
(114, 1, 7),
(115, 1, 8),
(116, 1, 11),
(117, 1, 12),
(118, 1, 13),
(119, 1, 14),
(120, 1, 15),
(121, 1, 16),
(122, 1, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `idImagen` int(11) NOT NULL,
  `idAlojamiento` int(11) DEFAULT NULL,
  `RutaArchivo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`idImagen`, `idAlojamiento`, `RutaArchivo`) VALUES
(1, 1, 'OrlandoVenice.webp'),
(2, 4, 'VistaRio.webp'),
(3, 3, 'ThePigsty.webp'),
(4, 2, 'IconBrickell.webp'),
(5, 5, 'PisoPremium.webp'),
(6, 6, 'CabaniaModernaLagoAmber.webp'),
(7, 7, 'LeChaletInuksuk.webp'),
(8, 8, 'VillaBlueWindmill.webp'),
(9, 9, 'CaveHouseByCycladica.webp'),
(10, 10, 'LaCeleste.webp'),
(11, 11, 'RefugioDeSitio.webp'),
(12, 12, 'TorrePremium.webp'),
(14, 13, 'biconstruccion.webp'),
(15, 14, 'treehouse.webp'),
(16, 15, 'CabanaDaMata.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `idServicio` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`idServicio`, `Nombre`) VALUES
(1, 'aire acondicionado'),
(2, 'ascensor'),
(3, 'balcón'),
(4, 'calefacción'),
(5, 'cocina'),
(6, 'estacionamiento'),
(7, 'gimnasio'),
(8, 'heladera'),
(9, 'horno'),
(10, 'jacuzzi'),
(11, 'juego de toallas'),
(12, 'lavandería'),
(13, 'microondas'),
(14, 'muebles en el exterior'),
(15, 'patio'),
(16, 'piscina'),
(17, 'ropa de cama'),
(18, 'ropero'),
(19, 'smart tv'),
(20, 'vajilla'),
(21, 'wifi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposalojamiento`
--

CREATE TABLE `tiposalojamiento` (
  `idTipoAlojamiento` int(11) NOT NULL,
  `Descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tiposalojamiento`
--

INSERT INTO `tiposalojamiento` (`idTipoAlojamiento`, `Descripcion`) VALUES
(1, 'alpina'),
(2, 'cabania'),
(3, 'departamento'),
(4, 'motorhome'),
(5, 'particular'),
(6, 'chalet');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alojamientos`
--
ALTER TABLE `alojamientos`
  ADD PRIMARY KEY (`idAlojamiento`),
  ADD KEY `idTipoAlojamiento` (`idTipoAlojamiento`);

--
-- Indices de la tabla `alojamientoservicios`
--
ALTER TABLE `alojamientoservicios`
  ADD PRIMARY KEY (`idAlojamientoServicio`),
  ADD KEY `idAlojamiento` (`idAlojamiento`),
  ADD KEY `idServicio` (`idServicio`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`idImagen`),
  ADD KEY `idAlojamiento` (`idAlojamiento`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`idServicio`);

--
-- Indices de la tabla `tiposalojamiento`
--
ALTER TABLE `tiposalojamiento`
  ADD PRIMARY KEY (`idTipoAlojamiento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alojamientos`
--
ALTER TABLE `alojamientos`
  MODIFY `idAlojamiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `alojamientoservicios`
--
ALTER TABLE `alojamientoservicios`
  MODIFY `idAlojamientoServicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `idServicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `tiposalojamiento`
--
ALTER TABLE `tiposalojamiento`
  MODIFY `idTipoAlojamiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alojamientos`
--
ALTER TABLE `alojamientos`
  ADD CONSTRAINT `alojamientos_ibfk_1` FOREIGN KEY (`idTipoAlojamiento`) REFERENCES `tiposalojamiento` (`idTipoAlojamiento`);

--
-- Filtros para la tabla `alojamientoservicios`
--
ALTER TABLE `alojamientoservicios`
  ADD CONSTRAINT `alojamientoservicios_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`),
  ADD CONSTRAINT `alojamientoservicios_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicios` (`idServicio`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
