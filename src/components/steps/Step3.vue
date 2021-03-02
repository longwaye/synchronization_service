<template>
  <div class="step3">
    <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div class="kind">
        <a-form-item label="基准列名：" class="form1">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <span class="synch_text">
          同步时需要以一个列的值作为基准参照点，每同<br />
          步一批数据会记录更新该值，推荐自增主键列,<br />
          如果没有需要提供唯一且单调递增的列才能保证<br />
          同步的稳定性和完整性
        </span>
      </div>
      <div class="synch">
        <a-form-item label="同步方式：">
          <a-select v-model:value="form.region" @change="selecthaddler">
            <a-select-option value="立即">
              立即
            </a-select-option>
            <a-select-option value="定时同步">
              定时同步
            </a-select-option>
            <a-select-option value="周期同步">
              周期同步
            </a-select-option>
            <a-select-option value="实时同步">
              实时同步
            </a-select-option>
            <a-select-option value="自定义">
              自定义
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <div class="time" v-show="form.region === '定时同步'">
        <a-form-item label="选择日期：">
          <a-config-provider :locale="locale">
            <a-date-picker
              v-model:value="form.date1"
              show-time
              placeholder="选择日期"
              @change="onChange"
              @ok="onOk"
              style="width: 100%;"
            />
          </a-config-provider>
        </a-form-item>
      </div>
      <div class="time" v-show="form.region === '周期同步'">
        <a-form-item label="周期：">
          <a-select v-model:value="form.time" style="width: 100%">
            <a-select-option value="每分钟">
              每分钟
            </a-select-option>
            <a-select-option value="每小时">
              每小时
            </a-select-option>
            <a-select-option value="每天">
              每天
            </a-select-option>
            <a-select-option value="每月">
              每月
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <div class="time" v-show="form.region === '自定义'">
        <a-form-item label="Corn表达式：">
          <a-input type="text" value="* * * * * ?"></a-input>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import locale from "ant-design-vue/es/locale/zh_CN";
import { useStep3Data } from "./Step3";

export default defineComponent({
  data() {
    return {
      locale,
      labelCol: { span: 10 },
      wrapperCol: { span: 6 }
    };
  },
  setup() {
    const { step3, onChange, onOk, selecthaddler } = useStep3Data();

    return { ...toRefs(step3), onChange, onOk, selecthaddler };
  }
});
</script>

<style scoped lang="less">
.step3 {
  div {
    margin-bottom: 15px;
  }
  .ant-form {
    margin-bottom: 80px;
  }
  .synch_text {
    font-size: 13px;
    text-align: left;
    color: #aaaaaa;
    display: flex;
    margin-left: 92px;
    justify-content: center;
  }
  .form1 {
    margin-bottom: 0;
  }
}
</style>
