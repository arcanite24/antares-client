module.exports = (req, res) => {
  return res.json({
    ok: true,
    message: '🚀 =>' + process.env.FAUNA_GUEST_TOKEN,
  });
};
