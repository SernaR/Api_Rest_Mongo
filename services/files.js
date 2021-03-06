const multer = require('multer')
const path = require('path')
const fs = require('fs')

exports.storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

exports.memoryStorage = multer.memoryStorage()

exports.fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

exports.clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath)
    fs.unlink(filePath, err => console.log(err))
}


 