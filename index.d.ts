import { QueryResult } from 'pg'

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
