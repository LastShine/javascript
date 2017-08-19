/*
 * @Author: HuangQin 
 * @Date: 2017-08-19 21:51:16 
 * @Last Modified by: HuangQin
 * @Last Modified time: 2017-08-19 22:09:50
 */

//  面向对象 
/*
  类似 Dog.prototype = new Animal();
      var dog = new Dog();
      这样的方式会造成在Dog.prototype生成多余的属性值,而一般属性值是私有,是不能放在原型对象上的。并且由于dog有自己的name属性，原型上的是多余的。
      还有construct的问题。
      console.log(dog.constructor == Animal) //true
      console.log(dog.constructor == Dog) //false

      改进一：
      function ObjCreate(prototype) {
          //把父级的原型对象拿出来，创建一个函数方法让其原型等于它,返回一个只有父级原型对象的纯净实例
          var F = function() {};
          F.prototype = prototype;
          return new F();
      }
      function inherit(subclass,parentclass) {
          subclass.prototype = ObjCreate(parentclass.prototype);
          subclass.prototype.constructor = subclass;
      }

      于是继承可以写成：

      function Animal(name) {
          this.name = name;
      }
      Animal.prototype.run = function () {
          console.log(this.name)
      }
      function Dog(name) {
          //调用父类的构造函数,通过改变this指向将属性赋值到新的实例对象
          Animal.call(this,name)
      }
      inherit(Dog,Animal);
      var dog = new Dog("dog");
      dog.run()

 */

 