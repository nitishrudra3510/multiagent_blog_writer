module.exports = async function writerAgent(topic, research, outline) {
  return `Blog on ${topic}

${outline.replace(/\n/g, '\n')}

Based on research:
${research}`;
};