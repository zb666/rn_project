export default class Student {

    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getStudentInfo(){
        return "姓名："+this.name+" 性别："+this.age+" 年龄："+this.age;
    }

}