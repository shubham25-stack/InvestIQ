export const validateField = (name,value,strategy)=>{
    if(!strategy) return null;
    const rules = strategy[name];
    if(value <rules.min || value >rules.max){
        return `must be between ${rules.min}% and ${rules.max}%.`;
    }
    return null;
};

export const validateTotal = (allocations)=>{
    const total = Object.values(allocations).reduce((sum,val)=> sum + Number(val||0),0);
    if(total !==100){
        return `Total allocation must be 100%. Current total is ${total}%.`;
    }
    return null;
}