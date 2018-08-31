const insertColumns = [
  {
    keyName: 'name',
    value: '',
    label: '名称',
    type: 'input',
    placeholder: '请输入'
  }, {
    keyName: 'regiod',
    value: '',
    label: '地区',
    type: 'select',
    placeholder: '请选择',
    options: [{
      value: '1',
      label: '北京'
    }, {
      value: '2',
      label: '上海'
    }]
  }
]

export default insertColumns