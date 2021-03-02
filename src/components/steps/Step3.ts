import { reactive } from "vue";

const step3 = reactive({
  form: {
    name: "",
    region: "定时同步",
    date1: null,
    time: "每天"
  }
});
const onChange = (e: string) => {
  console.log("onChange", e);
};
const onOk = () => {
  console.log("onOk");
};
const selecthaddler = (value: string) => {
  console.log(`selected ${value}`);
};
const useStep3Data = () => {
  return {
    step3,
    // ...toRefs(step3),
    onChange,
    onOk,
    selecthaddler
  };
};
export { useStep3Data };
