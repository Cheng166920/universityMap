<template>
  <div class="paging">
    <div class="box_body">
      <el-table :data="tablearr" border size="small" style="width: 100%"  >
        <el-table-column
          label="省份"
          prop="provinces"
          min-width="150"
        >
        <template v-slot="scope">
          <router-link :to= "{name: 'Areatouniversity',params:{provinces: scope.row.provinces}}">
            <span>
              {{scope.row.provinces}}
            </span>
          </router-link>
        </template>
     </el-table-column>
      </el-table>
      <!--===分页=====-->
      <el-pagination
        :current-page="pageinfo.page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageinfo.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageinfo.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        style="margin-bottom: 3px"
      ></el-pagination>
    </div>
  </div>
</template>
 
<script>
import { getArea } from '@/api/area';
export default {
  name: "paging",
  data() {
    return {
      // 从后端获取到的所有表格数据
      sourceTableData: [],
      // 页面要显示的表格数据
      tableData: [],
      tablearr: [],
      // 分页信息
      pageinfo: {
        page: 1,
        size: 10,
        total: 0,
      },
    };
  },
  methods: {
    async getInfo(){
      this.sourceTableData ="";
      const ref = await getArea();
      console.log(ref);
      this.sourceTableData = ref.data;
      console.log(this.sourceTableData);
    // 初始化算出第一页数据
      this.tableData = this.currentChangePage(
      this.pageinfo.size,
      this.pageinfo.page
    );
    for (let i = 0; i < this.tableData.length; i++) {
      let obj = {};
      obj.provinces=this.tableData[i];
      console.log(this.tableData[i]);
      this.tablearr.push(obj);
    }
      console.log(this.tablearr);
      this.pageinfo.total = this.sourceTableData.length;
    },
    /** 切换每页显示条数 */
    handleSizeChange(val) {
      this.pageinfo.page = 1;
      this.pageinfo.size = val;
      this.tableData = this.currentChangePage(val, this.pageinfo.page);
    },
    /** 切换分页 */
    handleCurrentChange(val) {
      this.pageinfo.page = val;
      this.tableData = this.currentChangePage(this.pageinfo.size, val);
    },
    // 分页方法(用于表格数据后端不分页，放到前端做分页)
    currentChangePage(size, current) {
      const tablePush = [];
      let array = JSON.parse(JSON.stringify(this.sourceTableData));
      array.forEach((item, index) => {
        if (size * (current - 1) <= index && index <= size * current - 1) {
          tablePush.push(item);
        }
      });
      return tablePush;
    },
  },

  mounted(){
    this.getInfo();
  }
};
</script>
 
<style>
.paging {
  width: 100%;
  height: 100%;
}
.box_body {
  width: 1200px;
  margin: 50px auto;
}
</style>