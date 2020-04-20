import React, {useState} from 'react'
import { Form, Input, Tooltip, Button, InputNumber, Switch, Typography, Divider } from 'antd';
const { Title } = Typography

const TaxPayple = () => {
  const [taxPayple, setTaxPayple] = useState(0);
  const [taxReturn, settaxReturn] = useState(0)

  const onFinish = values => {
    const taxRate = getTaxRate(values.grossIncome, values.maried)
    const taxPayple = values.grossIncome*(taxRate/100)
    const taxReturn = (values.grossIncome - (taxPayple))*0.05
    setTaxPayple(taxPayple.toFixed(2))
    settaxReturn(taxReturn.toFixed(2))
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const getTaxRate = (grossIncome, isMaried) => {
    console.log('======== Bao Minh: getTaxRate -> grossIncome', grossIncome)
    if(grossIncome <= 9700) {
      return 10
    } else if ( grossIncome <= 39475) {
      return 12
    } else if ( grossIncome <= 84200) {
      return 22
    } else {
      return 24
    }
  }

  return (
    <div>
      <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} size='large'
        validateMessages={validateMessages}
        initialValues={{
          grossIncome: 1000,
          maried: false
        }}
      >
        <Form.Item
          name="grossIncome"
          label="Gross Income"
          rules={[{ type: 'number', min: 0, defaultValue: 1000 }]}
        >
          <InputNumber
            style={{width: "70%"}}
            min={0}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
          />
        </Form.Item>
        <Form.Item
          name="maried"
          label="Are you married ?"
        >
          <Switch />
        </Form.Item>

        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Calculate
        </Button>
        </Form.Item>
      </Form>
      <div>
        <Divider />
        <Title level={4}>Total Tax Payple: ${taxPayple}</Title>
        <Title level={4}>Expected Tax Return: ${taxReturn}</Title>
      </div>
    </div>
  )
}

export default TaxPayple
