import express from 'express';
import {
  createPortfolio,
  getPortfolios,
} from '../controllers/portfolioController.js';
import { protect } from '../middleware/authMiddleware.js'; // Import the protector

const router = express.Router();

// Apply the 'protect' middleware to both routes
router.route('/')
  .post(protect, createPortfolio) // POST /api/portfolios
  .get(protect, getPortfolios);   // GET /api/portfolios

export default router;