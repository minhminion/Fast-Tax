import React, { useState, useEffect } from 'react'
import { Typography, Row, Col, Form, Button, InputNumber, Switch, Select, Divider } from 'antd'
const { Title, Text } = Typography
const { Option } = Select;

const TaxPayple2 = () => {
  const [taxBracket, setTaxBracket] = useState(0)
  const [incomeTax, setIncomeTax] = useState(0)
  const [expectedTax, setExpectedTax] = useState(0)

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

  // (max10)*10% + (max 12- max 10) * 12% + (max 22-max 12) * 22% + ((100,000 - A) - max 22) * 24%

  const taxRateSNG = (grossIncome) => {
    let taxIcome = 0
    let taxRate = 0
    if (grossIncome > 0) {
      taxIcome += (9700 * 0.1)
      taxRate = 10
    } 
    if (grossIncome > 9700) {
      taxIcome += ((39475 - 9700)*0.12)
      taxRate = 12
    } 
    if (grossIncome > 39475) {
      taxIcome += ((84200 - 39475)*0.22)
      taxRate = 22
    } 
    if (grossIncome > 84200) {
      taxIcome += ((160725 - 84200)*0.24)
      taxRate = 24
    } 
    if (grossIncome > 160725) {
      taxIcome += ((204100 - 160725)*0.32)
      taxRate = 32
    } 
    if (grossIncome > 204100) {
      taxIcome += ((510300 - 204100)*0.35)
      taxRate = 35
    } 
    if (grossIncome > 510300 ){
      taxIcome += ((grossIncome - 510300)*0.37)
      taxRate = 37
    }
    return {
      taxRate, taxIcome
    }
  }
  const taxRateMFJ = (grossIncome) => {
    let taxIcome = 0
    let taxRate = 0
    if (grossIncome > 0) {
      taxIcome += (19400 * 0.1)
      taxRate = 10
    } 
    if (grossIncome > 19400) {
      taxIcome += ((78950 - 19400)*0.12)
      taxRate = 12
    } 
    if (grossIncome > 78950) {
      taxIcome += ((168400 - 78950)*0.22)
      taxRate = 22
    } 
    if (grossIncome > 168400) {
      taxIcome += ((321450 - 168400)*0.24)
      taxRate = 24
    } 
    if (grossIncome > 321450) {
      taxIcome += ((408200 - 321450)*0.32)
      taxRate = 32
    } 
    if (grossIncome > 408200) {
      taxIcome += ((615350 - 408200)*0.35)
      taxRate = 35
    } 
    if (grossIncome > 615350 ){
      taxIcome += ((grossIncome - 615350)*0.37)
      taxRate = 37
    }
    return {
      taxRate, taxIcome
    }
  }
  const taxRateMFS = (grossIncome) => {
    let taxIcome = 0
    let taxRate = 0
    if (grossIncome > 0) {
      taxIcome += (9700 * 0.1)
      taxRate = 10
    } 
    if (grossIncome > 9700) {
      taxIcome += ((39475 - 9700)*0.12)
      taxRate = 12
    } 
    if (grossIncome > 39475) {
      taxIcome += ((84200 - 39475)*0.22)
      taxRate = 22
    } 
    if (grossIncome > 84200) {
      taxIcome += ((160725 - 84200)*0.24)
      taxRate = 24
    } 
    if (grossIncome > 160725) {
      taxIcome += ((204100 - 160725)*0.32)
      taxRate = 32
    } 
    if (grossIncome > 204100) {
      taxIcome += ((306175 - 204100)*0.35)
      taxRate = 35
    } 
    if (grossIncome > 306175 ){
      taxIcome += ((grossIncome - 306175)*0.37)
      taxRate = 37
    }
    return {
      taxRate, taxIcome
    }
  }
  const taxRateHOH = (grossIncome) => {
    let taxIcome = 0
    let taxRate = 0
    if (grossIncome > 0) {
      taxIcome += (13850 * 0.1)
      taxRate = 10
    } 
    if (grossIncome > 13850) {
      taxIcome += ((52850 - 13850)*0.12)
      taxRate = 12
    } 
    if (grossIncome > 52850) {
      taxIcome += ((84200 - 52850)*0.22)
      taxRate = 22
    } 
    if (grossIncome > 84200) {
      taxIcome += ((160700 - 84200)*0.24)
      taxRate = 24
    } 
    if (grossIncome > 160700) {
      taxIcome += ((204100 - 160700)*0.32)
      taxRate = 32
    } 
    if (grossIncome > 204100) {
      taxIcome += ((510300 - 204100)*0.35)
      taxRate = 35
    } 
    if (grossIncome > 510300 ){
      taxIcome += ((grossIncome - 510300)*0.37)
      taxRate = 37
    }
    return {
      taxRate, taxIcome
    }
  }
  const taxBracketCalculator = (status, grossIncome) => {
    switch (status) {
      case 'SNG':
        return taxRateSNG(grossIncome)
      case 'MFS':
        return taxRateMFS(grossIncome)
      case 'MFJ':
        return taxRateMFJ(grossIncome)
      case 'HOH':
        return taxRateHOH(grossIncome)
      default:
        break
    }
  }
  const onFinish = values => {
    const taxRate = taxBracketCalculator(values.status, values.grossIncome)
    setTaxBracket(taxRate.taxRate)
    setIncomeTax(taxRate.taxIcome)
    const expectedTax = (values.grossIncome - taxRate.taxIcome)*0.05
    setExpectedTax(expectedTax)
  };

  return (
    <div>
      <Title level={3}>Tax Bracket Calculator</Title>
      <Text style={{ fontSize: 16 }}>
        Taxact's free tax bracket calculator is a simple, easy way to estimate your federal
        income tax bracket and total tax.
      </Text>
      <Row align='middle' style={{ marginTop: 20 , border: '1px solid'}}>
        <Col span={8} style={{ height: 400, background: '#f6f5fb', padding: 25, paddingTop: 50, paddingBottom: 35, borderRight: '1px solid' }}>
          <Title level={4} style={{ textAlign: 'center' }}>Your 2020 Income Tax Bracket</Title><br />
          <Text>Tax Bracket:</Text><br />
          <Title level={4}>{taxBracket}%</Title>
          <Text>Income Tax:</Text><br />
          <Title level={4}>${new Intl.NumberFormat('en').format(incomeTax)}</Title>
          <Text>Expected Tax Return:</Text><br />
          <Title level={4}>${new Intl.NumberFormat('en').format(expectedTax)}</Title>
        </Col>
        <Col span={16} style={{ padding: 40, paddingLeft: 30}}>
          <Form
            onFinish={onFinish}
            name="complex-form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            size='large'
            layout='vertical'
            validateMessages={validateMessages}
            initialValues={{
              grossIncome: 1000,
              status: 'SNG'
            }}
          >
            <Form.Item
              name="status"
              label="Filing Status"
            >
              <Select>
                <Option value="SNG">Single</Option>
                <Option value="MFS">Married Filing Separately</Option>
                <Option value="MFJ">Married Filing Joint</Option>
                <Option value="HOH">Head of Household</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="grossIncome"
              label="Total Expected Gross Income For 2020"
              rules={[{ type: 'number', min: 0, defaultValue: 1000 }]}
            >
              <InputNumber
                style={{ width: "70%" }}
                min={0}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Calculate
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default TaxPayple2
