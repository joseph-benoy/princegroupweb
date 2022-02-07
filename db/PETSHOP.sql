-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 07, 2022 at 09:10 PM
-- Server version: 8.0.28-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PETSHOP`
--

-- --------------------------------------------------------

--
-- Table structure for table `ADMIN`
--

CREATE TABLE `ADMIN` (
  `ID` int NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `EMAIL` varchar(320) NOT NULL,
  `PASSWORD` varbinary(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ADMIN`
--

INSERT INTO `ADMIN` (`ID`, `NAME`, `EMAIL`, `PASSWORD`) VALUES
(1, 'Admin', 'admin@pets.com', 0x243261243130246337576e3249747274377847536933624f4c5737544f54557a7a455a3578314534672e57694c41306337572f48455a484b4f574179);

-- --------------------------------------------------------

--
-- Table structure for table `BRANDS`
--

CREATE TABLE `BRANDS` (
  `ID` int NOT NULL,
  `NAME` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `BRANDS`
--

INSERT INTO `BRANDS` (`ID`, `NAME`) VALUES
(2, 'KayTee'),
(4, 'sdsfdsf'),
(5, 'ssssssssssssssssssssssssssss'),
(3, 'testtasrygsugjhgkjregkeg'),
(1, 'volvo');

-- --------------------------------------------------------

--
-- Table structure for table `CATEGORY`
--

CREATE TABLE `CATEGORY` (
  `ID` int NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `ICON_PATH` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `CATEGORY`
--

INSERT INTO `CATEGORY` (`ID`, `NAME`, `ICON_PATH`) VALUES
(3, 'Dog', 'icon1643268223485.png'),
(8, 'Cat', 'icon1643386226568.png'),
(9, 'Fish & Aquarium', 'icon1644007371397.png'),
(10, 'Bird & Poultry', 'icon1644007486221.png'),
(11, 'Rabbit & Small pets', 'icon1644007523650.png'),
(12, 'Reptiles', 'icon1644007545251.png'),
(13, 'Cactus & Tiny garden', 'icon1644007567421.png');

-- --------------------------------------------------------

--
-- Table structure for table `ITEM`
--

CREATE TABLE `ITEM` (
  `ID` int NOT NULL,
  `NAME` varchar(150) NOT NULL,
  `PRICE` double DEFAULT NULL,
  `BRAND_ID` int NOT NULL,
  `PRODUCT_ID` int NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `IMAGE_PATH` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ITEM`
--

INSERT INTO `ITEM` (`ID`, `NAME`, `PRICE`, `BRAND_ID`, `PRODUCT_ID`, `DESCRIPTION`, `IMAGE_PATH`) VALUES
(6, 'PetAg KMR formula milk', 1300, 2, 15, 'PetAg KMR Kitten Milk Replacer Powder is a formula milk powder. to replace the mother\'s milk That may be caused by an orphan cat, the mother cat doesn\'t have enough milk. or have digestive problems or the mother cat is sick', 'image1644165618498.jpg'),
(7, 'Beaphar Lactol Kitten', 120.5, 2, 15, 'Beaphar Lactol is a substitute for mother\'s milk. to be a food that contains complete nutrients for orphaned kittens or the mother cat is unable to breastfeed From birth to 35 days and can also be used as a supplement for pregnant cats. and during breastfeeding or in a sick cat does not cause diarrhea It contains essential proteins, vitamins, minerals, taurine and fat in a balanced formula. suitable for kittens', 'image1644166274709.jpg'),
(9, 'Zeal Pet Milk Pet Milk ', 800.3, 2, 15, 'Dogs and cats love to eat cow\'s milk. The problem is lactose digestion. in cow\'s milk \r\nZEAL® New Zealand Lactose Free Pet Milk is made with 99.5% cow\'s milk and is lactose free. make it easy to digest but still maintains the quality and delicious taste of cow\'s milk in its entirety', 'image1644166428300.jpg'),
(10, 'AG-SCIENCE Gold Ac-Science Gold Sterilized Goat Milk Milk substitute for puppies, kittens (400ml)', 1500.3, 2, 15, 'Suitable for puppies that have just given birth to mother dogs with insufficient milk supply, mastitis, or orphaned puppies. AG-Science Goat Milk is high in protein, calcium and fat, low in lactose, similar in nutrients to dog milk. Help your puppy to be healthy, grow fast with the complete structure of the breed.\r\n\r\nIngredients: 100% goat milk\r\nPackage size: 400ml\r\n\r\nnutrition information\r\nOne serving: 1/2 can (200ml.)\r\nNumber of servings per can: 2\r\n\r\nNutritional value per serving\r\nTotal energy 130 kcal (energy from fat 80 kcal)\r\n\r\nTotal fat 9 g.\r\nSaturated fat 6 g.\r\nCholesterol 20 mg.\r\nProtein                             7 g.\r\nTotal carbohydrates 6 g.\r\nSugar                            6 g.\r\nSodium 95 mg.\r\nVitamin A (mcg RE) 70\r\nCalcium (mg) 250', 'image1644166531460.jpg'),
(11, ' AvoDerm Senior Senior Dog Food, All Breeds, Chicken and Brown Rice Formula (2 kg, 6.8kg, 11.8kg)', 10.5, 2, 15, 'Contains avocados to help nourish the skin and coat to be beautiful, shiny, clear coat color, reduce itching. AvoDerm® Dog Food Chicken and Brown Rice Formula. Made with high quality ingredients, it contains vitamins, minerals and antioxidants. that aids in the functioning of the dog\'s immune system Contains avocados, Omega-6 to Omega-3 fatty acids in the right proportions. that helps nourish the skin and coat Conditions dry and damaged hair to be beautiful, clear coat, delicious taste. Rest assured that your dog will receive all the necessary nutrients for adult dogs of all breeds. Contains no corn, wheat, no coloring agents. Ingredients: Chicken Meat, Herring Meat, Brown Rice\r\n', 'image1644166637590.jpg'),
(12, 'Taste of the Wild Pacific Stream', 150, 2, 15, 'Holistic Grade Dog Food made from smoked salmon Made from real meat that has been baked and then filled with vegetables and fruits. Free from various grains Make the food quality and taste good. And it contains natural antioxidants to help support the immune system for a healthy pet. and the hair is beautiful and shiny Suitable for dogs of all ages, puppies from weaning and up of all breeds. and adult dogs of all breeds ', 'image1644166749346.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `PRODUCT_TYPE`
--

CREATE TABLE `PRODUCT_TYPE` (
  `ID` int NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `SUBCAT_ID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `PRODUCT_TYPE`
--

INSERT INTO `PRODUCT_TYPE` (`ID`, `NAME`, `SUBCAT_ID`) VALUES
(1, 'Jacket Life Vest', 1),
(5, 'Dolls', 2),
(15, 'Milk', 10),
(16, 'Fertilizers', 11),
(19, 'Mirror', 20),
(20, 'Hamster Food', 21),
(21, 'Food & Care', 22),
(22, 'Insecticide', 23);

-- --------------------------------------------------------

--
-- Table structure for table `SLIDER1`
--

CREATE TABLE `SLIDER1` (
  `ID` int NOT NULL,
  `IMG_PATH` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `SLIDER1`
--

INSERT INTO `SLIDER1` (`ID`, `IMG_PATH`) VALUES
(2, 'slider11643367829834.jpeg'),
(3, 'slider11643367947236.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `SLIDER2`
--

CREATE TABLE `SLIDER2` (
  `ID` int NOT NULL,
  `IMG_PATH` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `SLIDER2`
--

INSERT INTO `SLIDER2` (`ID`, `IMG_PATH`) VALUES
(1, 'slider21643367885702.png'),
(2, 'slider21643367921972.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `SUB_CATEGORY`
--

CREATE TABLE `SUB_CATEGORY` (
  `ID` int NOT NULL,
  `NAME` varchar(70) NOT NULL,
  `CATEGORY_ID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `SUB_CATEGORY`
--

INSERT INTO `SUB_CATEGORY` (`ID`, `NAME`, `CATEGORY_ID`) VALUES
(1, 'Apparel', 3),
(2, 'Toys,Dolls', 3),
(10, 'Cat Food', 8),
(11, 'Waterplants', 9),
(20, 'Toys', 10),
(21, 'Hamster', 11),
(22, 'Snake', 12),
(23, 'Insecticide', 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ADMIN`
--
ALTER TABLE `ADMIN`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `BRANDS`
--
ALTER TABLE `BRANDS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NAME` (`NAME`);

--
-- Indexes for table `CATEGORY`
--
ALTER TABLE `CATEGORY`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `ITEM`
--
ALTER TABLE `ITEM`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_item_1` (`BRAND_ID`),
  ADD KEY `fk_item_2` (`PRODUCT_ID`);

--
-- Indexes for table `PRODUCT_TYPE`
--
ALTER TABLE `PRODUCT_TYPE`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SUBCAT_ID` (`SUBCAT_ID`);

--
-- Indexes for table `SLIDER1`
--
ALTER TABLE `SLIDER1`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `SLIDER2`
--
ALTER TABLE `SLIDER2`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `SUB_CATEGORY`
--
ALTER TABLE `SUB_CATEGORY`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NAME` (`NAME`),
  ADD KEY `CATEGORY_ID` (`CATEGORY_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ADMIN`
--
ALTER TABLE `ADMIN`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `BRANDS`
--
ALTER TABLE `BRANDS`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `CATEGORY`
--
ALTER TABLE `CATEGORY`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `ITEM`
--
ALTER TABLE `ITEM`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `PRODUCT_TYPE`
--
ALTER TABLE `PRODUCT_TYPE`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `SLIDER1`
--
ALTER TABLE `SLIDER1`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `SLIDER2`
--
ALTER TABLE `SLIDER2`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `SUB_CATEGORY`
--
ALTER TABLE `SUB_CATEGORY`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ITEM`
--
ALTER TABLE `ITEM`
  ADD CONSTRAINT `fk_item_1` FOREIGN KEY (`BRAND_ID`) REFERENCES `BRANDS` (`ID`),
  ADD CONSTRAINT `fk_item_2` FOREIGN KEY (`PRODUCT_ID`) REFERENCES `PRODUCT_TYPE` (`ID`);

--
-- Constraints for table `PRODUCT_TYPE`
--
ALTER TABLE `PRODUCT_TYPE`
  ADD CONSTRAINT `PRODUCT_TYPE_ibfk_1` FOREIGN KEY (`SUBCAT_ID`) REFERENCES `SUB_CATEGORY` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `SUB_CATEGORY`
--
ALTER TABLE `SUB_CATEGORY`
  ADD CONSTRAINT `SUB_CATEGORY_ibfk_1` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `CATEGORY` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
