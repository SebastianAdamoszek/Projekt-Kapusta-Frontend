import { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SelectCategory from '../../Expenses/SelectCategory/SelectCategory';
import AmountInput from '../../Expenses/Calculator/Calculator';
import {
  StyledWhiteButton,
  StyledOrangeButton,
} from 'components/Buttons/Buttons.styled';
import DateSelector from '../../Expenses/DateSelector';
import {
  FormWrapper,
  StyledForm,
  StyledInputsContainer,
  ProductInput,
  ButtonWrapper,
} from './MobileTransactionForm.styled';
import { addExpense, addIncome } from '../../../redux/Transactions/operations';

export default function MobileTransactionForm() {
  const [elementCategory, setElementCategory] = useState('Category');
  const [startDate, setStartDate] = useState(new Date());

  const location = useLocation();
  const form = useRef(null);

  const dispatch = useDispatch();

  let categoryArray;
  let functionToDispatch;

  // Check location for submit incomes or expenses

  if (location.pathname === '/income') {
    categoryArray = ['Salary', 'Additional income'];
    functionToDispatch = addIncome;
  }
  if (location.pathname === '/expenses') {
    categoryArray = [
      'Transport',
      'Products',
      'Health',
      'Alcohol',
      'Entertainment',
      'Housing',
      'Technique',
      'Communal, communication',
      'Sports, hobbies',
      'Education',
      'Other',
    ];

    functionToDispatch = addExpense;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { description, sum } = event.target.elements;
    let transactionAmount = sum.value;

    // Verification for null inputs

    if (description.value.trim() === '') {
      toast('Please add a description');
      return;
    }
    if (elementCategory === 'Category') {
      toast('Please choose a category');
      return;
    }
    if (transactionAmount.trim() === '') {
      toast('Please enter an amount');
      return;
    }

    if (transactionAmount < 0) transactionAmount = transactionAmount * -1;

    // Prepare dispatch data

    const dispatchData = {
      description: description.value,
      amount: Number(transactionAmount),
      date: startDate.toISOString().split('T')[0],
      category: elementCategory,
    };

    dispatch(functionToDispatch(dispatchData));
    event.target.reset();
    setElementCategory('Category');
    window.location.reload();
  };

  // Reset form

  const handleReset = () => {
    setStartDate(new Date());
    form.current.reset();
    setElementCategory('Category');
  };

  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit} ref={form}>
          <StyledInputsContainer>
            <DateSelector startDate={startDate} setStartDate={setStartDate} />
            <SelectCategory
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            <ProductInput
              placeholder="Product description"
              name="description"
            />

            <AmountInput name="sum" />
          </StyledInputsContainer>
          <ButtonWrapper>
            <StyledOrangeButton type="submit">INPUT</StyledOrangeButton>
            <StyledWhiteButton type="button" onClick={handleReset}>
              CLEAR
            </StyledWhiteButton>
          </ButtonWrapper>
        </StyledForm>
      </FormWrapper>
    </>
  );
}
