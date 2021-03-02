<template>
  <div class="step2">
    <a-collapse default-active-key="1">
      <div class="header">
        <a-row type="flex" justify="space-between">
          <a-col :span="4"></a-col>
          <a-col :span="6">
            <a-select
              v-model:value="yForm.value"
              mode="tags"
              style="width: 100%"
              placeholder="源表"
              @change="handleChange1"
            >
              <a-select-option v-for="(i, index) in yForm" :key="index">
                {{ i }}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="2">
            <div class="icons-list">
              <ArrowRightOutlined />
            </div>
          </a-col>
          <a-col :span="6">
            <a-select
              v-model:value="mbForm.value"
              mode="tags"
              style="width: 100%"
              placeholder="目标表"
              @change="handleChange2"
            >
              <a-select-option v-for="(i, index) in mbForm.ips" :key="index">
                {{ i.ip }}
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="5"></a-col>
        </a-row>
      </div>
      <a-collapse-panel key="1">
        <a-row type="flex" justify="space-around">
          <a-col :span="3"></a-col>
          <a-col :span="4">
            <a-input v-model:value="value2" placeholder="源字段" />
          </a-col>
          <a-col :span="1">
            <div class="icons-list">
              <ArrowRightOutlined />
            </div>
          </a-col>
          <a-col :span="4">
            <a-input v-model:value="value2" placeholder="目标字段" />
          </a-col>
          <a-col :span="3"><span class="erro">异常值处理</span></a-col>
          <a-col :span="3">
            <a-select v-model:value="value3" style="width: 120px" ref="select">
              <a-select-option value="删除">
                删除
              </a-select-option>
              <a-select-option value="忽略">
                忽略
              </a-select-option>
              <a-select-option value="人工处理">
                人工处理
              </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3">
            <a-button type="danger">
              删除
            </a-button>
          </a-col>
          <a-col :span="3"></a-col>
        </a-row>
        <div class="icons-list">
          <PlusCircleOutlined />
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons-vue";
import { useStep2Data } from "./Step2";
// type IForm = {
//   value: undefined | string;
// };
export default defineComponent({
  components: {
    ArrowRightOutlined,
    PlusCircleOutlined
  },
  setup() {
    const {
      yForm,
      mbForm,
      handleChange1,
      handleChange2,
      value2,
      value3
    } = useStep2Data();
    return { handleChange1, yForm, mbForm, handleChange2, value2, value3 };
  }
});
</script>

<style lang="less">
.step2 {
  .header {
    width: 100%;
    height: 100%;
    margin-top: 17px;
  }
  .icons-list {
    font-size: 21px;
    color: #2a5caa;
  }
  .erro {
    line-height: 33px;
  }
  .ant-collapse {
    .ant-collapse-header {
      left: 105px;
      top: -30px;
      width: 15px;
    }
  }
}
</style>
