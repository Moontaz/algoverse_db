-- CreateTable
CREATE TABLE `game_records` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `record_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `mading1_correct` INTEGER NOT NULL,
    `mading2_correct` INTEGER NOT NULL,
    `final_total_correct` INTEGER NOT NULL,
    `final_answers` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
