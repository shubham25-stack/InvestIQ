import asyncHandler from 'express-async-handler';
import Portfolio from '../models/portfolioModel.js';

const createPortfolio = asyncHandler(async (req, res) => {
  const { strategy, totalAmount, distribution } = req.body;

  if (!strategy || !totalAmount || !distribution) {
    res.status(400);
    throw new Error('Please provide all portfolio data');
  }

  const portfolio = new Portfolio({
    userId: req.user._id, // req.user comes from the 'protect' middleware
    strategy,
    totalAmount,
    distribution,
  });

  const createdPortfolio = await portfolio.save();
  res.status(201).json(createdPortfolio);
});

const getPortfolios = asyncHandler(async (req, res) => {
  // Find portfolios matching the user's ID
  const portfolios = await Portfolio.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(portfolios);
});

export { createPortfolio, getPortfolios };