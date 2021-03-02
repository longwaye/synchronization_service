import { reactive, toRefs } from "vue";
const state = reactive({
  yForm: {
    name: "long",
    password: 12345,
    region: undefined,
    value: "127.0.0.1:8080",
    data: ""
  },
  mbForm: {
    name: "xxx",
    password: null,
    region: undefined,
    value: "127.0.0.1:8080",
    data: ""
  }
});
const rulesRef = reactive({
  name: [
    {
      required: true,
      message: "Please input name"
    }
  ],
  region: [
    {
      required: true,
      message: "Please select region"
    }
  ]
});

const useStep1Data = () => {
  return {
    ...toRefs(state),
    rulesRef
  };
};

export { useStep1Data };
