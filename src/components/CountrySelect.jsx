import React from 'react';
import Select, { components } from 'react-select';

const options = [
  {
    value: 'IN',
    label: 'India',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  },
  {
    value: 'MY',
    label: 'Malaysia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
  },
  {
    value: 'SG',
    label: 'Singapore',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
  },
];

// कस्टम Option कंपोनेंट
const CustomOption = (props) => (
  <components.Option {...props}>
    <img
      src={props.data.image}
      alt={props.data.label}
      style={{ width: 30, marginRight: 20, verticalAlign: 'first' }}
    />
    ({props.data.value})
  </components.Option>
);

// कस्टम SingleValue कंपोनेंट
const CustomSingleValue = (props) => (
  <components.SingleValue {...props}>
    <img
      src={props.data.image}
      alt={props.data.label}
      style={{ width: 30, verticalAlign: 'middle' }}
    />
  </components.SingleValue>
);

const CountrySelect = () => (
  <Select
    options={options}
    defaultValue={options[0]}
    components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
    placeholder="Select a country..."
  />
);

export default CountrySelect;
