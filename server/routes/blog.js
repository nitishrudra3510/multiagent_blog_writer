const express = require('express');
const router = express.Router();

const researchAgent = require('../agents/research');
const outlineAgent = require('../agents/outline');
const writerAgent = require('../agents/writer');

router.post('/write', async (req, res) => {
  const { topic } = req.body;

  const research = await researchAgent(topic);
  const outline = await outlineAgent(topic, research);
  const blog = await writerAgent(topic, research, outline);

  res.json({ blog });
});

module.exports = router;