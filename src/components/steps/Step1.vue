<template>
  <div class="step1">
    <a-row>
      <a-col :span="1"> </a-col>

      <a-col :span="10" class="form1">
        <h3>源数据库</h3>
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="连接: ">
            <a-input v-model:value="yForm.value" placeholder="Basic usage">
            </a-input>
          </a-form-item>
          <a-form-item label="用户名:" v-bind="validateInfos.name">
            <a-input v-model:value="yForm.name" />
          </a-form-item>
          <a-form-item label="密码" v-bind="validateInfos.name">
            <a-input-password v-model:value="yForm.password" />
          </a-form-item>
          <a-form-item label="数据库">
            <a-input v-model:value="yForm.data" />
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="2">
        <div class="icons-list">
          <ArrowRightOutlined />
        </div>
      </a-col>
      <a-col :span="10" class="form1">
        <h3>目标数据库</h3>
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="连接" v-bind="validateInfos.region">
            <a-select
              v-model:value="mbForm.value"
              placeholder="192.168.0.1:8080"
            >
              <a-select-option value="shanghai">
                192.168.0.1:8080
              </a-select-option>
              <a-select-option value="beijing">
                127.0.0.1:3306
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="用户名" v-bind="validateInfos.name">
            <a-input v-model:value="mbForm.name" />
          </a-form-item>
          <a-form-item label="密码" v-bind="validateInfos.name">
            <a-input-password v-model:value="mbForm.password" />
          </a-form-item>
          <a-form-item label="数据库">
            <a-input v-model:value="mbForm.data" />
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="1"> </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { useForm } from "@ant-design-vue/use";
import { useStep1Data } from "./Step1";

export default defineComponent({
  components: {
    ArrowRightOutlined
  },
  setup() {
    const { yForm, mbForm, rulesRef } = useStep1Data();
    const { resetFields, validateInfos } = useForm(yForm, rulesRef);
    return {
      labelCol: { span: 5, offset: 1 },
      wrapperCol: { span: 12, offset: 1 },
      validateInfos,
      resetFields,
      yForm,
      mbForm
    };
  }
});
</script>

<style scoped lang="less">
.icons-list ::v-deep(.anticon) {
  margin-right: 5px;
  font-size: 50px;
  color: cornflowerblue;
  flex: 1;
  line-height: 270px;
}
h3 {
  padding-bottom: 7px;
}
.form1 {
  padding: 15px;
  border: 1px solid #b2b2b2;
  width: 381px;
  height: 250px;
  .ant-form-item {
    margin-bottom: 7px;
  }
}
</style>
