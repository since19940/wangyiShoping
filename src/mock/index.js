import  Mock from 'mockjs'
import category from './category.json'
import categoryList from './categoryList.json'
import homeData from './homeData.json'

Mock.mock("/api/home",{code:0,data:homeData})
Mock.mock("/category",{code:0,data:category})
Mock.mock("/categoryList",{code:0,data:categoryList})
