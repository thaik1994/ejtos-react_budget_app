
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        
    }
    const maxBudget = (event) => {
        if(newBudget > 20000) {
            alert("Budget must not exceed 20000")
        }
        if(newBudget < totalExpenses){
            alert("You can not reduce the budget value lower then the spending")
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={maxBudget}></input>
</div>
    );
};
export default Budget;