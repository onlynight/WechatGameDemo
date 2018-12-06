const __ = {
  poolDic: Symbol('poolDic')
}

/**
 * 简易的对象池实现
 * 用于对象的存储和重复使用
 * 可以减少对象频繁的创建和销毁的开销
 * 提高游戏性能
 */
export default class Pool {

  constructor() {
    this[__.poolDic] = {}
  }

  /**
   * 根据对象池的标识符
   * 获取对应的对象池
   */
  getPoolBySign(name) {
    return this[__.poolDic][name] || (this[__.poolDic][name] = [])
  }

  /**
   * 根据传入的对象标识符查找对象
   * 对象池为空创建新的对象池
   */
  getItemByClass(name, className) {
    let pool = this.getPoolBySign(name);

    let result = (pool.length ? pool.shift() : new className())

    return result
  }

  /**
   * 将对象回收到对象池
   * 方便重复利用
   */
  recover(name, instance) {
    this.getPoolBySign(name).push(instance)
  }
}