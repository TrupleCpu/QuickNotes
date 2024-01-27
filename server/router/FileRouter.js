const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.post('/openFile', upload.single('file'), async(req, res) => {
    let textObj = [];
    const fileBuffer = req.file.buffer;
    const fileName = req.file.originalname;

    if(fileName.endsWith('.txt')){
        const fileContents = req.file.buffer.toString('utf-8');

        const textValues = fileContents.split('\n');
        textObj = textValues.map((value) => ({
            type: 'paragraph',
            children: [{text: value}]
        }));
        res.status(200).send(textObj);
    } else {
        res.status(400).send('Unsupported file!')
    }   
});

module.exports = router;