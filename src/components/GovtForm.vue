





<template>
    <form @submit.prevent="submitForm">
    <div className='container'>
    
        <div className='container1'>
            <h1>Login</h1>
            <div className='input_box'>
    
    <input type='text' name='app-Rollno' id='app-Rollno' autoComplete='off' placeholder='Application ERoll Number' v-model="RollNO" />
    <i className='bx bxs-user'></i>
    <span v-if="!$v.RollNO.required && $v.name.$dirty">roll no is required</span>
    <span v-if="!$v.RollNO.alpha && $v.name.$dirty">roll no is required</span>
</div>
            <div className='input_box'>
    
    <input type='text' name='app-Fname' id='app-Fname' autoComplete='off' placeholder='Application Father`s Name' v-model="FatherName" />
    <i className='bx bxs-user'></i>
    <span v-if="!$v.FatherName.required && $v.FatherName.$dirty">father name is required</span>
</div>
            <div className='input_box'>
    
    <input type='text' name='app-name' id='app-name' autoComplete='off' placeholder='Application First Name' v-model="FirstName" />
    <i className='bx bxs-user'></i>
    <span v-if="!$v.FirstName.required && $v.FirstName.$dirty">first name is required</span>

</div>

            <div className='input_box'>
    
                <input type='text' name='email' id='email' autoComplete='off' placeholder='Email' v-model="email" />
                <i className='bx bxs-user'></i>
                <span v-if="(!$v.email.required || !$v.email.email ) && $v.email.$dirty">father name is required</span>

            </div>
    
            <div className='input_box'>
    
                <input type='password' name='password' id='password' placeholder='Password' autoComplete='off' v-model="password"/>
                <i className='bx bxs-lock-alt'></i>
                <span v-if="(!$v.password.required  ) && $v.password.$dirty">father name is required</span>
                <span v-if="(!$v.password.minLength || !$v.password.maxLength  ) && $v.password.$dirty">password must be between{{ $v.password.$params.minLength.min }} and {{ $v.password.$params.maxLength.max }}   is required</span>


                
            </div>
            <div className='remember_forgot'>   
               
                <a href="forgot">Forgot Password?</a>
            </div>
            <button type='submit' >Login</button>
            <div className='register_link'>
                <p>Don't have an account?<a href='/signin'>Register</a></p>
            </div>
        </div>
    </div>
</form>
    </template>
<script>
// import { useVuelidate } from '@vuelidate/core'
import { required, minLength,maxLength,alpha,email} from '@vuelidate/validators'
export default {
    
    
    data:() =>({
       

        FatherName:'',
            FirstName:'',
            RollNO:'',
            
             contact: {
        email: ''
      },
            password: "",
           
        
           
      
    }),
    validation:{

        FatherName:{
            required,alpha
        },
        FirstName:{
            required,alpha
        },
        RollNo:{
            required
        },
        email:{
            required,email
        },
        password:{
            required,
            maxLength:maxLength(12),
            minLength:minLength(6)
        }

    },
    methods:{
        submitForm(){
            this.$v.$touch();
            if(!this.$v.$invalid){
                console.log(`name:${this.FirstName},email:${this.email}`);
            }
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "poppins", sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #333;
    background-size: cover;
    background-position: center;
}

.container1 {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);  
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: aliceblue;
    border-radius: 10px;
    padding: 10px 20px;
}

h1 {
    font-size: 36px;
    text-align: center;
}

.container1 .input_box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input_box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: aliceblue;
    padding: 20px 45px 20px 20px;
}

.input_box input::placeholder {
    color: #dbcfcf;

}

.input_box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;

}

.container1 .remember_forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}

.remember_forgot label input {
    accent-color: #fff;
    margin-right: 3px;
}

.remember_forgot a {
    color: #fff;
    text-decoration: none;
}

.remember_forgot a:hover {
    text-decoration: underline;

}

.container1 button {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.container1 .register_link {
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
}

.register_link p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register_link p a:hover {
    text-decoration: underline;

}
</style>