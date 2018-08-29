<script>
  export default {
    props: {
      // 当前表单元素字段
      column: {
        type: Object,
        default: () => {
          return {
            options: []
          };
        }
      }, 
    },

    data() {
      return {
        currentValue: null,
      }
    },

    mounted() {
      this.$set(this, 'currentValue', this.column.value);
    },

    render(h) {
      let dynamic = <span/>;

      let config = {
        props: {
          value: this.currentValue,
          placeholder: this.column.placeholder
        },
        on: {
          input: (val) => {
            this.$set(this, 'currentValue', val);
            this.$emit('input', val);
          }
        }
      };
      
      switch(this.column.type) {
        case 'select':
          dynamic = (
            <el-select {...config}>
              {
                this._l(this.column.options, option => {
                  return <el-option label={option.label} value={option.value} key={'option-' + option.value}/>;
                })
              }
            </el-select>
          )
          break;
        default:
          dynamic = <el-input {...config}/>;
      }

      return dynamic;
    }
  }
</script>