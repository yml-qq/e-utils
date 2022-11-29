# e-utils
🤞前端常用函数工具库

日常开发过程中会经常用到的`浏览器类型判断`、`日期格式化`、`数据处理`等常用的业务逻辑函数，为避免不同项目使用而进行重复工作，这里统一封装。并且使用 jest 进行测试，确保函数工具的正确性。

### ⚡️Advantage

- 简单，只对引入的代码进行打包
- 完善的测试，使用jest进行单元测试，编写各种测试用例，力求通过率99%以上
- 强类型支持，使用TypeScript编写，拥有强大的类型推导提示
- 代码提交校验，强制规范流程，防止开发失误（waiting...）

### ✨使用

#### npm

```powershell
npm install e-utils -S
```

### 🎉API文档

##### Device

​		[getIsMobile](https://github.com/yml-qq/e-utils/blob/main/src/device/getIsMobile.ts)                           获取是否是移动端

##### Storage

​		[storage](https://github.com/yml-qq/e-utils/blob/main/src/storage/storage.ts)                                  Web Storage

##### Object

​		[deepClone](https://github.com/yml-qq/e-utils/blob/main/src/object/deepClone.ts)                            深拷贝

**String**

​		[trim](https://github.com/yml-qq/e-utils/blob/main/src/string/trim.ts)                                        去除字符串空格

**Vue**

​		
