import React, {Component} from 'react'
import './login.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './images/logo.png'

/**
 * 登录的路由组件 Login
 */

/**
 * 1.高阶函数
 *      1）。一类特别的函数
 *          a.接收函数类型的参数
 *          b.返回值是函数
 *      2）。 常见的高阶函数
 *          a.setTimeout()/setInterVal()
 *          b.Promise(()=>{}) then(value =》{}, reason => {})
 *          c.数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
 *          d.函数对象的bind() fn.bind()
 *      3).高阶函数更加动态，更具有扩展性
 * 2.高阶组件
 *      1). 本质就是一个函数
 *      2）.接收一个组件(被包装的组件),返回一个新的组件(包装组件)，包装组件会向被包装组件传入特定属性
 *      3). 作用：扩展组件的功能
 *      4). 高阶组件也是一个高阶函数：接收的组件函数,返回的是一个新的组件函数
 */


class Login extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }

    onFinish = (values) => {
        // 验证成功后触发
        console.log('Received values of form: ', values);
        console.log(Form)
    }
    // 自定义验证规则
    validatePwd = async (rule,value) => {
        /*
        * 用户名/密码的合法性要求
             1). 必须输入
             2). 必须大于4位
             3). 必须小于12位
             4). 必须是英文、数字或下划线组成
        * */
        if (!value) {
            throw new Error('请输入你的密码')
        }else if (value.length <4){
            throw new Error('密码不能小于4位')
        }else if (value.length >12){
            throw new Error('密码不能大于12位')
        }else if (!/^[a-zA-Z0-9_]+$/.test(value)){
            throw new Error('密码必须是英文、数字或下划线组成')
        }
        // console.log(value,rule)
    }

    render() {
        return (
            <div className={'admin_login'}>
                <header className={'login_header'}>
                    <img src={logo} width={'40px'} height={'40px'} alt=""/>
                    <h3>React 后台管理项目</h3>
                </header>
                <section className={'login_content'}>
                    <h2 style={{'fontWeight': 'bold'}}>Login</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        {/*
                            用户名/密码的合法性要求
                              1). 必须输入
                              2). 必须大于4位
                              3). 必须小于12位
                              4). 必须是英文、数字或下划线组成
                        */}
                        <Form.Item
                            name="username"
                            // 配置验证对象：属性名是特定的一些名称
                            rules={[
                                    /* whitespace 忽略空格 */
                                    // 声明式验证：直接使用别人定义好的验证规则进行验证
                                    {required: true, whitespace:true, message: '请输入你的用户名' },
                                    {min: 4, message:'用户名不能少于于4位'},
                                    {max: 12, message:'用户名最多不能超过12位'},
                                    // 自定义验证
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'},

                                ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                    { validator: this.validatePwd}
                                ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                        </Form.Item>

                        <Form.Item style={{'textAlign':'center'}}>
                            <Button style={{'width': '100%'}} type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                        </Form.Item>
                    </Form>
                </section>
                <footer className={'login_footer'}></footer>
            </div>
        )
    }
}

console.dir(Login)

export default Login