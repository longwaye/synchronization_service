import { reactive } from "vue";
import { useStep1Data } from "@/components/steps/Step1";
import { useStep2Data } from "@/components/steps/Step2";

const step = reactive({
  flag: false,
  current: 0,
  steps: [
    {
      title: "数据库设置",
      description: "设置需要同步的源数据库和目标数据库",
      content: 1
    },
    {
      title: "表设置",
      description: "设置需要同步的表和字段以及映射关系",
      content: 2
    },
    {
      title: "完成",
      description: "提交同步任务",
      content: 3
    }
  ]
});

const next = () => {
  console.log(step.current);
  if (step.current === 0) {
    // console.log("state.step1", state.step1);
    const { yForm, mbForm } = useStep1Data();
    console.log("step1", yForm, mbForm);
  } else {
    const { yForm, mbForm } = useStep2Data();
    console.log("step2", yForm, mbForm);
  }
  step.current++;
};
const prev = () => {
  step.current--;
};

export { step, prev, next };
