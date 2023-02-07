-- CreateTable
CREATE TABLE `pizza` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `ingredients` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `pizza_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pizzaname` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_pizzaname_fkey` FOREIGN KEY (`pizzaname`) REFERENCES `pizza`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
