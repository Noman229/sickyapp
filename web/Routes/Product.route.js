import {Router} from 'express'
import getProductById from '../Controller/Product.Controller.js'

const productRoute = Router()
productRoute.get('/product/:id', getProductById)

export default productRoute