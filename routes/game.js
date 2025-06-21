const express = require("express");
const router = express.Router();
const prisma = require("../db");

// POST /api/records - simpan data
router.post("/records", async (req, res) => {
  const {
    mading1_correct,
    mading2_correct,
    final_total_correct,
    final_answers,
  } = req.body;

  try {
    const result = await prisma.game_records.create({
      data: {
        mading1_correct,
        mading2_correct,
        final_total_correct,
        final_answers,
      },
    });
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal menyimpan data", detail: error.message });
  }
});

// GET /api/records - ambil data
router.get("/records", async (req, res) => {
  try {
    const records = await prisma.game_records.findMany({
      orderBy: { id: "desc" },
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data" });
  }
});

module.exports = router;
