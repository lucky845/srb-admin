<template>
  <div class="app-container">
    <!-- 导入按钮 -->
    <div style="margin-bottom: 10px">
      <el-button
        @click="dialogVisible = true"
        type="primary"
        size="mini"
        icon="el-icon-download"
      >
        导入Excel
      </el-button>
      <!-- Excel导出按钮 -->
      <el-button
        @click="exportData = true"
        type="primary"
        size="mini"
        icon="el-icon-upload2"
      >
        导出Excel
      </el-button>
    </div>
    <!-- dialog对话框 -->
    <el-dialog title="数据字典导入" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="请选择需要上传的Excel文件">
          <el-upload
            :auto-upload="true"
            :multiple="false"
            :limit="1"
            :on-exceed="fileUploadExceed"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :action="BASE_API + '/admin/core/dict/import'"
            name="file"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // 定义数据
  data() {
    return {
      dialogVisible: false, // 文件上传对话框是否显示
      BASE_API: process.env.VUE_APP_BASE_API // 获取后端接口地址
    }
  },
  methods: {
    // 上传多于一个文件时
    fileUploadExceed() {
      this.$message.warning('只能选取一个文件')
    },
    // 文件上传成功后的回调: 通信成功
    fileUploadSuccess(response) {
      if (response.code === 0) {
        // 业务成功
        this.$message.success('数据导入成功')
        // 关闭对话框
        this.dialogVisible = false
      } else {
        // 业务失败
        this.$message.error(response.message)
      }
    },
    // 文件上传失败的回调: 通信失败
    fileUploadError() {
      this.$message.error('数据导入失败')
    },
    // 导出Excel按钮
    exportData() {
      // 导出Excel并下载
      window.location.href = this.BASE_API + '/admin/core/dict/export'
    }
  }
}
</script>
