import { Router } from 'express';
import { organizationController } from '../controllers/organizationController';

const router = Router();

router.post('/', organizationController.createOrganization);
router.get('/', organizationController.getOrganizations);
router.get('/:id', organizationController.getOrganizationById);
router.put('/:id', organizationController.updateOrganization);
router.delete('/:id', organizationController.deleteOrganization);

export const organizationRouter = router;
