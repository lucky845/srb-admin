<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="borrowAmount" label="借款额度" />
      <el-table-column prop="integralStart" label="积分区间开始" />
      <el-table-column prop="integralEnd" label="积分区间结束" />
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <!-- 修改按钮 -->
          <router-link
            :to="'/core/integral-grade/edit/' + scope.row.id"
            style="margin-right: 5px"
          >
            <el-button type="primary" size="mini" icon="el-icon-edit">
              修改
            </el-button>
          </router-link>
          <!-- 删除按钮 -->
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeById(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 引入api模块
import integralGradeApi from '@/api/core/integral-grade'
export default {
  // 定义数据模型
  data() {
    return {
      list: [] // 数据列表
    }
  },
  // 页面渲染成功后获取数据
  created() {
    this.fetchData()
  },
  methods: {
    // 查询所有列表数据
    fetchData() {
      integralGradeApi.list().then((response) => {
        this.list = response.data.list
      })
    },
    // 根据id删除数据
    removeById(id) {
      // console.log(id)
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          return integralGradeApi.removeById(id)
        })
        .then((response) => {
          this.$message.success(response.message)
          // 删除成功,刷新列表
          this.fetchData()
        })
        .catch((error) => {
          // 只有error 的值为cancel时才弹出取消信息框
          if (error === 'cancel') {
            this.$message.info('取消删除')
          }
        })
    }
  }
}
</script>
