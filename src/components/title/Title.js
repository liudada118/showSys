import React from 'react'

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Menu, Dropdown, Space, Select } from 'antd';
import { useState } from 'react';
import option from '../../assets/image/Option.png'
import './title.scss'

const navItems = [
  {
    label: '实时',
    key: 'mail',
  },
  {
    label: '回放',
    key: 'app',
  },
];

const sitItems = [
  {
    label: '22', //<a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: '11', //<a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];



const Title = () => {

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <div className="title">
    bodyta
    <div className="titleItems">
      <Select
        className='titleSelect'
        showSearch
        placeholder="选择一个传感器"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'tom',
            label: 'Tom',
          },
        ]}
      />

      <Menu className='menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navItems} />
    </div>
    <Dropdown
      menu={{
        sitItems,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <img className='optionImg' src={option} alt="" />
        </Space>
      </a>
    </Dropdown>

  </div>
    ;
};
export default Title;