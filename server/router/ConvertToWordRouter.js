const express = require('express');
const router = express.Router();
const {Document, Packer, Paragraph, TextRun, docx} = require('docx');


router.post('/ConvertToWord', async (req, res) => {
    const editorChildren = req.body.children;
    console.log(editorChildren)
    const children = editorChildren.map(node => {
        if (node.type === 'paragraph') {
            
            const textRuns = node.children.map(textNode => {
                let textRunProps = {...textNode}

                if(textNode.bold){
                    textRunProps.bold = textNode.bold;
                }
                if(textNode.italics){
                    textRunProps.italics = textNode.italics;
                }
                if(textNode.color){
                    textRunProps.color = textNode.color.replace('#', '');
                }
                
                if(textNode.underline){
                    textRunProps.underline = textNode.underline;
                }
                if(textNode.size){
                    textRunProps.size = textNode.size * 2;
                } else{
                    textRunProps.size = 14 * 2;
                }
                 
                textRunProps.font = textNode.font ? textNode.font : "Calibre";
                return new TextRun(textRunProps)
            });
            return new Paragraph(
                {
                     children: textRuns,
                     alignment: node.align
                }
                    );
        }

    });

    const doc = new Document({
        sections: [{
            properties: {},
            children: children,
        }],
    });

   const buffer = await Packer.toBuffer(doc);

   res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessing.document');
   res.setHeader('Content-Disposition', 'attachment; filename=word.docx');
   res.send(buffer);
});

module.exports = router;