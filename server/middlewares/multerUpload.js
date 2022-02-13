
import multer from "multer";
import path from  'path'

export const catIconUpload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"uploads/category_icons/");
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
})

export const ItemUpload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"uploads/item/");
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
})
export const slider1Upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"uploads/slider1/");
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
})
export const slider2Upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"uploads/slider2/");
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
      },
      fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
       cb(undefined, true)
    }
})

export const catlog = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,"uploads/catlog/");
        },
        filename:(req,file,cb)=>{
            cb(null,"catlog"+path.extname(file.originalname))
        }
    })
})