import express from "express";
import { 
    getAllBranches, 
    getSingleBranch,
    createBranch,
    updateBranch,
    deleteBranch
} from "../controllers/branchController.js";
const branchRouter = express.Router();

branchRouter.get('/', getAllBranches);
branchRouter.get('/:id', getSingleBranch);
branchRouter.post('/', createBranch);
branchRouter.put('/:id', updateBranch);
branchRouter.delete('/:id', deleteBranch);

export default branchRouter;