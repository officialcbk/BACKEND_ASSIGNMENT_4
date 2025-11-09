import { Router } from 'express';
import { createLoan, getLoan, updateLoan, deleteLoan } from '../controllers/loanControllers';

const router = Router();

router.post('/create', createLoan);
router.get('/:id', getLoan);
router.put('/:id', updateLoan);
router.delete('/:id', deleteLoan);

export default router;
