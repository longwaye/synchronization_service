import { reactive, toRefs } from "vue";

type IForm = {
  value: undefined | string;
};

const step2 = reactive({
  yForm: {
    value: undefined
  },
  mbForm: {
    value: undefined
  },
  value2: "源",
  value3: "目标"
});

const handleChange1 = (value: string) => {
  (step2.yForm as IForm).value = value;
  console.log(step2.yForm.value);
};

const handleChange2 = (value: string) => {
  (step2.mbForm as IForm).value = value;
};

const useStep2Data = () => {
  return {
    ...toRefs(step2),
    handleChange1,
    handleChange2
  };
};
export { useStep2Data };
