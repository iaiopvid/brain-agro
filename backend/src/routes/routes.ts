import { Router } from 'express';
//import * as ProdutorRuralController from '../controllers/ProdutorRuralController';
import { ProdutorRuralController } from '../controllers/ProdutorRuralController';
import { AreaController } from '../controllers/AreaController'
const routes = Router();

routes.post('/produtor-rural', ProdutorRuralController.store);
routes.get('/produtor-rural', ProdutorRuralController.get);
routes.get('/produtor-rural/:id', ProdutorRuralController.show);
routes.patch('/produtor-rural/:id', ProdutorRuralController.update);
routes.put('/produtor-rural/:id', ProdutorRuralController.update);
routes.delete('/produtor-rural/:id', ProdutorRuralController.destroy);

routes.get('/area/total', AreaController.obterAreaTotal);
routes.get('/area/estado', AreaController.obterAreaEstado);
routes.get('/area/cultura', AreaController.obterAreaCultura);

export default routes;