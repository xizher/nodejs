import { QueryResult } from 'pg'
import { InsertOneWriteOpResult, DeleteWriteOpResultObject, UpdateWriteOpResult } from 'mongodb'

/**
 * 读取文件
 * @param path 文件路径
 * @param options 配置项
 * @param options.encoding 编码格式，默认值 'utf-8'
 * @param options.flag 文件系统支持，默认值 'r'
 * @returns 读取结果
 */
export declare function readFileAsync (path: string, options: {
  encoding?: string
  flag?: string
}) : Promise<Buffer>

/**
 * 写入文件
 * @param path 文件路径
 * @param content 写入内容
 * @param options 配置项
 * @param options.encoding 编码格式，默认值 'utf-8'
 * @param options.mode 编码格式，默认值 0o666
 * @param options.flag 文件系统支持，默认值 'r'
 * @returns 读取结果
 */
export declare function writeFileAsync (path: string, content: string, options: {
  encoding?: string
  flag?: string
  mode?: string
}) : Promise<void>

/**
 * postgresql sql 类
 */
export declare class PgSQL {

  /**
   * 设置配置项
   * @param options 配置项
   * @param options.port 端口号
   * @param options.host IP地址
   * @param options.user 用户
   * @param options.password 密码
   * @param options.database 连接数据库
   */
  setConfig (options: {
    port: number
    host: string
    user: string
    password: string
    database: string
  } ) : void

  /**
   * 执行SQL语句
   * @param sql sql语句
   */
  exec (sql: string) : Promise<QueryResult>

}

/**
 * postgresql sql 实例对象
 */
export declare const pgSql : PgSQL

/**
 * mongodb 数据库 操作 类
 */
export declare class MongodbHelper {
  /**
   * 设置配置项
   * @param config 配置项
   */
  setConfig (config: { host: String, port: Number, user: String, pwd: String, db: String } ) : void
  
  /**
   * 设置操作的集合
   * @param collection 操作的集合
   */
  useCollection (collection: string) : MongodbHelper

  /**
   * 查询文档
   * @param document 查询文档，默认值 {}
   * @param options 配置项 默认值 { amount = 0, page = 0 }
   * @returns 查询结果
   */
  query (document: any, options: { amount?: Number, page?: Number }) : Promise<Array<any>>

  /**
   * 插入文档
   * @param documents 插入的文档（s）
   */
  insert (documents: Object | Array<any>) : Promise<InsertOneWriteOpResult<any>>

  /**
   * 删除文档
   * @param document 删除的文档
   * @param isMany 是否删除全部符合条件的文档，否则仅删除第一条
   */
  delete (document: Object, isMany: boolean) : Promise<DeleteWriteOpResultObject>

  /**
   * 更新文档
   * @param filter 过滤器
   * @param updater 更新文档
   */
  update (filter: Object, updater: Object) : Promise<UpdateWriteOpResult>

  /**
   * 通过ObjectId更新文档
   * @param id 更新文档的ObjectId
   * @param updater 更新文档
   */
  updateFromOid (id: string, updater: Object) : Promise<UpdateWriteOpResult>

  /**
   * 通过ObjectId查询文档
   * @param id 查询文档的ObjectId
   */
  queryFromOid (id: string) : Promise<any>

}


/**
 * mongodb 数据库 操作 类 实例
 */
export declare const mongodbHelper : MongodbHelper
