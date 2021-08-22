import React, { useState } from 'react';
import { Modal } from 'react-native';
import {useForm} from 'react-hook-form';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles';


type FormData = {
  name: string;
  amount: string;

}

export function Register(){
 const [transactionType, setTransactionType] = useState('up');
 const [category, setCategory] = useState({
   key: 'category',
   name: 'Categoria',
 });

 const {
   control,
   handleSubmit,
 } = useForm();

 const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionTypesSelect(type: 'up'| 'down'){
    setTransactionType(type)
  }
  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }
  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }
  function handleRegister(form:FormData){
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    };
    console.log(form)

  }

  return(
    <Container>
      <Header>
        <Title>
          Cadastro
        </Title>
      </Header>
      <Form>
        <Fields>
          <InputForm
            name="name"
            control={control}
            placeholder="Nome"
          />
          <InputForm 
            name="amount"
            control={control}
            placeholder="Preço"
          />
          <TransactionsTypes> 
            <TransactionTypeButton 
              type="up"
              title="Income"
              onPress={() => handleTransactionTypesSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypesSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />          

        </Fields>
        <Button
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
         
      </Form>

      <Modal 
        visible={categoryModalOpen}
      >
       <CategorySelect
        category={category}
        setCategory={setCategory}
        closeSelectCategory={handleCloseSelectCategoryModal}
       />
      </Modal>
    </Container>
  )
}