-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2024 at 09:44 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `url_shortener`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_log`
--

CREATE TABLE `api_log` (
  `ip` varchar(36) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `requests` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `api_log`
--

INSERT INTO `api_log` (`ip`, `date`, `requests`) VALUES
('3232235822', '2022-10-21', 0),
('3232235822', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-21', 0),
('742059019', '2022-10-22', 0),
('742059019', '2022-10-22', 0),
('742059019', '2022-10-22', 0),
('742059019', '2022-10-22', 0),
('742059019', '2022-10-22', 0),
('742059019', '2022-10-22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `urls`
--

CREATE TABLE `urls` (
  `id` int(255) NOT NULL,
  `url_key` varchar(36) NOT NULL,
  `url` varchar(280) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `urls`
--

INSERT INTO `urls` (`id`, `url_key`, `url`) VALUES
(1, '1', 'https://igihe.com/'),
(2, '2', 'https://irembo.gov.rw/'),
(3, '3', 'https://license.cyclos.org'),
(4, '4', 'https://www.unr.edu/'),
(5, '5', 'https://www.troisprial.gov'),
(6, '6', 'https://www.troisprioal.gov'),
(7, '7', 'https://cultivar.com/paincakes'),
(8, '8', 'https://ones.com'),
(9, '9', 'https://onestwo.com'),
(10, 'a', 'https://notinghams.com'),
(11, 'b', 'https://notingham.com'),
(12, 'c', 'https://cultivar.coffe'),
(13, 'd', 'https://sendmetoshort.me'),
(14, 'e', 'https://onesthree.com'),
(15, 'f', 'https://onesfour.com'),
(16, 'g', 'https://onesfive.com'),
(17, 'h', 'https://onessix.com'),
(18, 'i', 'https://onesseven.com'),
(19, 'j', 'https://oneseight.com'),
(20, 'k', 'https://onesten.com'),
(21, 'l', 'https://oneseleven.com'),
(22, 'm', 'https://onestwelve.com'),
(23, 'n', 'https://thirteen.com'),
(24, 'o', 'https://onesfourteen.com'),
(25, 'p', 'https://onesseventeen.com'),
(26, 'q', 'https://onestwenty.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_log`
--
ALTER TABLE `api_log`
  ADD KEY `ip` (`ip`);

--
-- Indexes for table `urls`
--
ALTER TABLE `urls`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `urls`
--
ALTER TABLE `urls`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
