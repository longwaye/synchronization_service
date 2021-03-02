<template>
  <div class="data-sync">
    <div class="header">
      <span>同步进度</span>
      <a-button @click="showModal" class="fr" type="primary" shape="round">
        添加同步任务
      </a-button>
      <a-modal
        class="maodalWith"
        :closable="false"
        :footer="null"
        v-model:visible="visible"
        @ok="handleOk"
        centered
        cancelText="关闭"
        width="1000px"
        :maskClosable="true"
        :ok-button-props="{ disabled: true }"
        @cancel="closeStep"
        :destroyOnClose="true"
      >
        <Step @putdata="handleOk"></Step>
      </a-modal>
    </div>
    <div class="synTable">
      <a-table :columns="columns" :data-source="data" bordered>
        <template #tags="{ text: tags }">
          <span>
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === '同步中'
                  ? 'green'
                  : tag.length > 4
                  ? 'volcano'
                  : 'geekblue'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import Step from "../../views/step/Step.vue";
import { getMenuList } from "../../api/step";

export default defineComponent({
  components: {
    Step
  },
  setup() {
    const router = useRouter();
    // const current = ref();
    const closeStep = () => {
      console.log("关闭弹窗");
    };
    const addData = () => {
      router.push("/step");
    };

    const state = reactive({
      visible: false,
      data: [],
      columns: [
        {
          title: "源数据库",
          dataIndex: "ydata",
          key: "ydata",
          align: "center",
          width: 110
        },
        {
          title: "源表",
          dataIndex: "yform",
          key: "yform",
          align: "center"
        },
        {
          title: "目的数据库",
          dataIndex: "mddata",
          key: "mddata",
          align: "center",
          width: 100
        },
        {
          title: "目的表",
          key: "mdform",
          dataIndex: "mdform",
          align: "center"
        },
        {
          title: "进度",
          key: "rate",
          dataIndex: "rate",
          align: "center",
          width: 120
        },
        {
          title: "当前状态",
          key: "tags",
          dataIndex: "tags",
          slots: { customRender: "tags" },
          align: "center"
        },
        {
          title: "异常数据处理方式",
          key: "error",
          dataIndex: "error",
          align: "center",
          width: 180
        },
        {
          title: "开始时间",
          key: "time",
          dataIndex: "time",
          align: "center",
          width: 150
        },
        {
          title: "同步周期",
          key: "cycle",
          dataIndex: "cycle",
          align: "center",
          width: 100
        },
        {
          title: "同步次数",
          key: "frequency",
          dataIndex: "frequency",
          align: "center",
          width: 100
        }
      ]
    });

    const showModal = () => {
      state.visible = true;
    };

    const handleOk = () => {
      location.reload();
      state.visible = false;
    };

    const getdata = async () => {
      const res = await getMenuList();
      console.log(res);
      state.data = res.data.data.list;
      console.log(state.data);
    };

    onBeforeMount(() => {
      getdata();
    });

    // 表格数据
    return {
      addData,
      ...toRefs(state),
      showModal,
      handleOk,
      closeStep,
      getdata
    };
  }
});
</script>

<style scoped lang="less">
.data-sync {
  width: 1047px;
  margin: 70px auto;
  min-width: 1000px;
  border: 1px solid #f0f0f0;
  .synTable ::v-deep .ant-table {
    font-size: 13px;
  }
  .header {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-between;
    align-items: center;
    > span {
      font-weight: 600;
    }
  }
  .table {
    padding: 18px;
    border: 1px solid #f0f0f0;
  }
}
.ant-modal-content {
  .ant-modal-close-x {
    width: 20px;
  }
}
</style>
