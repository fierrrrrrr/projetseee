import React,{ Component } from 'react';
import './User7.css';
//import Header from './Header';
import Footer from './Footer';



class User7 extends Component {
  render(){
  return (
    
    <div className="table1-responsive" >
     <div class="responsive">
      <div class="box0000">
        <div class="box1">

          <i class="fas fa-user-circle" ></i>
          <p class="user"><b>Username</b></p>
          
          <table className="buttonn" >
          <button class="button3u7 button4u7"><b>แก้ไขข้อมูล</b></button>
          <button class="button3u7 button5u7"><b>แก้ไขรหัสผ่าน</b></button>
          <button class="button3u7 button6u7"><b>ประกาศของฉัน</b></button>
          <button class="button3u7 button7u7"><b>ประกาศที่ดูล่าสุด</b></button>
          </table>

          <table class="tableinfor0">
          <tr>
            <td><p class="infor1"><b><font size="5" ><u>แก้ไขรหัสผ่าน</u></font></b></p></td>
          </tr>
          </table>

          <table class="tableinfor1">
            
          <tr>
            <th><label for="password"><font size="5" ><b>รหัสผ่านเดิม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="pwwtext" id="password" name="password"></input></th>
            <th></th>
          </tr>

           <tr>
            <th><label for="newpassword"><font size="5" ><b>รหัสผ่านใหม่&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="newpwtext" id="newpassword" name="newpassword" ></input></th>
          </tr>

          <tr>
            <th><label for="confirmpassword"><font size="5" ><b>ยืนยันรหัสผ่าน&nbsp;&nbsp;&nbsp;&nbsp;</b></font></label>
              <input type="cfpwtext" id="confirmpassword" name="confirmpassword" ></input></th>
          </tr>
        
          </table>
       
       
          <br/><br/><br/>
      
          <button class="button3u7 button8u7"><b>บันทึก</b></button>
       


          <Footer/>
        </div>
        </div>
     </div>
    </div>
  );
  }
}

export default User7;