module.exports = async function outlineAgent(topic, research) {
  return `Outline for blog on ${topic}:
1. Introduction
2. ${research.split('\n')[1]}
3. ${research.split('\n')[2]}
4. Conclusion`;
};