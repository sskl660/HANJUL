-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema HANJUL_V1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema HANJUL_V1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HANJUL_V1` DEFAULT CHARACTER SET utf8mb4 ;
USE `HANJUL_V1` ;

-- -----------------------------------------------------
-- Table `HANJUL_V1`.`auth_group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`auth_group` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`django_content_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`django_content_type` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `app_label` VARCHAR(100) NOT NULL,
  `model` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label` ASC, `model` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`auth_permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`auth_permission` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `content_type_id` INT(11) NOT NULL,
  `codename` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id` ASC, `codename` ASC) VISIBLE,
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co`
    FOREIGN KEY (`content_type_id`)
    REFERENCES `HANJUL_V1`.`django_content_type` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 61
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`auth_group_permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`auth_group_permissions` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `group_id` INT(11) NOT NULL,
  `permission_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id` ASC, `permission_id` ASC) VISIBLE,
  INDEX `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm`
    FOREIGN KEY (`permission_id`)
    REFERENCES `HANJUL_V1`.`auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id`
    FOREIGN KEY (`group_id`)
    REFERENCES `HANJUL_V1`.`auth_group` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`auth_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`auth_user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(128) NOT NULL,
  `last_login` DATETIME(6) NULL DEFAULT NULL,
  `is_superuser` TINYINT(1) NOT NULL,
  `username` VARCHAR(150) NOT NULL,
  `first_name` VARCHAR(150) NOT NULL,
  `last_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `is_staff` TINYINT(1) NOT NULL,
  `is_active` TINYINT(1) NOT NULL,
  `date_joined` DATETIME(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`auth_user_groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`auth_user_groups` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `group_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id` ASC, `group_id` ASC) VISIBLE,
  INDEX `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id` ASC) VISIBLE,
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id`
    FOREIGN KEY (`group_id`)
    REFERENCES `HANJUL_V1`.`auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `HANJUL_V1`.`auth_user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`auth_user_user_permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`auth_user_user_permissions` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `permission_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id` ASC, `permission_id` ASC) VISIBLE,
  INDEX `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm`
    FOREIGN KEY (`permission_id`)
    REFERENCES `HANJUL_V1`.`auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `HANJUL_V1`.`auth_user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`user` (
  `user_id` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255) NULL DEFAULT NULL,
  `user_pw` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`book` (
  `review_id` BIGINT(20) NOT NULL,
  `review_comment` VARCHAR(255) NULL DEFAULT NULL,
  `review_date` DATETIME NULL DEFAULT NULL,
  `review_isbn` VARCHAR(255) NULL DEFAULT NULL,
  `review_star` INT(11) NOT NULL,
  `review_fk_user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  INDEX `FKqe1i3omd67vh2bnwa2jpkkeon` (`review_fk_user_id` ASC) VISIBLE,
  CONSTRAINT `FKqe1i3omd67vh2bnwa2jpkkeon`
    FOREIGN KEY (`review_fk_user_id`)
    REFERENCES `HANJUL_V1`.`user` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`django_admin_log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`django_admin_log` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `action_time` DATETIME(6) NOT NULL,
  `object_id` LONGTEXT NULL DEFAULT NULL,
  `object_repr` VARCHAR(200) NOT NULL,
  `action_flag` SMALLINT(5) UNSIGNED NOT NULL,
  `change_message` LONGTEXT NOT NULL,
  `content_type_id` INT(11) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id` ASC) VISIBLE,
  INDEX `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co`
    FOREIGN KEY (`content_type_id`)
    REFERENCES `HANJUL_V1`.`django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `HANJUL_V1`.`auth_user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`django_migrations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`django_migrations` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `app` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `applied` DATETIME(6) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`django_session`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`django_session` (
  `session_key` VARCHAR(40) NOT NULL,
  `session_data` LONGTEXT NOT NULL,
  `expire_date` DATETIME(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  INDEX `django_session_expire_date_a5c62663` (`expire_date` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`hibernate_sequence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`hibernate_sequence` (
  `next_val` BIGINT(20) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`history` (
  `history_id` BIGINT(20) NOT NULL,
  `history_date` DATETIME NULL DEFAULT NULL,
  `history_oneline` VARCHAR(255) NULL DEFAULT NULL,
  `history_fk_user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`history_id`),
  INDEX `FK6ifeohp4xhra7xwlvixt8x1p` (`history_fk_user_id` ASC) VISIBLE,
  CONSTRAINT `FK6ifeohp4xhra7xwlvixt8x1p`
    FOREIGN KEY (`history_fk_user_id`)
    REFERENCES `HANJUL_V1`.`user` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`history_books_imgurl`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`history_books_imgurl` (
  `history_books_imgurl_id` BIGINT(20) NOT NULL,
  `history_books_imgurl` VARCHAR(255) NULL DEFAULT NULL,
  INDEX `FK1qhbajclahem0q4gxtss78mer` (`history_books_imgurl_id` ASC) VISIBLE,
  CONSTRAINT `FK1qhbajclahem0q4gxtss78mer`
    FOREIGN KEY (`history_books_imgurl_id`)
    REFERENCES `HANJUL_V1`.`history` (`history_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`history_books_isbn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`history_books_isbn` (
  `history_books_id` BIGINT(20) NOT NULL,
  `history_books_isbns` VARCHAR(255) NULL DEFAULT NULL,
  INDEX `FKqu23yxih9vijj9ih3hq3hah8h` (`history_books_id` ASC) VISIBLE,
  CONSTRAINT `FKqu23yxih9vijj9ih3hq3hah8h`
    FOREIGN KEY (`history_books_id`)
    REFERENCES `HANJUL_V1`.`history` (`history_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`library`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`library` (
  `library_id` BIGINT(20) NOT NULL,
  `mybook_author` VARCHAR(255) NULL DEFAULT NULL,
  `mybook_date` DATETIME NULL DEFAULT NULL,
  `mybook_desc` VARCHAR(255) NULL DEFAULT NULL,
  `mybook_imgurl` VARCHAR(255) NULL DEFAULT NULL,
  `mybook_isbn` VARCHAR(255) NULL DEFAULT NULL,
  `mybook_published` VARCHAR(255) NULL DEFAULT NULL,
  `mybook_publisher` VARCHAR(255) NULL DEFAULT NULL,
  `mybook_title` VARCHAR(255) NULL DEFAULT NULL,
  `library_fk_user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`library_id`),
  INDEX `FKghphhwua4pp1qwcigjwa63k9i` (`library_fk_user_id` ASC) VISIBLE,
  CONSTRAINT `FKghphhwua4pp1qwcigjwa63k9i`
    FOREIGN KEY (`library_fk_user_id`)
    REFERENCES `HANJUL_V1`.`user` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`review` (
  `review_id` BIGINT(20) NOT NULL,
  `review_comment` VARCHAR(255) NULL DEFAULT NULL,
  `review_date` DATETIME NULL DEFAULT NULL,
  `review_isbn` VARCHAR(255) NULL DEFAULT NULL,
  `review_star` INT(11) NOT NULL,
  `review_fk_user_id` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  INDEX `FKk6s9b8fs2roxl9eihmn96htkl` (`review_fk_user_id` ASC) VISIBLE,
  CONSTRAINT `FKk6s9b8fs2roxl9eihmn96htkl`
    FOREIGN KEY (`review_fk_user_id`)
    REFERENCES `HANJUL_V1`.`user` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `HANJUL_V1`.`tmpbooks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HANJUL_V1`.`tmpbooks` (
  `isbn` VARCHAR(255) NULL DEFAULT NULL,
  `title` VARCHAR(1000) NULL DEFAULT NULL,
  `author` VARCHAR(500) NULL DEFAULT NULL,
  `publisher` VARCHAR(255) NULL DEFAULT NULL,
  `img_url` VARCHAR(300) NULL DEFAULT NULL,
  `description` VARCHAR(1000) NULL DEFAULT NULL,
  `is_coll_aladin` VARCHAR(255) NULL DEFAULT NULL,
  `is_coll_naver` VARCHAR(255) NULL DEFAULT NULL,
  `isbn_origin` VARCHAR(255) NULL DEFAULT NULL,
  `avg_star` INT(11) NULL DEFAULT 0)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
