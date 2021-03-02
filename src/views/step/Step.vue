<template>
  <div class="step_box">
    <div class="main" :class="flag ? 'opacity' : ''">
      <a-steps :current="current">
        <a-step
          v-for="item in steps"
          :key="item.title"
          :description="item.description"
          :title="item.title"
        />
      </a-steps>
      <div class="steps-content">
        <Step1 ref="step1" v-show="steps[current].content === 1"></Step1>
        <Step2 ref="step2" v-show="steps[current].content === 2"></Step2>
        <Step3 ref="step3" v-show="steps[current].content === 3"></Step3>
      </div>
      <div class="steps-action">
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
          上一步
        </a-button>
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          @click="next"
        >
          下一步
        </a-button>
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="putdata"
        >
          完成
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onUnmounted } from "vue";
import { step, prev, next } from "./Step";
import { message } from "ant-design-vue";
import Step1 from "../../components/steps/Step1.vue";
import Step2 from "../../components/steps/Step2.vue";
import Step3 from "../../components/steps/Step3.vue";
import { useStep3Data } from "@/components/steps/Step3";

export default defineComponent({
  components: {
    Step1,
    Step2,
    Step3
  },
  setup(props, ctx) {
    console.log(props);
    const { step3 } = useStep3Data();
    const putdata = () => {
      message.config({
        top: `300px`,
        duration: 2,
        maxCount: 3
      });
      step.flag = true;
      const hide = message.loading("提交中..", 0);
      setTimeout(() => {
        hide;
        ctx.emit("putdata");
      }, 2000);
      console.log("step3", step3.form);
    };
    onUnmounted(() => {
      step.current = 0;
      message.destroy();
    });
    return { ...toRefs(step), next, prev, putdata };
  }
});
</script>
<style scoped lang="less">
.step_box {
  margin: 0 auto;
  .main {
    width: 100%;
    height: 100%;
    .ant-steps {
      padding: 12px;
      border: 1px solid #b2b2b2;
    }
    .steps-content {
      border-left: 1px solid #b2b2b2;
      border-right: 1px solid #b2b2b2;
      min-height: 200px;
      text-align: center;
      padding: 35px;
      font-size: 13px;
    }
    .steps-action {
      border: 1px solid #b2b2b2;
      padding: 24px;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      .ant-btn {
        margin-left: 15px;
      }
    }
  }
}
.opacity {
  opacity: 0.4;
}
</style>
