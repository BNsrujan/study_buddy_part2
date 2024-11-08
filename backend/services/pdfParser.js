const pdfParser = require('../services/pdfParser');
exports.uploadFile = async (req, res) => {
    const text = await pdfParser.parsePDF(req.file.path);
    res.json({ text });
};
