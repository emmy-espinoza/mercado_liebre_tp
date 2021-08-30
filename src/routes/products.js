// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('../middlewares/uploadProductsFiles')

// ************ Controller Require ************
const productsController = require('../controllers/productsController'); //nos trae todo slos productos

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); //la ruta para crear un producto
router.post('/', multer.single('image') ,productsController.store); //recibe la info y nos guarda lo agregado


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', multer.single('image'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);



module.exports = router;
