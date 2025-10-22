import mongoose from 'mongoose';

const portfolioSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Links this to the User model
    },
    strategy: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    distribution: {
      bonds: { type: Number, required: true },
      stocks: { type: Number, required: true },
      cash: { type: Number, required: true },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt/updatedAt
  }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;