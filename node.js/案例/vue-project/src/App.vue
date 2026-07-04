<template>
  <div class="container">
    <h1 class="title">欢迎进入学员管理系统</h1>
    <div class="search-group">
      <input type="text" v-model="searchName" placeholder="请输入要搜索的学员姓名" />
      <button class="search-btn" @click="searchStudents">搜索</button>
    </div>
    <div class="input-group">
      <input type="text" v-model="name" placeholder="请输入姓名" />
      <input type="text" v-model="age" placeholder="请输入年龄" />
      <input type="text" v-model="gender" placeholder="请输入性别" />
      <button @click="addStudents">添加学员</button>
    </div>
    <div class="list-container">
      <div class="list-header">
        <span>姓名</span>
        <span>年龄</span>
        <span>性别</span>
        <span>操作</span>
      </div>
      <ul class="student-list">
        <li class="student-item" v-for="item in data" :key="item.id">
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
          <span>{{ item.gender }}</span>
          <span>
            <button @click="deleteStudents(item.id)">删除</button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import axios from "axios"
  import { onMounted, reactive, ref } from 'vue'

  onMounted(() => {
    getAllStudents();
  })

  const data = ref([]);
  const name = ref("");
  const age = ref("");
  const gender = ref("");
  const searchName = ref("");

  const getAllStudents = () => {
    axios.get("http://127.0.0.1:3000/students").then(res => {
      data.value = res.data;
    })
  }


  const searchStudents = () => {
    axios.post("http://127.0.0.1:3000/searchStudents", {
      name: searchName.value,
    }).then(res => {
      data.value = res.data;
    })
  }

  const addStudents = () => {
    axios.post("http://127.0.0.1:3000/addStudents", {
      name: name.value,
      age: Number(age.value),
      gender: gender.value
    }).then(res => {
      getAllStudents()
    })
  }

  const deleteStudents = (id) => {
    axios.post("http://127.0.0.1:3000/deleteStudents", {
      id: id,
    }).then(res => {
      getAllStudents()
    })
  }
</script>
<style scoped>
  .container {
    max-width: 1000px;
    margin: auto;
    padding: 20px;
  }

  .title {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .search-group {
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .search-group input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }

  .search-group input:focus {
    outline: none;
    border-color: #409eff;
  }

  .search-btn {
    width: 100px;
    padding: 10px 20px;
    background-color: #67c23a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .input-group {
    display: flex;
    align-items: center;
    height: 80px;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: white;
  }

  .input-group input {
    flex: 1;
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .input-group input:focus {
    outline: none;
    border-color: #409eff;
  }

  .input-group button {
    width: 100px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #409eff;
    padding: 10px 20px;
  }

  .list-container {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: white;
    padding: 20px;
  }

  .list-header {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: #f8faf8;
    border-radius: 6px;
    font-weight: bold;
    color: #2c3e50;
  }

  .list-header span {
    flex: 1;
    text-align: center;
  }

  .student-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .student-item {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid#eee;
  }

  .student-item span {
    flex: 1;
    text-align: center;
    color: #2c3e50;
  }

  .student-item button {
    padding: 6px 12px;
    background-color: #f56c6c;
    color: white;
    border: none;
    border-radius: 4px;
  }
</style>
