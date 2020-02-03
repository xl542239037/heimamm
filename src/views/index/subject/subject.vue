<template>
  <div class="subject-container">
    <!-- 头部卡片 -->
    <el-card class="head-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学科编号">
          <el-input class="short-input" v-model="formInline.rid"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
          <el-input v-model="formInline.name"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
          <el-input
            class="short-input"
            v-model="formInline.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.status" placeholder="请选择状态">
            <el-option label="禁用" value="0"></el-option>
            <el-option label="启用" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="btn-form-item">
          <el-button type="primary" @click="getData">搜索</el-button>
          <el-button @click="clear">清除</el-button>
          <el-button
            @click="addFormVisible = true"
            type="primary"
            icon="el-icon-plus"
            >新增学科</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 身体卡片 -->
    <el-card class="body-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"> </el-table-column>
        <el-table-column prop="rid" label="学科编号"> </el-table-column>
        <el-table-column prop="name" label="学科名称"> </el-table-column>
        <el-table-column prop="short_name" label="简称"> </el-table-column>
        <el-table-column prop="username" label="创建者"> </el-table-column>
        <el-table-column prop="create_time" label="创建日期"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template>
            <span>启用</span>
            <!-- <span class="red">禁用</span> -->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="text">编辑</el-button>
            <el-button type="text"> </el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="pageSizes"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 新增框 -->
    <addDialog></addDialog>
    <!-- 编辑框框 -->
    <!-- <editDialog ref="editDialog"></editDialog> -->
  </div>
</template>

<script>
import addDialog from './components/addDialog.vue'
import {subjectList} from '../../../api/subject'
export default {
  name: 'subject',
  components: {
    addDialog
  },
  data () {
    return {
      // 顶部的 行内表单
      formInline: {
        // 学科id
        rid: '',
        // 状态
        status: '',
        // 学科名称
        name: '',
        // 创建者
        username: ''
      },
      // table的数据
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      // 新增对话框的数据
      // 是否显示
      addFormVisible: false,
      // 是否显示 编辑框
      editFormVisible: false,
      // 页数据
      // 页码
      page: 1,
      // 每一页多少条
      limit: 2,
      // 页容量选项 数组
      pageSizes: [2, 4, 6, 9],
      // 总条数
      total: 0
    }
  },
  methods: {
    //清除
    clear () {},
    //搜索
    getData () {},
    // 页码改变
    handleCurrentChange () {},
    // 页容量改变 回调函数
    handleSizeChange () {}
  },
  created(){
     subjectList({
        page: this.page,
        limit: this.limit,
        // 展开运算符（扩展运算符）
        ...this.formInline
      }).then(res => {
        // 保存表格数据
        window.console.log(res)
        this.tableData = res.data.items;
        // 保存总条数
        // this.total = res.data.pagination.total;
      });
  }
}
</script>

<style lang="less">
.subject-container {
  .head-card {
    // 设置按钮的容器尺寸
    .el-form-item__content {
      width: 149px;
    }
    .short-input .el-form-item__content {
      width: 100px;
    }
    .btn-form-item .el-form-item__content {
      width: 100%;
    }
  }

  // 分页
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .body-card {
    margin-top: 19px;
  }

  // 高亮的span
  span.red {
    color: #ff4b4b;
  }
}
</style>
