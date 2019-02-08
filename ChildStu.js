import Student from './Student'

export default class ChildStu extends Student{
    constructor(){
        super("赵晓玄","男",18);
    }

    getStudentInfo(): * {
        return "装饰模式："+super.getStudentInfo();
    }

}