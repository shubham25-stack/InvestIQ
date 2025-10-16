export const validateField = (fieldName, value, strategy) => {
    if (!strategy) return null;

    const { min, max } = strategy[fieldName];

    if (value < min || value > max) {
        return `Must be between ${min}% and ${max}%.`;
    }

    return null;
};

export const validateTotal = (allocations) => {
    const total = Object.values(allocations).reduce((sum, val) => sum + Number(val), 0);
    if (total !== 100) {
        return "Total allocation must be 100%.";
    }
    return null;
};