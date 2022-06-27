<template>
  <div class="f-pagination">
    <span
      class="other"
      @click="preHandle"
      :class="{ 'is-disable': pageNo == 1 }"
      >上一页</span
    >
    <span
      class="inactive"
      v-show="continuesNumber.start > 1"
      @click="updatePage"
      >1</span
    >
    <span v-show="continuesNumber.start > 2">···</span>

    <span
      v-for="(page, index) in continuesNumber.end"
      :key="index"
      v-show="page >= continuesNumber.start"
      :class="{ active: page == pageNo, inactive: page != pageNo }"
      @click="updatePage"
    >
      {{ page }}
    </span>

    <span v-show="continuesNumber.end < totalPage">···</span>
    <span
      class="inactive"
      v-show="continuesNumber.end < totalPage"
      @click="updatePage"
    >
      {{ totalPage }}
    </span>
    <span
      class="other"
      @click="nextHandle"
      :class="{ 'is-disable': pageNo == totalPage }"
      >下一页</span
    >

    <span class="other">共 {{ total }} 条</span>
  </div>
</template>

<script>
export default {
  name: "FPagination",
  props: {
    pageNo: {
      type: String,
      default: "1",
    },
    pageSize: {
      type: String,
      default: "10",
    },
    total: {
      type: String,
    },
    continues: {
      type: String,
      default: "5",
    },
  },
  computed: {
    //计算总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算连续页码的起始和结束的位置
    continuesNumber() {
      let start = 0;
      let end = 0;
      const { pageNo, continues, totalPage } = this;
      //正常现象
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = parseInt(pageNo) - parseInt(continues / 2);
        end = parseInt(pageNo) + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = parseInt(continues);
        }
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    preHandle() {
      if (this.pageNo > 1) {
        this.$emit("update:pageNo", `${parseInt(this.pageNo) - 1}`);
      }
    },
    nextHandle() {
      if (this.pageNo < this.totalPage) {
        this.$emit("update:pageNo", `${parseInt(this.pageNo) + 1}`);
      }
    },
    updatePage(e) {
      this.$emit("update:pageNo", e.target.innerHTML);
    },
  },
};
</script>

<style lang="scss" scoped>
.f-pagination {
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 6px;
    margin: 0 5px;
  }
  .other {
    width: 60px;
  }
  .inactive {
    border: 1px solid #aaa;
  }
  .active {
    border: 1px solid rgb(114, 131, 243);
    background-color: #409eff;
  }
  .is-disable {
    cursor: not-allowed;
    color: #aaa;
  }
}
</style>
