import upload from '@/libs/multer/storage';
import express from 'express';
import _ from 'lodash';
import path from 'path';

const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const ext = path.extname(req.file.originalname);
    const cleanName = _.kebabCase(path.basename(req.file.originalname, ext));
    const uniqueName = `${cleanName}-${Date.now()}-${Math.floor(Math.random() * 1e6)}${ext}`;
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${uniqueName}`;
    res.json({ url: fileUrl });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
export default router;
